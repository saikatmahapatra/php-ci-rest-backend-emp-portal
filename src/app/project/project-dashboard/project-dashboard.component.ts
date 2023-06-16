import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ceil } from 'lodash';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';
import { AppConfig } from 'src/app/@utils/const/app.config';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  data: any;
  options: any;
  projectInfoData: any;
  projectId!: number | any;
  chartDataLabel: any = [];
  chartDataValue: any = [];
  totalWorkforce: number = 0;
  totalBurnedHours: number = 0;

  // donought chart
  doughnutChartData: any;
  doughnutChartOptions: any;
  doughnutChartLabel: any = [];
  doughnutChartValue: any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiSvc: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.projectId = params.get('projectId');
    });
    if (this.projectId) {
      this.getStatData();
    }
  }

  renderBarChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.chartDataLabel,
      datasets: [
        {
          label: 'Logged Hours',
          //backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          //borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: this.chartDataValue
        }
      ]
    };

    this.options = {
      indexAxis: 'x',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  renderDoughnutChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.doughnutChartData = {
      labels: this.doughnutChartLabel,
      datasets: [
        {
          data: this.doughnutChartValue,
          // backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          // hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };
    this.doughnutChartOptions = {
      cutout: '60%',
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  getStatData() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', this.projectId);
    const options = { params: queryParams };

    let projectDetailsAPI = this.apiSvc.get(AppConfig.apiUrl.getProject, options);
    let analyticsDataAPI = this.apiSvc.get(AppConfig.apiUrl.getChartData, options);
    forkJoin([projectDetailsAPI, analyticsDataAPI]).subscribe({
      next: (response: any) => {
        // project info
        this.projectInfoData = response[0]?.data?.data_rows ? response[0]?.data?.data_rows[0] : {};
        // worklog info
        let set : any= [];
        if (response[1]?.data.length > 0) {
          this.totalWorkforce = response[1]?.data.length || 0;
          response[1]?.data.forEach((element: any) => {
            if(!set.includes(element.task_id_1)) {
              set.push(element.task_name)
            }
            this.chartDataLabel.push(element.user_full_name+' ID'+element?.timesheet_created_by);
            this.chartDataValue.push(element.logged_hours);
          });

          let totalBurnedHours = this.chartDataValue.reduce((accumulator: number, currentValue: number) => {
            return (accumulator + Number(currentValue))
          },0);
          this.totalBurnedHours = totalBurnedHours.toFixed(2);
          this.renderBarChart();
        }

        if (response[1]?.taskData.length > 0) {
          response[1]?.taskData.forEach((element: any) => {
            this.doughnutChartLabel.push(element.task_name+' ID'+element.task_id_1+' '+ '('+element.sum_hours+' hrs)');
            this.doughnutChartValue.push(element.sum_hours);
          });
          this.renderDoughnutChart();
        }

      },
      error: (response: HttpErrorResponse) => {
      }
    });
  }
}
