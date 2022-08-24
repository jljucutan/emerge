/**
 * Job Code mapping
 * job codes and corresponding hierarchy, exempt, and supervisor is stored here
 * 01/07/2020 | jjucutan | initial config created
 * 02/11/2020 | jjucutan | added job function and job function code
 */
const JOB_CODE_MAP = [
  {
    "jobCode":100000,
    "description":"Non-Share Partner",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Partner",
    "jobFunctionCode":105
  },
  {
    "jobCode":100001,
    "description":"Of Counsel - P",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Of Counsel",
    "jobFunctionCode":104
  },
  {
    "jobCode":100118,
    "description":"Share Partner",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Partner",
    "jobFunctionCode":105
  },
  {
    "jobCode":100326,
    "description":"Associate",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Associate",
    "jobFunctionCode":101
  },
  {
    "jobCode":100704,
    "description":"Of Counsel - W2",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Of Counsel",
    "jobFunctionCode":104
  },
  {
    "jobCode":101173,
    "description":"Counsel",
    "hierarchy":"Attorney",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Associate",
    "jobFunctionCode":101
  },
  {
    "jobCode":100301,
    "description":"Law Clerk (Visiting Attorney)",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100328,
    "description":"PILI Associate",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100329,
    "description":"Stipend Associate",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100330,
    "description":"Summer Associate",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100619,
    "description":"Law Clerk",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100758,
    "description":"Vacation Student",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100811,
    "description":"Summer Intern",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101183,
    "description":"Foreign Legal Consultant",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101188,
    "description":"Sr Foreign Legal Consultant",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101204,
    "description":"Foreign Assoc (Visiting Atty)",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor": false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101299,
    "description":"Trainee Solicitor I",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101300,
    "description":"Trainee Solicitor II",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101364,
    "description":"Law Student",
    "hierarchy":"Attorney Life Cycle",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101365,
    "description":"Legal Intern",
    "hierarchy":"Attorney Life Cycle",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101366,
    "description":"Legal Research Assistant",
    "hierarchy":"Attorney Life Cycle",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101367,
    "description":"Legal Trainee",
    "hierarchy":"Attorney Life Cycle",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101368,
    "description":"Law Assessor",
    "hierarchy":"Attorney Life Cycle",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101459,
    "description":"Research Analyst",
    "hierarchy":"Attorney Life Cycle",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100002,
    "description":"Office Administrator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100003,
    "description":"Office Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100006,
    "description":"Office Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100007,
    "description":"Office Services Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100014,
    "description":"Office Services Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100015,
    "description":"Ofc Svc/Fclt Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100016,
    "description":"Ofc Svc/Fclt Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100017,
    "description":"Ofc Svc/Purch Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100024,
    "description":"Investment Partnership Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100029,
    "description":"Payroll Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100031,
    "description":"Payroll Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100033,
    "description":"Practice Area Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100034,
    "description":"Practice Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100035,
    "description":"Practice Assistant Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100036,
    "description":"Practice Assistant Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100042,
    "description":"Junior Paralegal",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Junior Paralegal",
    "jobFunctionCode":106
  },
  {
    "jobCode":100044,
    "description":"Project Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100045,
    "description":"Sr Project Manager I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100047,
    "description":"Accounting And Billing Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100049,
    "description":"Accounting Clerk",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100050,
    "description":"Acct Svc Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100051,
    "description":"Acct Svc Coord - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100052,
    "description":"Accounting Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100053,
    "description":"Accounting Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100054,
    "description":"Senior Accounting Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100064,
    "description":"Purchasing Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100065,
    "description":"Purchasing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100066,
    "description":"Purchasing Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100067,
    "description":"Purchasing Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100069,
    "description":"Real Estate Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100071,
    "description":"Receptionist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100072,
    "description":"Receptionist Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100073,
    "description":"Receptionist Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100075,
    "description":"Records Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100076,
    "description":"Records Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100078,
    "description":"Rec Disp Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100080,
    "description":"Records Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100081,
    "description":"Records Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100082,
    "description":"Records Supervisor - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100083,
    "description":"Records Supervisor - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100087,
    "description":"Repro & Dig Svc Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100088,
    "description":"Reprographics Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100089,
    "description":"Reprographics Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100091,
    "description":"Reprographics Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100092,
    "description":"Reprographics Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100096,
    "description":"Research Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100097,
    "description":"Research Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100098,
    "description":"Restructuring Cnflct Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100100,
    "description":"Accounts Payable Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100101,
    "description":"Accounts Payable Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100102,
    "description":"Retiree",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Partner",
    "jobFunctionCode":105
  },
  {
    "jobCode":100103,
    "description":"Junior Secretary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100104,
    "description":"Legal Secretary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100105,
    "description":"Secretarial Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100114,
    "description":"Sec Svc Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100115,
    "description":"Secretarial Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100116,
    "description":"Sec Svc Supvs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100130,
    "description":"Risk Management Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100134,
    "description":"Administrative Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100142,
    "description":"Administrative Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100150,
    "description":"Storage Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100151,
    "description":"Support Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100152,
    "description":"Support Services Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100158,
    "description":"Sr Sys Admin/Svr Engr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100159,
    "description":"System Operator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100163,
    "description":"Training Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100171,
    "description":"Technology Support Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100177,
    "description":"Tax Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100178,
    "description":"Tax Accounting Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100179,
    "description":"Senior Tax Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100182,
    "description":"Sr Telecommunications Engr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100189,
    "description":"Telecopy/Dig Doc Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100194,
    "description":"Technical Document Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100202,
    "description":"Training & Support Spec III",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100208,
    "description":"Sr FW Trial Setup Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100227,
    "description":"User Support Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100236,
    "description":"Word Processor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100240,
    "description":"Accounting Assistant I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100241,
    "description":"Accounting Assistant II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100242,
    "description":"Accounts Payable Assistant II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100247,
    "description":"Att Rcrut Coord - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100248,
    "description":"Att Rcrut Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100250,
    "description":"Attorney Training Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100251,
    "description":"Billing Assistant I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100252,
    "description":"Billing Assistant II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100264,
    "description":"Clndr Court Svc Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100265,
    "description":"Clndr Court Svc Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100269,
    "description":"Conference Center Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100274,
    "description":"Conflicts Analyst I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100275,
    "description":"Conflicts Analyst II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100278,
    "description":"Executive Assistant - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100279,
    "description":"Executive Assistant - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100280,
    "description":"Executive Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100281,
    "description":"Expense Reporting Assistant II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100283,
    "description":"General Services Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100284,
    "description":"German Law Clerk",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100294,
    "description":"Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100298,
    "description":"Human Resources Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100303,
    "description":"Paralegal I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100304,
    "description":"Paralegal II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100306,
    "description":"Paralegal Program Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100314,
    "description":"Lit Supt Spcl I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100315,
    "description":"Lit Supt Spcl II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100325,
    "description":"Business Intake Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100331,
    "description":"Payables Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100340,
    "description":"User Support Specialist I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100341,
    "description":"User Support Specialist II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100354,
    "description":"Attorney Recruiting Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100355,
    "description":"Attorney Recruiting Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100356,
    "description":"Attorney Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100357,
    "description":"Att Trn & Dvlp Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100360,
    "description":"Attorney Training Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100361,
    "description":"Att Rcrut & Dvlp Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100362,
    "description":"Att Trn & Dvlp Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100363,
    "description":"Att Trn & Dvlp Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100378,
    "description":"Benefits Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100379,
    "description":"Benefit Services Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100380,
    "description":"Benefits Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100384,
    "description":"Billing Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100385,
    "description":"Billing Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100386,
    "description":"Billing Clerk",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100387,
    "description":"Billing Department Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100391,
    "description":"Billing/Accounting Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100393,
    "description":"Senior Billing Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100406,
    "description":"Bus Dvlp/Client Svc Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100410,
    "description":"Calendar Court Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100411,
    "description":"Clndr Court Svc Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100412,
    "description":"Clndr Court Svc Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100413,
    "description":"Case Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Junior Paralegal",
    "jobFunctionCode":106
  },
  {
    "jobCode":100414,
    "description":"Cash Receipts Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100417,
    "description":"Chief Financial Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100418,
    "description":"Chief Human Resources Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100419,
    "description":"Chief Information Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100420,
    "description":"Chief Marketing Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100424,
    "description":"Client Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100432,
    "description":"Conference Center Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100433,
    "description":"Conference Center Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100440,
    "description":"Conflicts Analyst Supervisor N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100443,
    "description":"Conflicts Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100450,
    "description":"Consultant (Investigator)",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100453,
    "description":"Contract Worker (MGT)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100454,
    "description":"Contract Worker (BUS DEV)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100456,
    "description":"Contract Worker (OPS)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100457,
    "description":"Contract Worker (FIN)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100459,
    "description":"Contract Worker (HR)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100460,
    "description":"Contract Worker (RM)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100463,
    "description":"Contract Worker (PRC SVS)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100464,
    "description":"Contract Worker (TEC)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100465,
    "description":"Corp Paralegal Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100488,
    "description":"Digital Services Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100489,
    "description":"Digital Services Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100490,
    "description":"Director of Administration",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100503,
    "description":"Document Services Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100511,
    "description":"Chief Administrative Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100512,
    "description":"Expense Reporting Assistant I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100513,
    "description":"Expense Reporting Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100515,
    "description":"Facilities Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100517,
    "description":"Facilities Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100518,
    "description":"Facilities Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100519,
    "description":"Facilities Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100520,
    "description":"File Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100521,
    "description":"Fin & Acct Svc Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100522,
    "description":"Financial Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100524,
    "description":"Financial Benefits Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100530,
    "description":"Fin Info Sys Anlst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100534,
    "description":"Financial Services Coordinator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100538,
    "description":"Senior Financial Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100540,
    "description":"Controller",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100546,
    "description":"Risk Management Systems Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100549,
    "description":"Food Svc/Confr Svc Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100551,
    "description":"Food Svc/Confr Svc Supvs",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100554,
    "description":"General Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100556,
    "description":"General Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100558,
    "description":"Graphics Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100570,
    "description":"HR Recruiting Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100571,
    "description":"HR Staff Recruiter",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100572,
    "description":"HR Staff Rcrut Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100574,
    "description":"HRIS Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100576,
    "description":"HRIS Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100577,
    "description":"HRIS Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100578,
    "description":"HR & Dvlp Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100579,
    "description":"Human Resources Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100585,
    "description":"Human Resources Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100589,
    "description":"Senior Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100613,
    "description":"Internal Consultant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100614,
    "description":"Invest Partnerships Support",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100616,
    "description":"Lateral Legal Rec Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100617,
    "description":"Lateral Legal Recruiting Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100621,
    "description":"Paralegal Program Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100622,
    "description":"Lgl Asst Pgm Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100623,
    "description":"Paralegal Program Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100628,
    "description":"Senior Paralegal",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100630,
    "description":"Library Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100636,
    "description":"Research Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100640,
    "description":"Lit Supt Svc Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100643,
    "description":"Risk Management Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100644,
    "description":"Risk Management Cmply Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100650,
    "description":"Risk Management Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100653,
    "description":"Loss Prvnt Cmply Spcl",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100657,
    "description":"Mailroom Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100658,
    "description":"Mailroom Clerk",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100659,
    "description":"Mailroom Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100661,
    "description":"Mailroom Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100664,
    "description":"Mailroom Ops Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100672,
    "description":"Mrg/Acq Clearance Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100688,
    "description":"Network Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100700,
    "description":"Business Intake Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100701,
    "description":"New Business Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100702,
    "description":"Business Intake Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100703,
    "description":"Business Intake Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100707,
    "description":"Facilities/Guest Services Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100708,
    "description":"Billing Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100710,
    "description":"Fin Info Systems Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100712,
    "description":"FW Trial Setup Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100716,
    "description":"Firmwide Compliance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100717,
    "description":"Compensation Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100723,
    "description":"Fclt & Guest Svc Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100725,
    "description":"Fclt & Guest Svc Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100728,
    "description":"Atty Recruiting & Dvlp Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100731,
    "description":"Legal Secretary Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100732,
    "description":"Knowledge Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100736,
    "description":"Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100741,
    "description":"Reprographics Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100744,
    "description":"Alumni Program Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100745,
    "description":"Professional Support Lawyer",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100746,
    "description":"Treasurer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100747,
    "description":"Assistant Managing Clerk",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100750,
    "description":"Document Services Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100753,
    "description":"Contract Attorney",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Contractor",
    "jobFunctionCode":108
  },
  {
    "jobCode":100755,
    "description":"Att Trn & Dvlp Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100756,
    "description":"CLE Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100759,
    "description":"Guest Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100761,
    "description":"Graduate Recruitment Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100762,
    "description":"Intl Finance Controller",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100766,
    "description":"Mrg/Acq Clearance Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100771,
    "description":"International Contract Atty",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Contractor",
    "jobFunctionCode":108
  },
  {
    "jobCode":100773,
    "description":"Financial Analyst II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100780,
    "description":"Senior Trial Support Spcl",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100783,
    "description":"FW Atty Training Admin. Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100785,
    "description":"FW Administrative Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100787,
    "description":"Infrastructure Administrator I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100790,
    "description":"Cash Receipts Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100794,
    "description":"Conference Center Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100798,
    "description":"HRIS Analyst II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100799,
    "description":"Staff Accountant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100804,
    "description":"Conflicts Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100805,
    "description":"HRIS Analyst I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100807,
    "description":"Office Administration Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100809,
    "description":"Restructuring Revenue Coord",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100812,
    "description":"Digital Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100813,
    "description":"Systems Administration Supvs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100814,
    "description":"Restruc Billing Asst Supv",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100816,
    "description":"Records Compliance Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100817,
    "description":"Database Integrity Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100819,
    "description":"Attorney Recruiting Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100820,
    "description":"File Assistant Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100821,
    "description":"HR & Dvlp Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100822,
    "description":"Mailroom Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100823,
    "description":"Office Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100824,
    "description":"Receptionist Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100825,
    "description":"Reprographics Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100826,
    "description":"Technology Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100827,
    "description":"Records Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100830,
    "description":"Partner Financial Svc Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100832,
    "description":"Director of Taxes",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100833,
    "description":"Dir of Pln & Fin Analysis",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100837,
    "description":"Firmwide Pro Bono Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100840,
    "description":"Graduate Recruitment Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100842,
    "description":"Secretary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100844,
    "description":"Lit Technology Infrastruc Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100847,
    "description":"Blackberry/PDA Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100848,
    "description":"Executive Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100852,
    "description":"General Services Intake Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100854,
    "description":"Legal Assistant Clerk",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100856,
    "description":"Loss Prevention Systems Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100862,
    "description":"Timekeeper",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100863,
    "description":"Digital Services Equip Tech",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100864,
    "description":"Facilities Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100865,
    "description":"General Services Asst (Mail)",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100866,
    "description":"Digital Svcs Production Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100867,
    "description":"General Services Coord (Mail)",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100868,
    "description":"Digital Svcs Production Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100869,
    "description":"Digital Svcs Production Supvs",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100871,
    "description":"Applications Developer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100873,
    "description":"Firmwide Diversity Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100875,
    "description":"Sr Director FW Real Estate",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100876,
    "description":"Sr Director of Administration",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100877,
    "description":"Sr Director of Admin - INTL",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100880,
    "description":"Assoc Dir Facility Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100881,
    "description":"Assoc Dir General Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100882,
    "description":"Assoc Dir Practice Assistant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100883,
    "description":"Assoc Director Digital Svcs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100884,
    "description":"Assoc Dir Support Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100885,
    "description":"Associate Director Operations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100886,
    "description":"Assoc Dir Atty Rcrut & Dvlp",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100887,
    "description":"Assoc Dir Atty Training & Dvlp",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100888,
    "description":"Assoc Dir Paralegal Program",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100889,
    "description":"Assoc Director Human Resources",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100890,
    "description":"Sr Dir Atty Human Resources",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100891,
    "description":"Dir Atty Rcrut & Diversity",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100892,
    "description":"Dir Lgl Personnel & Recruiting",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100893,
    "description":"Director Benefits",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100894,
    "description":"Director Human Resources",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100895,
    "description":"Sr Dir FW Human Resources",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100898,
    "description":"Assoc Dir Distributed Comp",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100899,
    "description":"Assoc Dir HR and Payroll Apps",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100901,
    "description":"Assoc Director Applications",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100902,
    "description":"Assoc Director Project Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100903,
    "description":"Assoc Dir Technology Support",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100904,
    "description":"Assoc Dir Trial Technology",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100905,
    "description":"Assoc Director Architecture",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100907,
    "description":"Associate Director Development",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100908,
    "description":"Assoc Director Telecom Ops",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100909,
    "description":"Dir Cust Rel IT Practice Supp",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100910,
    "description":"Director, Applications",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100912,
    "description":"Director Litigation Technology",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100913,
    "description":"Director, Infrastructure",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100914,
    "description":"Dir Mergers/Acquisitions Clr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100915,
    "description":"Associate Director Records",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100916,
    "description":"Sr Director Risk Management",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100917,
    "description":"Practice Asst Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100918,
    "description":"Human Resources Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100919,
    "description":"Knowledge Mgmt Admin Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100920,
    "description":"Diversity Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100921,
    "description":"FW Lit Technology Business Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100923,
    "description":"Conference Ctr Technology Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100927,
    "description":"Contract Worker (RES)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100928,
    "description":"Sr Dir Research&Knowledge Srvc",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100930,
    "description":"Employee Svcs & Benefits Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100931,
    "description":"Desktop Applications Engr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100932,
    "description":"Prof Responsibility Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100933,
    "description":"Calendar Court Services Supvs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100935,
    "description":"Senior Payables Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100937,
    "description":"Risk Management Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100939,
    "description":"Storage Operations Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100943,
    "description":"Security Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100944,
    "description":"Security Engineering Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100945,
    "description":"Manager-PA/CA",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100946,
    "description":"Security Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100947,
    "description":"New Business and Conflicts Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100950,
    "description":"New Bus & Conflicts Sr Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100952,
    "description":"IT Service Delivery Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100955,
    "description":"Atty Rec Training & Dev Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100957,
    "description":"Trial Technology Specialist I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100958,
    "description":"Trial Technology Specialist II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100959,
    "description":"Information Security Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100961,
    "description":"Fac & Guest Srvcs Project Spec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100962,
    "description":"Financial Benefits Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100964,
    "description":"Facilities Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100966,
    "description":"Pro Bono Summer Fellowship",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100969,
    "description":"Legal Intern",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100970,
    "description":"Assoc Dir of PA & Finance Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100971,
    "description":"Assistant Controller",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100972,
    "description":"Senior Collections Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100973,
    "description":"Trainee Solicitor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":100974,
    "description":"Restructuring Practice Grp Crd",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":100977,
    "description":"Global Service Desk Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100978,
    "description":"Human Resources Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100980,
    "description":"Senior Purchasing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100983,
    "description":"Assoc Dir of Administration",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100985,
    "description":"PeopleSoft Developer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100988,
    "description":"HR/Attorney Recruiting Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100989,
    "description":"Benefits Analyst I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100990,
    "description":"Senior Accounts Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100992,
    "description":"Applications Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100993,
    "description":"Applications Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100994,
    "description":"Sr Applications Developer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100995,
    "description":"Sr Applications Specialist II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101002,
    "description":"Database Engineer 2",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101004,
    "description":"Desktop Operations Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101005,
    "description":"Desktop Operations Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101008,
    "description":"DMS Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101014,
    "description":"Instruct Design Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101016,
    "description":"Messaging Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101017,
    "description":"Messaging Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101018,
    "description":"Messaging Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101019,
    "description":"Telecommunications Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101020,
    "description":"Network Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101021,
    "description":"Network Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101022,
    "description":"Network Engineer Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101025,
    "description":"Remote Computing Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101026,
    "description":"Security Operations Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101027,
    "description":"Security Engr Arch Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101028,
    "description":"Security Policy Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101029,
    "description":"Server Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101030,
    "description":"Server Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101034,
    "description":"Service Management Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101035,
    "description":"Service Mgmt Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101036,
    "description":"Storage Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101039,
    "description":"Technology Support Analyst I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101040,
    "description":"Technology Support Analyst II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101041,
    "description":"Technology Support Analyst III",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101045,
    "description":"Training Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101048,
    "description":"DMS Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101051,
    "description":"Storage Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101052,
    "description":"Training Specialist II - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101053,
    "description":"Dir Atty Train & Develop",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101054,
    "description":"Senior Internal Auditor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101055,
    "description":"Dir Atty Recruit & Develop",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101056,
    "description":"DMS Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101057,
    "description":"Technology Support Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101058,
    "description":"Service Delivery Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101059,
    "description":"Security Operation Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101060,
    "description":"Financial Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101061,
    "description":"Pro Bono Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101062,
    "description":"Atty Recruiting & Dvlp Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101063,
    "description":"Attorney Recruiting Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101064,
    "description":"Business Development Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101065,
    "description":"Business Dev Assoc Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101066,
    "description":"Business Development Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101067,
    "description":"Business Development Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101068,
    "description":"Business Development Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101069,
    "description":"Senior Director Business Dev",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101070,
    "description":"Business Dev Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101071,
    "description":"Atty Dev Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101074,
    "description":"Records Compliance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101076,
    "description":"Business Development Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101077,
    "description":"Global Service Desk Analyst II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101083,
    "description":"Accounts Assistant Coordinator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101084,
    "description":"Records Specialist - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101085,
    "description":"Gbl Service Desk Analyst III",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101089,
    "description":"Legal Secretary Trainee",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101090,
    "description":"Risk Information Systems Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101091,
    "description":"HR Info Management Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101092,
    "description":"Debt Fin Knowledge Mgt Adm Ast",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101093,
    "description":"Prof Development Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101095,
    "description":"MCLE Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101096,
    "description":"Atty Rec & Training Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101097,
    "description":"Benefits Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101098,
    "description":"HR / Benefits Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101099,
    "description":"Conference Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101100,
    "description":"Atty Rec, Trn & Dev Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101101,
    "description":"HR Assistant/Staff Recruiter",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101102,
    "description":"Atty Div & Pro Bono Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101103,
    "description":"Conflicts Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101104,
    "description":"Finance Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101106,
    "description":"Info Security Policy Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101107,
    "description":"General Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101109,
    "description":"Quality Control Engineer Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101110,
    "description":"Human Resources Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101111,
    "description":"Secretarial Svc/Staff Recr Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101112,
    "description":"After-Hours Legal Secretary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101113,
    "description":"Evening Legal Secretary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101114,
    "description":"Remote Computing Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101117,
    "description":"Billing Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101118,
    "description":"Research Services Coordinator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101119,
    "description":"Desktop Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101120,
    "description":"Desktop Applications Eng II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101121,
    "description":"PeopleSoft Developer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101122,
    "description":"Senior PeopleSoft Developer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101123,
    "description":"Senior HR Applications Spcl I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101124,
    "description":"Associate Director Vendor Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101125,
    "description":"Associate Director Training",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101126,
    "description":"Assoc Dir Office of the CIO",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101127,
    "description":"Assoc Dir Desktop Apps Eng",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101128,
    "description":"Assoc Dir IT Prod Dev & Analy",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101129,
    "description":"Assoc Dir IT Service Delivery",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101130,
    "description":"Security Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101132,
    "description":"IT Service Delivery Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101133,
    "description":"Server & Storage Ops Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101134,
    "description":"Desktop Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101135,
    "description":"Audiovisual Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101137,
    "description":"Global Service Desk Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101138,
    "description":"Project Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101139,
    "description":"Applications Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101140,
    "description":"Applications Developer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101141,
    "description":"Conference Ctr Technology Supv",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101142,
    "description":"Conference Ctr Technly Spcl II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101144,
    "description":"Database Administrator II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101145,
    "description":"DMS Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101146,
    "description":"HR Applications Specialist I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101147,
    "description":"IT Information Mgmt Spec I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101149,
    "description":"Messaging Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101150,
    "description":"Remote Computing Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101151,
    "description":"Remote Computing Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101152,
    "description":"Senior Business Analyst I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101153,
    "description":"Sr Database Administrator I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101155,
    "description":"Sr IT Information Mgmt Spcl I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101156,
    "description":"Server and Storage Arch II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101158,
    "description":"Technology Support Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101159,
    "description":"Technology Support Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101160,
    "description":"Training Specialist I-E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101161,
    "description":"Billing Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101162,
    "description":"Legal Translator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101164,
    "description":"Service Mgmt Engineer Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101165,
    "description":"Data Ctr Operations Engr Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101166,
    "description":"Digital Services Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101167,
    "description":"Director of Admin, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101168,
    "description":"Accounting Mgr., Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101169,
    "description":"Director of Internal Audit",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101170,
    "description":"FW Financial Info System Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101171,
    "description":"Financial Analysis Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101172,
    "description":"Legal Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Associate",
    "jobFunctionCode":101
  },
  {
    "jobCode":101174,
    "description":"Sr Project Manager II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101175,
    "description":"Database Architect-Engr Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101176,
    "description":"Financial Controller-Europe",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101178,
    "description":"Facilities and Records Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101179,
    "description":"Sr Applications Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101180,
    "description":"Guest Services Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101181,
    "description":"Sys Admin Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101182,
    "description":"Conflicts Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101184,
    "description":"Human Resources Specialist - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101185,
    "description":"Director of Finance - Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101186,
    "description":"FW Admin Coordinator - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101187,
    "description":"Assoc Dir Research Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101189,
    "description":"FW Administrative Svcs Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101190,
    "description":"Billing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101191,
    "description":"Instruct Design Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101192,
    "description":"Electronic Services Librarian",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101193,
    "description":"Director of Finance - Europe",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101195,
    "description":"Pro Bono Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101196,
    "description":"Litigation Support Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101197,
    "description":"Desktop Operations Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101198,
    "description":"Digital Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101199,
    "description":"Repro & Dig Svc Supv",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101200,
    "description":"Enterprise Applications Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101201,
    "description":"Human Resources Operations Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101202,
    "description":"Timekeeper/HR Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101203,
    "description":"Accounts Payable Coord - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101205,
    "description":"HR Consultant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101206,
    "description":"Attorney Human Resources Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101207,
    "description":"Assistant Internal Auditor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101208,
    "description":"Alumni Engmnt Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101209,
    "description":"Firmwide Director of Benefits",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101210,
    "description":"Collections Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101211,
    "description":"Tax Accountant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101212,
    "description":"FW Admin Services Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101213,
    "description":"Manager-Business Intelligence",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101215,
    "description":"Sec Engr Arch Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101216,
    "description":"Sec Engr Arch Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101217,
    "description":"Sr Accounting Services Coord",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101218,
    "description":"Att Rcrut & Dvlp Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101219,
    "description":"Purchasing & Accounting Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101220,
    "description":"Att Rec Info Mgmt Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101221,
    "description":"Assoc Dir Atty Prof Dvlp",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101223,
    "description":"Assoc Dir FW Atty Trg Adm Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101224,
    "description":"Assoc Dir Div & Incl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101225,
    "description":"Assoc Dir FW Pro Bono",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101227,
    "description":"Assoc Dir Risk Management",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101229,
    "description":"FW CLE Compliance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101230,
    "description":"Desktop Applications Engr Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101231,
    "description":"Financial Benefits Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101232,
    "description":"FW Comp & HR Projects Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101233,
    "description":"Global Service Desk Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101234,
    "description":"HR Recruiting Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101235,
    "description":"HR/Atty Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101236,
    "description":"Director of Risk Management",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101237,
    "description":"Sr Applications Developer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101238,
    "description":"Sr Fac & Guest Services Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101239,
    "description":"Senior HR Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101240,
    "description":"Senior Legal Translator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101241,
    "description":"Server Engineer Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101242,
    "description":"Assoc Dir Corp Paralegal Prgm",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101243,
    "description":"Mgr of Ptnr Financial Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101244,
    "description":"Pro Bono Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101245,
    "description":"HR/Admin Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101246,
    "description":"HR Applications Specialist II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101247,
    "description":"Training Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101248,
    "description":"FW Human Resources Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101249,
    "description":"Professional Dvlp Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101250,
    "description":"Atty Training & Dvlp Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101251,
    "description":"Assoc Dir Alumni Engagement",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101252,
    "description":"Benefits Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101253,
    "description":"Junior Paralegal Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Junior Paralegal",
    "jobFunctionCode":106
  },
  {
    "jobCode":101254,
    "description":"Director of Finance - Intl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101255,
    "description":"Network & Security Ops Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101256,
    "description":"Alumni Program Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101257,
    "description":"Sr Fin Info Systems Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101259,
    "description":"Director FW Atty Development",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101260,
    "description":"Risk Information Systems Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101262,
    "description":"Firmwide Billing Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101263,
    "description":"Interim Chief Financial Office",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101265,
    "description":"Senior Operations Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101266,
    "description":"Alumni Engagmt Ops & Dlvry Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101267,
    "description":"Internal Audit Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101268,
    "description":"Firmwide Expense Reporting Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101269,
    "description":"Firmwide Acct Receivable Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101270,
    "description":"Assoc Dir FW Finance Info Sys",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101271,
    "description":"Cashier Coordinator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101272,
    "description":"Billing Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101273,
    "description":"Repro & Dig Svc Supv - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101274,
    "description":"Purchasing & Travel Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101275,
    "description":"Lgl Asst Pgm Supvs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101276,
    "description":"HRIS Mgr, Information Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101277,
    "description":"Facilities Services Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101278,
    "description":"FW Staff Trn & Dvlp Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101279,
    "description":"Benefits Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101280,
    "description":"Atty Recruiting & Dvlp Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101281,
    "description":"Support Services Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101282,
    "description":"Senior Case Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Junior Paralegal",
    "jobFunctionCode":106
  },
  {
    "jobCode":101283,
    "description":"IT Information Mgmt Spec II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101284,
    "description":"Assoc Dir Desktop Operations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101285,
    "description":"Messaging Operations Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101286,
    "description":"Applications Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101287,
    "description":"Sr Business Intake Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101288,
    "description":"Senior Conflicts Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101289,
    "description":"Risk Management Cmply Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101290,
    "description":"Human Resources Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101291,
    "description":"Assoc Dir FW Atty Prog Events",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101292,
    "description":"Atty Rec Data & Sys Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101294,
    "description":"Payroll Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101295,
    "description":"Guest Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101296,
    "description":"Assoc Dir of Finance, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101297,
    "description":"Executive Assistant - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101301,
    "description":"HR Operations Specialist, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101302,
    "description":"Practice Support Assistant I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101303,
    "description":"Practice Support Assistant II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101305,
    "description":"Foreign Legal Intern",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":101306,
    "description":"Assoc Dir Office of the CFO",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101308,
    "description":"Payroll and Account Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101309,
    "description":"Alumni Engagement Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101310,
    "description":"Cash Application Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101311,
    "description":"CareerLink Coach",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101312,
    "description":"Alumni Engagement Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101313,
    "description":"Project Management Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101314,
    "description":"Sr HRIS Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101315,
    "description":"Sr Info Governance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101316,
    "description":"Receptionist/Office Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101317,
    "description":"Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101318,
    "description":"Information Governance Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101319,
    "description":"Mailroom/Purchasing Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101320,
    "description":"Fac Asst/Purch Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101321,
    "description":"Landman",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101323,
    "description":"Assistant Treasurer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101324,
    "description":"Project Data Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101325,
    "description":"Director of Operations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101326,
    "description":"Senior Project Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101327,
    "description":"Senior Writer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101328,
    "description":"Facilities Svcs Project Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101329,
    "description":"Senior Facilities Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101330,
    "description":"Accounting Manager - Europe",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101331,
    "description":"Accounting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101332,
    "description":"Assoc Dir Accounting Svcs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101333,
    "description":"Assoc Dir Financial Analysis",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101334,
    "description":"Assoc Dir Invest Partnerships",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101335,
    "description":"Financial Info Sys Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101336,
    "description":"Asst Mgr Invest Partnerships",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101337,
    "description":"Senior Accountant",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101338,
    "description":"Sr Digital Svcs Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101340,
    "description":"Dir FW Atty Train Adm Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101341,
    "description":"Director FW Alumni Engagement",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101342,
    "description":"FW Dir of Diversity and Inclus",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101343,
    "description":"Counsel and Dir FW Pro Bo",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101344,
    "description":"MCLE Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101345,
    "description":"Sr FW Compliance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101346,
    "description":"Sr Atty Rec & Alum Engage Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101347,
    "description":"Sr Atty Recr & Dev Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101348,
    "description":"Weekend Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101350,
    "description":"Desktop Applications Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101351,
    "description":"Technology Support Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101352,
    "description":"Risk Mgmt Compliance Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101353,
    "description":"Senior Records Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101354,
    "description":"Administrative Services Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101356,
    "description":"Health & Safety Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101357,
    "description":"Internal Auditor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101358,
    "description":"Risk Management Compliance Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101359,
    "description":"IT Senior Product Manager I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101360,
    "description":"Alumni Engagement Info Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101361,
    "description":"Office Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101362,
    "description":"Assoc Dir Merg Acq Clearance",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101363,
    "description":"Investigator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101369,
    "description":"Alumni Engagement Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101370,
    "description":"Applications Development Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101371,
    "description":"Atty Recruiting Asst Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101372,
    "description":"Receptionist/Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101373,
    "description":"Sr Business Development Spec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101374,
    "description":"Contract Doc Rvw (PAR)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101375,
    "description":"Contract Worker (PAR)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101376,
    "description":"Expert Witness",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Contractor",
    "jobFunctionCode":108
  },
  {
    "jobCode":101377,
    "description":"Co-Counsel",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Contractor",
    "jobFunctionCode":108
  },
  {
    "jobCode":101378,
    "description":"Outside Counsel",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"Contractor",
    "jobFunctionCode":108
  },
  {
    "jobCode":101379,
    "description":"Executive Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101380,
    "description":"Sr Applications Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101381,
    "description":"Sr Applications Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101382,
    "description":"Sr Payroll Coordinator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101383,
    "description":"Tech Train & Sup Analyst III",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101384,
    "description":"FW Pro Bono Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101385,
    "description":"Risk Management Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101386,
    "description":"Technology Training Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101387,
    "description":"Distributed Computing Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101388,
    "description":"Real Estate Paralegal Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101389,
    "description":"Intellect Prop Paralegal Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101390,
    "description":"Litigation Paralegal Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101391,
    "description":"Practice Group Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101392,
    "description":"Assoc Dir Practice Support",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101393,
    "description":"Practice Support Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101394,
    "description":"Reg Human Resources Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101395,
    "description":"Accounting Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101396,
    "description":"Firm Administrator",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101397,
    "description":"FW Diversity & Inclusion Anlst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101398,
    "description":"Practice Support Admin Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101399,
    "description":"Sr Case Asst / Risk Mgmt Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Junior Paralegal",
    "jobFunctionCode":106
  },
  {
    "jobCode":101400,
    "description":"Director, Office of the CFO",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101401,
    "description":"Telecommunications Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101402,
    "description":"Data Center Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101403,
    "description":"Associate Director Procurement",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101404,
    "description":"Atty Rec, Trn & Dev Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101405,
    "description":"Dependent POI",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101406,
    "description":"HR Operations Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101407,
    "description":"Business Intelligence Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101408,
    "description":"Purchasing Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101409,
    "description":"Network Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101410,
    "description":"Finance Proj Manager, Intl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101411,
    "description":"HR Operations Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101412,
    "description":"System Admin Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101413,
    "description":"Atty Development Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101414,
    "description":"Library Services Specialist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101415,
    "description":"Info Gov/Rec Ops Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101416,
    "description":"Information Governance Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101418,
    "description":"Information Governance Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101419,
    "description":"Benefits Analyst II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101420,
    "description":"Cashier and Accounting Coord",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101421,
    "description":"Director HR & Payroll Apps",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101422,
    "description":"Director, Architecture",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101423,
    "description":"Director, Office of the CIO",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101424,
    "description":"Firmwide Security Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101425,
    "description":"FW Time & Absence Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101427,
    "description":"HR Operations Manager, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101428,
    "description":"Investment Partnership Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101429,
    "description":"Investment Partnership Spcl",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101430,
    "description":"Messaging Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101431,
    "description":"Remote Comp Engineer Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101432,
    "description":"Server Operations Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101433,
    "description":"Sr Atty Training & Dev Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101434,
    "description":"Sr Cashier and Accounting Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101435,
    "description":"Sr Empl Svcs & Benefits Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101436,
    "description":"Sr FW Staff Trn & Dvlp Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101437,
    "description":"Sr Benefits Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101438,
    "description":"Accounts Payable Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101439,
    "description":"Administrative Project Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101440,
    "description":"App Architect Principal",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101441,
    "description":"Senior Advisor Risk Management",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101442,
    "description":"Sr Human Resources Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101443,
    "description":"Sr Information Governance Sup",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101444,
    "description":"Chief of Staff Office of Chair",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101445,
    "description":"Client Service Center Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101446,
    "description":"HR Director - International",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101447,
    "description":"Senior Sourcing Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101448,
    "description":"Practice Support Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101449,
    "description":"Treasury Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101451,
    "description":"Senior Billing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101452,
    "description":"Cashiering/Expense Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101453,
    "description":"Sr Manager Financial Sys Impl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101454,
    "description":"Sr Financial Sys Bus Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101455,
    "description":"Security Policy Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101456,
    "description":"FW Dir Benfts & HR Operations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101457,
    "description":"FW Lateral Atty Rec Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101458,
    "description":"Guest Services Supervisor",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101460,
    "description":"FW Admin Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101461,
    "description":"Research Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101462,
    "description":"Network Operations Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101463,
    "description":"Dir Purch & Strategic Sourcing",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101464,
    "description":"Pro Bono Counsel",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101465,
    "description":"E-Billing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101466,
    "description":"Contract Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101467,
    "description":"Alumni Engage Mktg & Comm Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101468,
    "description":"Chief Security Officer",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101469,
    "description":"Desktop Operations Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101891,
    "description":"Desktop Operations Engr Sr I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101892,
    "description":"Assoc Director Lit Technology",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101893,
    "description":"Data Ctr Ops Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101894,
    "description":"Conference CtrTechnly Spcl I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101895,
    "description":"IT Senior Product Manager II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101896,
    "description":"Conflicts Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101897,
    "description":"Attorney Human Resources Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101898,
    "description":"Accounting Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101899,
    "description":"Info Governance Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101901,
    "description":"General Services Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101902,
    "description":"Staff Accountant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101903,
    "description":"Rec, Trn and Prof Dev Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101904,
    "description":"Knowledge Content Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101905,
    "description":"Advisor, Fiduciary",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101906,
    "description":"Advisor, Discovery",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101907,
    "description":"Advisor, Scientific",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101908,
    "description":"Practice Group Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101909,
    "description":"Assoc Dir, IT Service Delivery",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101910,
    "description":"Manager, Transition",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101911,
    "description":"Specialist, Transition",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101912,
    "description":"Advisor, Appellate",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":101913,
    "description":"Benefits & HR Operations Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101914,
    "description":"Sr HRIS Mgr, Systems Analysis",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101915,
    "description":"Accounting Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101916,
    "description":"Accounts Payable Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101917,
    "description":"Assoc Director Firmwide HR",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101918,
    "description":"Assoc Dir Billing Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101919,
    "description":"Assoc Dir Ntwrk & Security Op",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101920,
    "description":"Assoc Dir Secretarial Servcs",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101921,
    "description":"Assoc Dir Server & Storage Op",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101922,
    "description":"Attorney HR Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101923,
    "description":"Business Intake Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101924,
    "description":"Cash Application Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101925,
    "description":"Financial Rpt and Bdg Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101926,
    "description":"General Services Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101927,
    "description":"Guest Services Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101928,
    "description":"Research Services Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101929,
    "description":"Messaging Engineer Sr II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101930,
    "description":"Messaging Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101931,
    "description":"Operations Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101932,
    "description":"Partner Financial Servcs Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101933,
    "description":"Partner Payroll Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101934,
    "description":"Practice Group Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101935,
    "description":"Sr Accounts Payable Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101936,
    "description":"Sr Attorney Rec & Dev Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101937,
    "description":"Sr Attrny Rec & Dev Spec Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101938,
    "description":"Sr Business Development Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101939,
    "description":"Sr Cash Application Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101940,
    "description":"Senior Conflicts Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101941,
    "description":"Sr FW Admn Services Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101942,
    "description":"Sr Graduate Rec Spec, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101943,
    "description":"Senior HR Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101944,
    "description":"Senior PeopleSoft Developer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101945,
    "description":"Senior Practice Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101946,
    "description":"Sr Pract Asst/Risk Mgmt Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101947,
    "description":"Senior Treasury Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101948,
    "description":"Sr Training and Support Anlst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101949,
    "description":"Word Processing Evening MGR",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101950,
    "description":"Sr Manager, Human Resources",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101951,
    "description":"Graduate Recruitment Assist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101953,
    "description":"Knowledge Content Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101954,
    "description":"FW Director Knowledge Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101956,
    "description":"Senior Director of Admin, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101957,
    "description":"Packaged Solutions Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101958,
    "description":"Finance Project Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101959,
    "description":"Business Intelligence Spec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101960,
    "description":"FW Staff Talent Dev MGR",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101961,
    "description":"IT Product Mgmt Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101962,
    "description":"Sr Dir of FW Legal Rec & Dev",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101963,
    "description":"Assoc Director Internal Audit",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101964,
    "description":"Director, Information Security",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101965,
    "description":"Treasury Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101966,
    "description":"Revenue Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101967,
    "description":"Sourcing Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101968,
    "description":"Security Operations Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101969,
    "description":"Office Operations Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101970,
    "description":"Receptionist/Operations Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101971,
    "description":"HR Operations Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101972,
    "description":"Mrg/Acq Clearance Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101973,
    "description":"Strat&Client Rltns, Invst Fnds",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101974,
    "description":"Strategy & Client Relations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101975,
    "description":"Server & Storage Ops Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101976,
    "description":"Knowledge Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101977,
    "description":"Sr Billing Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101978,
    "description":"Att Rec and Dev Liaison",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101979,
    "description":"Treasury & Partner Acct Anlyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101980,
    "description":"Proofreader",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101981,
    "description":"Dir FW Legal Edu and Develop",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101982,
    "description":"Concierge Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101983,
    "description":"Contract Worker (SEC GOV)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101984,
    "description":"Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101985,
    "description":"IT Product Manager Eng 2",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101986,
    "description":"Procurement Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101987,
    "description":"Contract Worker (LR DEV)",
    "hierarchy":"Staff",
    "exempt":"No FLSA Required",
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101988,
    "description":"Guest Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101989,
    "description":"MCLE Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101990,
    "description":"Senior Advisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101991,
    "description":"Transactional Database Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101992,
    "description":"Invest Partnership Ops Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101993,
    "description":"HR Spcl - Reg & Ops, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101995,
    "description":"Administrative Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101996,
    "description":"Financial Systems Bus Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101997,
    "description":"HR & Payroll Apps Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101998,
    "description":"HR Operations Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":101999,
    "description":"Sr Research Services Coord",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102000,
    "description":"Health & Safety Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102001,
    "description":"Assoc Dir Records & Info Gov",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102002,
    "description":"Assoc Dir HR Information Sys",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102003,
    "description":"Sr Info Governance Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102004,
    "description":"Facilities & Guest Servs Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102005,
    "description":"Senior Payroll Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102006,
    "description":"Senior Facilities Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102007,
    "description":"Digital Services Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102009,
    "description":"Cashiering & Acct Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102010,
    "description":"Atty Recruiting & Dev Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102011,
    "description":"Assoc Dir Legal Rec & Dev",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102012,
    "description":"Legal Recruiting & Dev Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102013,
    "description":"Operations Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102014,
    "description":"Sr Investment Partnership Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102015,
    "description":"Sr Administrative Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102016,
    "description":"Benefits & HR Ops Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102017,
    "description":"Sr Manager HRIS, Info Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102018,
    "description":"Assoc Dir IT Product Mgmt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102019,
    "description":"Director IT Service Delivery",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102020,
    "description":"Sr Invst Partnership Ops Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102021,
    "description":"Reg Accounting & Billing Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102022,
    "description":"Info Governance Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102023,
    "description":"Accountant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102024,
    "description":"Sr Spcl, Office of the Chair",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102025,
    "description":"Sourcing Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102026,
    "description":"Contract Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102027,
    "description":"Cyber Security Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102028,
    "description":"Investigator II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102029,
    "description":"Security GRC Specialist III",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102030,
    "description":"Cyber Security Engineer II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102031,
    "description":"Electronic Resources Coord",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102032,
    "description":"Assoc Dir Real Estate Proj Mgt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102033,
    "description":"Incdnt, Rsps & Frnsc Anlst II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102034,
    "description":"Physical Security Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102035,
    "description":"Legal Recruiting & Dev Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102036,
    "description":"Legal Recruiting & Dev Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102037,
    "description":"Legal Recruiting & Dev Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102038,
    "description":"Director, Financial Analysis",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102039,
    "description":"Practice Services Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102040,
    "description":"Tech Trng and Supp Analyst II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102041,
    "description":"Assoc Dir Travel & Meeting/Evt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102042,
    "description":"Hospitality Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102043,
    "description":"Digital Services Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102044,
    "description":"Mail and Digital Services Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102045,
    "description":"Senior Finance Project Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102046,
    "description":"Operations Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102047,
    "description":"Legal Recruiting Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102048,
    "description":"Assoc Dir FW Lateral Legal Rec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102049,
    "description":"Sr Business Development Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102050,
    "description":"Legal Recruiting & Dev Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102051,
    "description":"Payroll Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102052,
    "description":"Lateral Hiring Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102053,
    "description":"POSSE Scholar Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102054,
    "description":"Legal Practice Integration Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102055,
    "description":"Learning Solution Lead",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102056,
    "description":"FW Legal Edu & Dev Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102057,
    "description":"Revenue Operations Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102058,
    "description":"Specialist, Ofc of the Chair",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102059,
    "description":"Data & Analytics Mgr, Lgl Rec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102060,
    "description":"Senior Financial Sys Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102061,
    "description":"Financial Analysis Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102062,
    "description":"Practice Support Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102063,
    "description":"Facilities & Guest Svcs Supv",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102064,
    "description":"Sr Legal Recruiting & Dev Spec",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102065,
    "description":"Travel & Meetings/Events Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102066,
    "description":"Practice Assistant Trainee",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102067,
    "description":"Senior Case Manager",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":102068,
    "description":"Cyber Security Architect II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102069,
    "description":"Tax Compliance Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102070,
    "description":"Travel, Meetings & Events Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102071,
    "description":"Alumni Engagement Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102072,
    "description":"Conflicts Analyst Supervisor E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102073,
    "description":"Procurement Counsel",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102074,
    "description":"Legal Training and Dev Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102075,
    "description":"Contract Administrator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102076,
    "description":"FW CLE Compliance Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102077,
    "description":"Managing Attorney",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102078,
    "description":"Conference Center Admin Assist",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102079,
    "description":"Document Services Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102080,
    "description":"Advisor Risk Management",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102081,
    "description":"FW Dir Trvl & Meetings/Events",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102082,
    "description":"Physical Security Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102083,
    "description":"Advisor, Intellectual Property",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":102084,
    "description":"Assoc Dir Financial Rpt & Bdgt",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102085,
    "description":"Assoc Dir FW HR Operations",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102086,
    "description":"Bus Intake Conflicts Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102087,
    "description":"Business Intake Conflicts Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102088,
    "description":"Calendar Court Svc Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102089,
    "description":"Client Relations Manager, Asia",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102090,
    "description":"Cyber Security Engineer I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102091,
    "description":"Database Administration Supv",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102092,
    "description":"Director Billing Services",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102093,
    "description":"Director Financial Systems",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102094,
    "description":"Financial Systems Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102095,
    "description":"HRIS and HR Operations Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102096,
    "description":"Business & Core Apps Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102097,
    "description":"Recruiting Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102098,
    "description":"Senior Benefits Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102099,
    "description":"Senior Cashiering/Expense Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102100,
    "description":"Senior E-Billing Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102101,
    "description":"Senior HR Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102102,
    "description":"Sr Legal Recruiting & Dev Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102103,
    "description":"Sr Treasury & Ptr Acct Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102104,
    "description":"Sr Practice Assistant Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102105,
    "description":"Sr Risk Mgmt Info Sys Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102106,
    "description":"Sr Secretarial Services Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102107,
    "description":"Sr Support Services Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102108,
    "description":"Senior Treasury Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102109,
    "description":"Server Operations Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102110,
    "description":"Research Services Coord - N",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102111,
    "description":"Dir Legal Recruiting & Dev",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102112,
    "description":"Security Policy Engineer III",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102113,
    "description":"Assoc Dir Meetings/Events",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102114,
    "description":"DB Arch & Bus Intel Eng Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102115,
    "description":"Finance Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102116,
    "description":"Director of Wellbeing",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102117,
    "description":"Legal Edu & Development Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102118,
    "description":"Legal Trn and Dev Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102119,
    "description":"FW Learning Design and Dev Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102120,
    "description":"Guest Servs Reservations Supv",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102121,
    "description":"HR and Sec Services Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102122,
    "description":"FW Dir Transactional Par Prgm",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102123,
    "description":"Financial Systems Project Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102124,
    "description":"Business Intel & Analytics Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102125,
    "description":"Risk Management Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102126,
    "description":"Staff Recruiting Supervisor",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102127,
    "description":"Tech Train & Sup Analyst I",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102128,
    "description":"Business Development Asst - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102129,
    "description":"Sr Legal Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102130,
    "description":"Guest Services Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102131,
    "description":"Tax Election Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":102132,
    "description":"CareerLink Assistant",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102133,
    "description":"CareerLink Coordinator",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102134,
    "description":"Sr Business Intelligence Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102135,
    "description":"FW Guest Services Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102136,
    "description":"Sr FW Presentation Designer",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102137,
    "description":"FW Presentation Design Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102138,
    "description":"Legal Recruiting Specialist",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102139,
    "description":"Meetings & Events Service Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102140,
    "description":"FW Legal Rec & Dev Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102141,
    "description":"FW Legal Recruiting & Dev Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102142,
    "description":"Knowledge Services Analyst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102143,
    "description":"Client Billing Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102144,
    "description":"Lgl Rec & Dev Admin Asst",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102145,
    "description":"Fac & Guest Svcs Assoc Dir",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102146,
    "description":"FW Proj Mgr Practice Asst Prgm",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102147,
    "description":"Lit & Practice Tech Director",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102148,
    "description":"Technology Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102149,
    "description":"FW Lit Training Portfolio Mgr",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102150,
    "description":"Sr Knowledge Services Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102151,
    "description":"Financial Analysis Coord",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102152,
    "description":"Tech Trng & Sup Analyst II - E",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102153,
    "description":"Assoc Dir Benefits & HR Ops",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102154,
    "description":"Audiovisual Architect I",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102157,
    "description":"Security GRC Specialist II",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102158,
    "description":"Sr Partner Accounting Analyst",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102159,
    "description":"Lit & Pract Tech Sr Proj Mgr",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102160,
    "description":"Lit & Pract Tech Assoc Dir",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102161,
    "description":"Lit & Pract Tech Manager",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102162,
    "description":"Lit & Pract Tech Analyst II",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102163,
    "description":"Electronic Resources Spcl",
    "hierarchy":"Staff",
    "exempt":true,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102164,
    "description":"Trvl & Meetings/Events Intern",
    "hierarchy":"Staff",
    "exempt":false,
    "supervisor":true,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102176,
    "description":"Sr FW Trial Tech Specialist",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102169,
    "description":"Lit & Prac Tech Sr Analyst",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102172,
    "description":"Dir FIN Process Transformation",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102166,
    "description":"Senior Legal Recruiting Coord",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102180,
    "description":"Business Development Coord - E",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102173,
    "description":"Risk Mgmt Systems Mgr",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102174,
    "description":"Sr Advsr, Office of the Chair",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102177,
    "description":"Travel, Mtgs & Events Manager",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102165,
    "description":"SEO Fellow",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"Law Clerk",
    "jobFunctionCode":103
  },
  {
    "jobCode":102175,
    "description":"Fac & Guest Svcs Admin Asst",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102167,
    "description":"Legal HR Applications Manager",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":100027,
    "description":"Payroll Assistant",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102178,
    "description":"Diversity & Incl Admin Asst",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102182,
    "description":"Revenue Operations Analyst",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102170,
    "description":"Sr Pro Bono Paralegal",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"Paralegal",
    "jobFunctionCode":102
  },
  {
    "jobCode":102181,
    "description":"Invest Transact & Rprtng Anlst",
    "hierarchy":"",
    "exempt":true,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102171,
    "description":"Pro Bono Coordinator",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102168,
    "description":"Lit & Prac Tech Proj Mgr",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  },
  {
    "jobCode":102179,
    "description":"After-Hours Legal Secr Coord",
    "hierarchy":"",
    "exempt":false,
    "supervisor":false,
    "jobFunction":"",
    "jobFunctionCode":0
  }
];
