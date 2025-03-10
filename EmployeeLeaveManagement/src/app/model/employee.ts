export class Employee {
  employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;

  constructor() {
    this.employeeId = 0;
    this.employeeName = '';
    this.contactNo = '';
    this.emailId = '';
    this.deptId = 0;
    this.password = '';
    this.gender = '';
    this.role = '';
  }
}

export interface IParentDept {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}

export interface IChildDept {
  childDeptId: number;
  parentDeptId: number;
  departmentName: string;
}

export interface IAPIResponse {
  message: string;
  result: boolean;
  data: any;
}

export interface ILeaveType {
  leaveTypeId: number;
  typeName: string;
}

export interface IEarnedLeave {
  earnedLeaveId: number;
  employeeId: number;
  totalEarnedLeaves: number;
  totalSickEarnedLeaves: number;
  lastUpdatedDate: string;
  employeeName: string;
}

export interface ILeaveRequest {
  leaveId: number;
  employeeId: number;
  leaveTypeId: number;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
  requestDate: string;
  employeeName: string;
  typeName: string;
}
