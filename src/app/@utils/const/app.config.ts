import { environment } from "@env/environment";

export const AppConfig = {
    name: environment.name,
    production: environment.production,
    title: environment.title,
    productName: environment.productName,
    copyrightInfo: environment.copyrightInfo,
    apiBaseUrl: environment.apiBaseUrl,
    useMockServer: environment.useMockServer,
    version: environment.version,
    apiUrl: {
        authenticate: 'auth/authenticate',
        validateToken: 'auth/validateToken',
        validateRolePermissions: 'auth/validateRolePermissions',
        checkEmail: 'auth/checkEmail',
        resetPassword: 'auth/resetPassword',
        getUsers: 'user',
        dashboardStat: 'dashboardStat',
        post: 'cms',
        getPosts: 'cms/getPosts',
        getHolidays: 'cms/getHolidays',
        addPost: 'cms',
        updatePost: 'cms',
        deletePost: 'cms',
        getContentCalendar: 'cms/getCalendar',
        addContentCalendar: 'cms/addCalendar',
        editContentCalendar: 'cms/editCalendar',
        deleteContentCalendar: 'cms/deleteCalendar',
        addHoliday: 'cms/addHoliday',
        updateHoliday: 'cms/updateHoliday',
        deleteHoliday: 'cms/deleteHoliday',
        userFormData: 'userFormData',
        markAsRead: 'cms/markAsRead',
        addUser: 'user',
        deleteUser: 'user',
        userDetails: 'user/userDetails',
        getMyProfile: 'user/myProfile',
        changePassword: 'user/changePassword',
        userData: 'user/userData',
        updateUserData: 'user/updateUserData',
        updateUser: 'user/updateUser',
        getAddress: 'address',
        addAddress: 'address',
        updateAddress: 'address',
        deleteAddress: 'address',
        academicFormData: 'academic/formData',
        getEducation: 'academic',
        addEducation: 'academic',
        updateEducation: 'academic',
        deleteEducation: 'academic',
        experienceFormData: 'employment/formData',
        getExperience: 'employment',
        addExperience: 'employment',
        updateExperience: 'employment',
        deleteExperience: 'employment',
        payrollFormData: 'payroll/formData',
        getPayroll: 'payroll',
        addPayroll: 'payroll',
        updatePayroll: 'payroll',
        deletePayroll: 'payroll',
        emergencyContactFormData: 'contact/formData',
        getEmergencyContact: 'contact',
        addEmergencyContact: 'contact',
        updateEmergencyContact: 'contact',
        deleteEmergencyContact: 'contact',
        timesheetFormData: 'timesheet/formData',
        getTimesheet: 'timesheet',
        addTimesheet: 'timesheet',
        updateTimesheet: 'timesheet',
        deleteTimesheet: 'timesheet',
        userDropdown: 'userDropdown',
        projectDropdown: 'project/projectDropdown',
        getProject: 'project',
        addProject: 'project',
        updateProject: 'project',
        deleteProject: 'project',
        taskFormData: 'task/formData',
        getTask: 'task',
        addTask: 'task',
        updateTask: 'task',
        deleteTask: 'task',
        searchUser: 'user/search',
        approvers: 'user/approvers',
        changeApprovers: 'user/changeApprovers',
        getEmployees: 'user/getEmp',
        timesheetReport: 'timesheet/report',
        getLeaves: 'leave',
        updateLeave: 'leave/updateLeaveData',
        applyLeave: 'leave/apply',
        getLeaveData: 'leave/getLeaveData',
        getReportees: 'user/getReportees'
    }
};