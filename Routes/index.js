const router = require("express").Router();

const {
  postloginCheck,
  postUserCreation,
  getDepartment,
  postDepartment,
  putDepartment,
  getDesignation,
  postDesignation,
  putDesignation,
  getProject,
  postProject,
  putProject,
  getBranch,
  postBranch,
  putBranch,
  getEmployee,
  postEmployee,
  getEmployeeById,
  putEmployee,
  getUserCreation,
  getCompanyInfo,
  postCompanyInfo,
  putCompanyInfo,
  putCompanyInfowithoutFile,
  getDocumentType,
  postDocumentType,
  putDocumentType,
  postAddDocument,
  getAddDocument,
  putAddDocumentDetailsFile,
  putAddDocument,
  postAddDocumentOnlyFile,
  getModuleInfo,
  getSubModuleInfo,
  getProjectDoc,
  getBranchDoc,
  getDepartmentDoc,
  getUserDoc,
  postTotalViewDownloadCount,
  putlogoutSession,
  getDeshboardData,
  postRoleAccessCreate,
  getRoleAccess,
  getRoleAccessViewById,
  putChangePassword,
  putUserCreation,
  putChangePasswordByAdmin,
  postRoleAccessCreateByRoleId,
  getRoleAccessViewByRoleId,
  getDeshboardDataChart,
  getLBSettingCategory,
  postLBSettingCategory,
  putLBSettingCategory,
  getLBSettingPublisher,
  postLBSettingPublisher,
  putLBSettingPublisher,
  getLBSettingAuthor,
  postLBSettingAuthor,
  putLBSettingAuthor,
  getLBSettingLanguage,
  postLBSettingLanguage,
  putLBSettingLanguage,
  getLBSettingMembershipPlan,
  postLBSettingMembershipPlan,
  putLBSettingMembershipPlan,
  getLBSettingLimitSetting,
  postLBSettingLimitSetting,
  putLBSettingLimitSetting,
  getAddBookInfo,
  postAddBookInfo,
  getAddBookInfoById,
  putAddBookInfo,
} = require("../Controllers");

router.get("/usercreation", getUserCreation);
router.post("/usercreation", postUserCreation);
router.put("/usercreation", putUserCreation);
router.post("/loginCheck", postloginCheck);
router.put("/logoutSession", putlogoutSession);
router.put("/changePassword", putChangePassword);
router.put("/changePasswordByAdmin", putChangePasswordByAdmin);

// department
router.get("/setting/department", getDepartment);
router.post("/setting/department", postDepartment);
router.put("/setting/department", putDepartment);

// designation
router.get("/setting/designation", getDesignation);
router.post("/setting/designation", postDesignation);
router.put("/setting/designation", putDesignation);

// document type
router.get("/setting/documenttype", getDocumentType);
router.post("/setting/documenttype", postDocumentType);
router.put("/setting/documenttype", putDocumentType);

// project info
router.get("/setting/project", getProject);
router.post("/setting/project", postProject);
router.put("/setting/project", putProject);

// branch
router.get("/setting/branch", getBranch);
router.post("/setting/branch", postBranch);
router.put("/setting/branch", putBranch);

// employee
router.get("/setting/employee", getEmployee);
router.get("/setting/employee/byId/:id", getEmployeeById);
router.post("/setting/employee", postEmployee);
router.put("/setting/employee", putEmployee);

// Company Info
router.get("/admistration/companyinfo", getCompanyInfo);

router.post("/admistration/companyinfo", postCompanyInfo);
router.put("/admistration/companyinfo", putCompanyInfo);
router.put("/admistration/companyinfo/withoutfile", putCompanyInfowithoutFile);

// role access
router.get("/admistration/roleaccess", getRoleAccess);
router.get("/admistration/roleaccessview/:byId", getRoleAccessViewById);
router.get("/admistration/roleaccessbyroleid/:byId", getRoleAccessViewByRoleId);
router.post("/admistration/roleaccesscreate", postRoleAccessCreate);
router.post(
  "/admistration/roleaccesscreateByroleId",
  postRoleAccessCreateByRoleId
);

// module & submodule
router.get("/admistration/module", getModuleInfo);
router.get("/admistration/submodule/:id", getSubModuleInfo);

// Add Document
router.post("/adddocument", postAddDocument);
router.post("/adddocumentOnlyFile", postAddDocumentOnlyFile);
router.get("/adddocument", getAddDocument);
router.put("/adddocument", putAddDocument);
router.put("/putAddDocumentDetailsFile", putAddDocumentDetailsFile);

// MIS report
router.get("/mis/alldoc", getAddDocument);
router.get("/mis/projectdoc", getProjectDoc);
router.get("/mis/branchdoc", getBranchDoc);
router.get("/mis/departmentdoc", getDepartmentDoc);
router.get("/mis/userdoc", getUserDoc);

// deshboard
router.post("/deshboard/totalViewDownloadCount", postTotalViewDownloadCount);
router.get("/deshboard", getDeshboardData);
router.get("/deshboardChart", getDeshboardDataChart);

// category
router.get("/librarysetting/category", getLBSettingCategory);
router.post("/librarysetting/category", postLBSettingCategory);
router.put("/librarysetting/category", putLBSettingCategory);

// publisher
router.get("/librarysetting/publisher", getLBSettingPublisher);
router.post("/librarysetting/publisher", postLBSettingPublisher);
router.put("/librarysetting/publisher", putLBSettingPublisher);
// author
router.get("/librarysetting/author", getLBSettingAuthor);
router.post("/librarysetting/author", postLBSettingAuthor);
router.put("/librarysetting/author", putLBSettingAuthor);

// language
router.get("/librarysetting/language", getLBSettingLanguage);
router.post("/librarysetting/language", postLBSettingLanguage);
router.put("/librarysetting/language", putLBSettingLanguage);

// membership Plan
router.get("/librarysetting/membershipplan", getLBSettingMembershipPlan);
router.post("/librarysetting/membershipplan", postLBSettingMembershipPlan);
router.put("/librarysetting/membershipplan", putLBSettingMembershipPlan);

// limit setting 
router.get("/librarysetting/limitsetting", getLBSettingLimitSetting);
router.post("/librarysetting/limitsetting", postLBSettingLimitSetting);
router.put("/librarysetting/limitsetting", putLBSettingLimitSetting);

// Book Info 
router.get("/addbookinfo", getAddBookInfo);
router.post("/addbookinfo", postAddBookInfo);
router.get("/addbookinfo/byId/:id", getAddBookInfoById);
router.put("/addbookinfo", putAddBookInfo);

module.exports = router;
