const {
  postloginCheckdata,
  postUserCreationdata,
  getDepartmentData,
  postDepartmentData,
  putDepartmentData,
  getDesignationData,
  postDesignationData,
  putDesignationData,
  getProjectData,
  postProjectData,
  putProjectData,
  getBranchData,
  postBranchData,
  putBranchData,
  getEmployeeData,
  postEmployeeData,
  getEmployeeByIdData,
  putEmployeeData,
  getUserCreationData,
  getCompanyInfoData,
  postCompanyInfoData,
  putCompanyInfoData,
  putCompanyInfowithoutFileData,
  getDocumentTypeData,
  postDocumentTypeData,
  putDocumentTypeData,
  postAddDocumentData,
  postAddDocumentDataDetails,
  getAddDocumentData,
  putAddDocumentDetailsFileData,
  putAddDocumentData,
  getModuleInfoData,
  getSubModuleInfoData,
  getAllDocData,
  getProjectDocData,
  getBranchDocData,
  getDepartmentDocData,
  getUserDocData,
  postTotalViewDownloadCountData,
  postlogAudit,
  putlogoutSessionData,
  getDeshboardDataData,
  getDeshboardRecentData,
  getDeshboardMostViewData,
  getDeshboardDownloadData,
  getRoleAccessData,
  postRoleAccessCreateData,
  postRoleAccessCreateDataDetails,
  getRoleAccessViewByIdData,
  getRoleAccessViewByIdDetails,
  getUserDatabyId,
  putChangePasswordData,
  putUserCreationData,
  postChangePasswordTable,
  putRoleAccessUpdateData,
  postRoleAccessUpdateDataDetails,
  deleteRoleAccessUpdateData,
  getDeshboardDepPie,
  getDeshboardCatGraph,
  getLBSettingCategoryData,
  postLBSettingCategoryData,
  putLBSettingCategoryData,
  getLBSettingPublisherData,
  postLBSettingPublisherData,
  putLBSettingPublisherData,
  getLBSettingAuthorData,
  postLBSettingAuthorData,
  getAuthorByIdData,
  puttLBSettingAuthorData,
  getLBSettingLanguageData,
  postLBSettingLanguageData,
  putLBSettingLanguageData,
  getLBSettingMembershipPlanData,
  postLBSettingMembershipPlanData,
  putLBSettingMembershipPlanData,
  getLBSettingLimitSettingData,
  postLBSettingLimitSettingData,
  putLBSettingLimitSettingData,
  getAddBookInfoData,
  postAddBookInfoData,
  getAddBookInfoByIdData,
  putAddBookInfoData,
} = require("../Services");
const { createResponse } = require("../Utils/responseGenerate");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcryptjs");
const {} = require("jsonwebtoken");
const moment = require("moment");
const fs = require("fs");
const { createTokens } = require("../middlewares/JWT");
const { LogInfo } = require("../Utils/logInfo");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image/");
  },

  filename: (req, file, cb) => {
    const fileext = path.extname(file.originalname);
    const filename =
      file.originalname.replace(fileext, "_").toLowerCase() +
      new Date().getTime();
    cb(null, filename + fileext);
  },
});

var upload = multer({ storage: storage });

const uploadFile_books = upload.single("image");

// get method
module.exports.getDepartment = async (req, res, next) => {
  try {
    const result = await getDepartmentData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getDesignation = async (req, res, next) => {
  try {
    const result = await getDesignationData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getDocumentType = async (req, res, next) => {
  try {
    const result = await getDocumentTypeData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingCategory = async (req, res, next) => {
  try {
    const result = await getLBSettingCategoryData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingLanguage = async (req, res, next) => {
  try {
    const result = await getLBSettingLanguageData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingMembershipPlan = async (req, res, next) => {
  try {
    const result = await getLBSettingMembershipPlanData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingLimitSetting = async (req, res, next) => {
  try {
    const result = await getLBSettingLimitSettingData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingPublisher = async (req, res, next) => {
  try {
    const result = await getLBSettingPublisherData();
    console.log(result);
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getLBSettingAuthor = async (req, res, next) => {
  try {
    const result = await getLBSettingAuthorData();

    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getAddBookInfo = async (req, res, next) => {
  try {
    const result = await getAddBookInfoData();

    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getDeshboardData = async (req, res, next) => {
  try {
    const result = await getDeshboardDataData();
    const result1 = await getDeshboardRecentData();
    const result2 = await getDeshboardMostViewData();
    const result3 = await getDeshboardDownloadData();
    const result4 = await getDeshboardDepPie();
    const result5 = await getDeshboardCatGraph();
    const data = {
      totalCount: result[0],
      recentData: result1,
      mostViewData: result2,
      downloadData: result3,
      departmentPie: result4,
      CategoryGraph: result5,
    };

    res.json(createResponse(data, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getDeshboardDataChart = async (req, res, next) => {
  try {
    const result4 = await getDeshboardDepPie();
    const result5 = await getDeshboardCatGraph();
    const data = {
      departmentPie: result4,
      CategoryGraph: result5,
    };

    res.json(createResponse(data, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getModuleInfo = async (req, res, next) => {
  try {
    const result = await getModuleInfoData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getAllDoc = async (req, res, next) => {
  try {
    const result = await getAllDocData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};

module.exports.getSubModuleInfo = async (req, res, next) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const result = await getSubModuleInfoData(id);
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getAddDocument = async (req, res, next) => {
  try {
    const result = await getAddDocumentData();
    const transformedResult = [];

    result.forEach((item) => {
      let existingEntry = transformedResult.find(
        (entry) => entry.TRAN_MST_ID === item.TRAN_MST_ID
      );

      if (existingEntry) {
        existingEntry.details.push({
          TRAN_DTL_ID: item.TRAN_DTL_ID,
          FILE_PATH: item.FILE_PATH,
          ACCESSIBILITY: item.ACCESSIBILITY,
          DTLS_FILE_NAME: item.DTLS_FILE_NAME,
        });
      } else {
        transformedResult.push({
          TRAN_MST_ID: item.TRAN_MST_ID,
          PROJECT_CODE: item.PROJECT_CODE,
          PROJECT_NAME: item.PROJECT_NAME,
          BRANCH_ID: item.BRANCH_ID,
          BRANCH_NAME: item.BRANCH_NAME,
          DEPT_ID: item.DEPT_ID,
          DEPT_NAME: item.DEPT_NAME,
          DOC_TYPE: item.DOC_TYPE,
          DOC_CAT: item.DOC_CAT,
          POLICY_NO: item.POLICY_NO,
          FILE_NAME: item.FILE_NAME,
          details: [
            {
              TRAN_DTL_ID: item.TRAN_DTL_ID,
              FILE_PATH: item.FILE_PATH,
              ACCESSIBILITY: item.ACCESSIBILITY,
              DTLS_FILE_NAME: item.DTLS_FILE_NAME,
            },
          ],
        });
      }
    });
    res.json(
      createResponse(transformedResult, "Data successfully retrieved", false)
    );
  } catch (err) {
    next(err);
  }
};

module.exports.getProjectDoc = async (req, res, next) => {
  try {
    const { projectid } = req.headers;

    const result = await getProjectDocData(projectid);
    const transformedResult = [];

    result.forEach((item) => {
      let existingEntry = transformedResult.find(
        (entry) => entry.TRAN_MST_ID === item.TRAN_MST_ID
      );

      if (existingEntry) {
        existingEntry.details.push({
          TRAN_DTL_ID: item.TRAN_DTL_ID,
          FILE_PATH: item.FILE_PATH,
          ACCESSIBILITY: item.ACCESSIBILITY,
          DTLS_FILE_NAME: item.DTLS_FILE_NAME,
        });
      } else {
        transformedResult.push({
          TRAN_MST_ID: item.TRAN_MST_ID,
          PROJECT_CODE: item.PROJECT_CODE,
          PROJECT_NAME: item.PROJECT_NAME,
          BRANCH_ID: item.BRANCH_ID,
          BRANCH_NAME: item.BRANCH_NAME,
          DEPT_ID: item.DEPT_ID,
          DEPT_NAME: item.DEPT_NAME,
          DOC_TYPE: item.DOC_TYPE,
          DOC_CAT: item.DOC_CAT,
          POLICY_NO: item.POLICY_NO,
          FILE_NAME: item.FILE_NAME,
          details: [
            {
              TRAN_DTL_ID: item.TRAN_DTL_ID,
              FILE_PATH: item.FILE_PATH,
              ACCESSIBILITY: item.ACCESSIBILITY,
              DTLS_FILE_NAME: item.DTLS_FILE_NAME,
            },
          ],
        });
      }
    });
    res.json(
      createResponse(transformedResult, "Data successfully retrieved", false)
    );
  } catch (err) {
    next(err);
  }
};
module.exports.getBranchDoc = async (req, res, next) => {
  try {
    const { branchid } = req.headers;

    const result = await getBranchDocData(branchid);
    const transformedResult = [];

    result.forEach((item) => {
      let existingEntry = transformedResult.find(
        (entry) => entry.TRAN_MST_ID === item.TRAN_MST_ID
      );

      if (existingEntry) {
        existingEntry.details.push({
          TRAN_DTL_ID: item.TRAN_DTL_ID,
          FILE_PATH: item.FILE_PATH,
          ACCESSIBILITY: item.ACCESSIBILITY,
          DTLS_FILE_NAME: item.DTLS_FILE_NAME,
        });
      } else {
        transformedResult.push({
          TRAN_MST_ID: item.TRAN_MST_ID,
          PROJECT_CODE: item.PROJECT_CODE,
          PROJECT_NAME: item.PROJECT_NAME,
          BRANCH_ID: item.BRANCH_ID,
          BRANCH_NAME: item.BRANCH_NAME,
          DEPT_ID: item.DEPT_ID,
          DEPT_NAME: item.DEPT_NAME,
          DOC_TYPE: item.DOC_TYPE,
          DOC_CAT: item.DOC_CAT,
          POLICY_NO: item.POLICY_NO,
          FILE_NAME: item.FILE_NAME,
          details: [
            {
              TRAN_DTL_ID: item.TRAN_DTL_ID,
              FILE_PATH: item.FILE_PATH,
              ACCESSIBILITY: item.ACCESSIBILITY,
              DTLS_FILE_NAME: item.DTLS_FILE_NAME,
            },
          ],
        });
      }
    });
    res.json(
      createResponse(transformedResult, "Data successfully retrieved", false)
    );
  } catch (err) {
    next(err);
  }
};
module.exports.getDepartmentDoc = async (req, res, next) => {
  try {
    const { departmentid } = req.headers;

    const result = await getDepartmentDocData(departmentid);
    const transformedResult = [];

    result.forEach((item) => {
      let existingEntry = transformedResult.find(
        (entry) => entry.TRAN_MST_ID === item.TRAN_MST_ID
      );

      if (existingEntry) {
        existingEntry.details.push({
          TRAN_DTL_ID: item.TRAN_DTL_ID,
          FILE_PATH: item.FILE_PATH,
          ACCESSIBILITY: item.ACCESSIBILITY,
          DTLS_FILE_NAME: item.DTLS_FILE_NAME,
        });
      } else {
        transformedResult.push({
          TRAN_MST_ID: item.TRAN_MST_ID,
          PROJECT_CODE: item.PROJECT_CODE,
          PROJECT_NAME: item.PROJECT_NAME,
          BRANCH_ID: item.BRANCH_ID,
          BRANCH_NAME: item.BRANCH_NAME,
          DEPT_ID: item.DEPT_ID,
          DEPT_NAME: item.DEPT_NAME,
          DOC_TYPE: item.DOC_TYPE,
          DOC_CAT: item.DOC_CAT,
          POLICY_NO: item.POLICY_NO,
          FILE_NAME: item.FILE_NAME,
          details: [
            {
              TRAN_DTL_ID: item.TRAN_DTL_ID,
              FILE_PATH: item.FILE_PATH,
              ACCESSIBILITY: item.ACCESSIBILITY,
              DTLS_FILE_NAME: item.DTLS_FILE_NAME,
            },
          ],
        });
      }
    });
    res.json(
      createResponse(transformedResult, "Data successfully retrieved", false)
    );
  } catch (err) {
    next(err);
  }
};
module.exports.getUserDoc = async (req, res, next) => {
  try {
    const { userid } = req.headers;

    const result = await getUserDocData(userid);
    const transformedResult = [];

    result.forEach((item) => {
      let existingEntry = transformedResult.find(
        (entry) => entry.TRAN_MST_ID === item.TRAN_MST_ID
      );

      if (existingEntry) {
        existingEntry.details.push({
          TRAN_DTL_ID: item.TRAN_DTL_ID,
          FILE_PATH: item.FILE_PATH,
          ACCESSIBILITY: item.ACCESSIBILITY,
          DTLS_FILE_NAME: item.DTLS_FILE_NAME,
        });
      } else {
        transformedResult.push({
          TRAN_MST_ID: item.TRAN_MST_ID,
          PROJECT_CODE: item.PROJECT_CODE,
          PROJECT_NAME: item.PROJECT_NAME,
          BRANCH_ID: item.BRANCH_ID,
          BRANCH_NAME: item.BRANCH_NAME,
          DEPT_ID: item.DEPT_ID,
          DEPT_NAME: item.DEPT_NAME,
          DOC_TYPE: item.DOC_TYPE,
          DOC_CAT: item.DOC_CAT,
          POLICY_NO: item.POLICY_NO,
          FILE_NAME: item.FILE_NAME,
          details: [
            {
              TRAN_DTL_ID: item.TRAN_DTL_ID,
              FILE_PATH: item.FILE_PATH,
              ACCESSIBILITY: item.ACCESSIBILITY,
              DTLS_FILE_NAME: item.DTLS_FILE_NAME,
            },
          ],
        });
      }
    });
    res.json(
      createResponse(transformedResult, "Data successfully retrieved", false)
    );
  } catch (err) {
    next(err);
  }
};
module.exports.getProject = async (req, res, next) => {
  try {
    const result = await getProjectData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getBranch = async (req, res, next) => {
  try {
    const result = await getBranchData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getEmployee = async (req, res, next) => {
  try {
    const result = await getEmployeeData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getCompanyInfo = async (req, res, next) => {
  try {
    const result = await getCompanyInfoData();

    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};

module.exports.getRoleAccess = async (req, res, next) => {
  try {
    const result = await getRoleAccessData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getRoleAccessViewById = async (req, res, next) => {
  try {
    const { byId } = req.params;
    // console.log(byId);
    const result = await getRoleAccessViewByIdData(byId);
    // console.log(result[0]);
    const result1 = await getRoleAccessViewByIdDetails(result[0].ROLE_ID);
    const data = {
      master: result[0],
      Details: result1,
    };
    res.json(createResponse(data, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getRoleAccessViewByRoleId = async (req, res, next) => {
  try {
    const { byId } = req.params;
    const result = await getRoleAccessViewByIdDetails(byId);

    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getUserCreation = async (req, res, next) => {
  try {
    const result = await getUserCreationData();
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};

module.exports.getEmployeeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getEmployeeByIdData(id);
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};
module.exports.getAddBookInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getAddBookInfoByIdData(id);
    res.json(createResponse(result, "Data Successfully get", false));
  } catch (err) {
    next(err);
  }
};

/*------------- All Post Routes ---------------*/

module.exports.postUserCreation = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const result = await postUserCreationdata(data);
    res.json(createResponse("User Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putDepartment = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putDepartmentData(data);
    res.json(createResponse("Department Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putUserCreation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putUserCreationData(data);
    res.json(createResponse("user data Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putDesignation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putDesignationData(data);
    res.json(createResponse("Designation Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putLBSettingCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putLBSettingCategoryData(data);
    res.json(createResponse("Category Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putLBSettingLanguage = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putLBSettingLanguageData(data);
    res.json(createResponse("Language Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putLBSettingMembershipPlan = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putLBSettingMembershipPlanData(data);
    res.json(createResponse("Member ship Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putLBSettingLimitSetting = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putLBSettingLimitSettingData(data);
    res.json(createResponse("Limit Setting Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putLBSettingPublisher = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putLBSettingPublisherData(data);
    res.json(createResponse("Publisher Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putDocumentType = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const result = await putDocumentTypeData(data);
    res.json(createResponse("Document Type Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putAddDocument = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const result = await putAddDocumentData(data);
    res.json(createResponse("Document data Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putProject = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putProjectData(data);
    res.json(createResponse("Project Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putBranch = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putBranchData(data);
    res.json(createResponse("Branch Update Successfully", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putCompanyInfo = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      const result = await putCompanyInfoData(req.body, req.file.filename);
      res.json(createResponse("Company Info update Successful", false));
    });
  } catch (err) {
    next(err);
  }

  // try {
  //   const data = req.body;
  //   const result = await putCompanyInfoData(data);
  //   res.json(createResponse("Company Info Update Successfully", false));
  // } catch (err) {
  //   next(err);
  // }
};
module.exports.putCompanyInfowithoutFile = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putCompanyInfowithoutFileData(data);
    res.json(createResponse("Company Info Update Successfully", false));
  } catch (err) {
    next(err);
  }
};

module.exports.postDepartment = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postDepartmentData(data);
    res.json(createResponse("Department Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postDesignation = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postDesignationData(data);
    res.json(createResponse("Designation Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postLBSettingCategory = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postLBSettingCategoryData(data);
    res.json(createResponse("Category Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postLBSettingLanguage = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postLBSettingLanguageData(data);
    res.json(createResponse("Language Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postLBSettingMembershipPlan = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postLBSettingMembershipPlanData(data);
    res.json(createResponse("Membership plan Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postLBSettingLimitSetting = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postLBSettingLimitSettingData(data);
    res.json(createResponse("Limit Setting Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postLBSettingPublisher = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postLBSettingPublisherData(data);
    res.json(createResponse("Category Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postDocumentType = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postDocumentTypeData(data);
    res.json(createResponse("Designation Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postProject = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postProjectData(data);
    res.json(createResponse("Project Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postBranch = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postBranchData(data);
    res.json(createResponse("Branch Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postTotalViewDownloadCount = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postTotalViewDownloadCountData(data);
    res.json(createResponse("data Create Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putlogoutSession = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await putlogoutSessionData(data);
    res.json(createResponse("logout  Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.putChangePassword = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const result = await getUserDatabyId(data.EMAIL);

    // console.log(result);
    const isMatchedPass = await bcrypt.compare(
      data?.oldpassword,
      result[0]?.PASSWORD
    );
    if (isMatchedPass) {
      const hashedPassword = await bcrypt.hash(data.newpassword, 10);
      const result1 = await putChangePasswordData(data.EMAIL, hashedPassword);
      const result2 = await postChangePasswordTable(
        data.EMAIL,
        hashedPassword,
        data.EMPLOYEE_ID,
        result[0]?.PASSWORD
      );

      res.json(createResponse("Successfully Update Password", false));
    } else {
      res.json(createResponse(result[0].NAME, "old password not match", true));
    }
  } catch (err) {
    next(err);
  }
};
module.exports.putChangePasswordByAdmin = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    const result = await getUserDatabyId(data.EMAIL);

    const hashedPassword = await bcrypt.hash(data.newpassword, 10);
    const result1 = await putChangePasswordData(data.EMAIL, hashedPassword);
    const result2 = await postChangePasswordTable(
      data.EMAIL,
      hashedPassword,
      data.EMPLOYEE_ID,
      result[0]?.PASSWORD
    );

    res.json(createResponse("Successfully Update Password", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postCompanyInfo = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      // console.log(req);
      const result = await postCompanyInfoData(req.body, req.file.filename);
      res.json(createResponse("Company Create Successful", false));
    });
  } catch (err) {
    next(err);
  }

  // try {
  //   const data = req.body;
  //   const result = await postCompanyInfoData(data);
  //   res.json(createResponse("Branch Create Successful", false));
  // } catch (err) {
  //   next(err);
  // }
};
module.exports.postAddDocument = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      const loginfo = {};
      const device = req.device?.type || "unknown";
      loginfo.ip = req.ip;
      loginfo.device = device;

      const result = await postAddDocumentData(req.body, loginfo);
      // console.log(result); // Check the full structure of `result`
      // console.log("Full Result:", result);

      if (result && result.outBinds && result.outBinds.id) {
        const tranMstId = result.outBinds.id[0]; // Get the TRAN_MST_ID
        // console.log("Returned TRAN_MST_ID:", tranMstId);
        if (tranMstId) {
          console.log(req.file);
          const data = req.file.originalname.split(".");
          const result1 = await postAddDocumentDataDetails(
            req.body.ACCESSIBILITY,
            parseInt(tranMstId),
            req.file.filename,
            req.file.mimetype,
            data[0]
          );
        }
      } else {
        console.log("No outBinds or TRAN_MST_ID returned.");
      }

      res.json(createResponse("Add Document Successful", false));
    });
  } catch (err) {
    next(err);
  }
};
module.exports.postRoleAccessCreate = async (req, res, next) => {
  try {
    const result = await postRoleAccessCreateData(req.body);
    // console.log(result); // Check the full structure of `result`

    if (result && result.outBinds && result.outBinds.id) {
      const ROLEID = result.outBinds.id[0]; // Get the TRAN_MST_ID

      if (ROLEID) {
        const data = req?.body?.array;
        postRoleAccessCreateDataDetails(data, ROLEID);
      }
    } else {
      console.log("No outBinds or ROLE_ID returned.");
    }

    res.json(createResponse("Add Role Access Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postRoleAccessCreateByRoleId = async (req, res, next) => {
  try {
    const result = await putRoleAccessUpdateData(req.body);
    const data = req?.body?.array;
    const result1 = await deleteRoleAccessUpdateData(req.body.ROLE_ID);
    const result2 = await postRoleAccessUpdateDataDetails(
      data,
      req.body.ROLE_ID
    );

    res.json(createResponse("Add Role Access Successful", false));
  } catch (err) {
    next(err);
  }
};
module.exports.postAddDocumentOnlyFile = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      // console.log(req.body.ACCESSIBILITY, req.body.TRAN_MST_ID);
      // console.log(req.file);
      const data = req?.file?.originalname.split(".");
      const result = await postAddDocumentDataDetails(
        req.body.ACCESSIBILITY,
        req.body.TRAN_MST_ID,
        req.file.filename,
        req.file.mimetype,
        data[0]
      );

      res.json(createResponse("Add Document file Successful", false));
    });
  } catch (err) {
    next(err);
  }
};
module.exports.putAddDocumentDetailsFile = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      // console.log("hhh", req.file);
      // console.log("hhhhjhj", req.body.TRAN_DTL_ID);
      const data = req.file.originalname.split(".");
      const result = await putAddDocumentDetailsFileData(
        req.body.TRAN_DTL_ID,
        req.file.filename,
        req.file.mimetype,
        data[0]
      );
      res.json(
        createResponse("Document Details File update Successful", false)
      );
    });
  } catch (err) {
    next(err);
  }

  // try {
  //   const data = req.body;
  //   const result = await postCompanyInfoData(data);
  //   res.json(createResponse("Branch Create Successful", false));
  // } catch (err) {
  //   next(err);
  // }
};

module.exports.postEmployee = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      // console.log(req.body, req.file);
      const result = await postEmployeeData(req.body, req.file.filename);
      res.json(createResponse("employee Create Successful", false));
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports.postLBSettingAuthor = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      if (err) {
        console.error("File upload error:", err);
        return res.status(400).json({ error: "File upload failed" });
      }

      console.log("Request Body:", req.body); // Log the body to debug
      console.log("Uploaded File:", req.file); // Log the file to debug

      const result = await postLBSettingAuthorData(
        req.body,
        req.file?.filename || null // Handle cases where file is optional
      );

      res.json(createResponse("Author Create Successful", false));
    });
  } catch (err) {
    console.error("Error:", err);
    next(err);
  }
};
module.exports.postAddBookInfo = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      if (err) {
        console.error("File upload error:", err);
        return res.status(400).json({ error: "File upload failed" });
      }

      console.log("Request Body:", req.body); // Log the body to debug
      console.log("Uploaded File:", req.file); // Log the file to debug

      const result = await postAddBookInfoData(
        req.body,
        req.file?.filename || null // Handle cases where file is optional
      );

      res.json(createResponse("Add Book Create Successful", false));
    });
  } catch (err) {
    console.error("Error:", err);
    next(err);
  }
};

module.exports.putEmployee = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      const data = req.body;
      const result1 = await getEmployeeByIdData(data.EMPLOYEE_ID);
      // console.log(result1);
      const data1 = {
        EMPLOYEE_ID: data.EMPLOYEE_ID,
        CARD_NO: data.CARD_NO ? data.CARD_NO : result1[0].CARD_NO,
        EMP_STATUS: data.EMP_STATUS ? data.EMP_STATUS : result1[0].EMP_STATUS,
        EMP_NAME: data.EMP_NAME ? data.EMP_NAME : result1[0].EMP_NAME,
        FATHER_NAME: data.FATHER_NAME
          ? data.FATHER_NAME
          : result1[0].FATHER_NAME,
        MOTHER_NAME: data.MOTHER_NAME
          ? data.MOTHER_NAME
          : result1[0].MOTHER_NAME,
        PERMANENT_ADDRESS: data.PERMANENT_ADDRESS
          ? data.PERMANENT_ADDRESS
          : result1[0].PERMANENT_ADDRESS,
        SEX: data.SEX ? data.SEX : result1[0].SEX,
        JOINING_DATE: data.JOINING_DATE
          ? `${data.JOINING_DATE}`
          : moment(result1[0].JOINING_DATE).format("YYYY-MM-DD"),
        MOBILE: data.MOBILE ? data.MOBILE : result1[0].MOBILE,
        EMAIL: data.EMAIL ? data.EMAIL : result1[0].EMAIL,
        BLOOD_GROUP: data.BLOOD_GROUP
          ? data.BLOOD_GROUP
          : result1[0].BLOOD_GROUP,
        PASSPORT_NO: data.PASSPORT_NO
          ? data.PASSPORT_NO
          : result1[0].PASSPORT_NO,
        PRESENT_ADDRESS: data.PRESENT_ADDRESS
          ? data.PRESENT_ADDRESS
          : result1[0].PRESENT_ADDRESS,
        RELIGION: data.RELIGION ? data.RELIGION : result1[0].RELIGION,
        DATE_OF_BIRTH: data.DATE_OF_BIRTH
          ? `${data.DATE_OF_BIRTH}`
          : moment(result1[0].DATE_OF_BIRTH).format("YYYY-MM-DD"),
        CONFIRMATION_DATE: data.CONFIRMATION_DATE
          ? `${data.CONFIRMATION_DATE}`
          : moment(result1[0].CONFIRMATION_DATE).format("YYYY-MM-DD"),
        DESIG_ID: data.DESIG_ID ? data.DESIG_ID : result1[0].DESIG_ID,
        DEPT_ID: data.DEPT_ID ? data.DEPT_ID : result1[0].DEPT_ID,
        PHOTO: req?.file?.filename ? req?.file?.filename : result1[0].PHOTO,
      };
      // console.log(data1);
      const result = await putEmployeeData(data1);
      res.json(createResponse("employee update Successful", false));
    });
  } catch (err) {
    next(err);
  }
};
module.exports.putAddBookInfo = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      const data = req.body;
      const result1 = await getAddBookInfoByIdData(data.BOOK_ID);

      const data1 = {
        BOOK_ID: data.BOOK_ID,
        TITLE: data.TITLE ? data.TITLE : result1[0].TITLE,
        CATEGORY_ID: data.CATEGORY_ID
          ? parseInt(data.CATEGORY_ID)
          : result1[0].CATEGORY_ID,
        AUTHOR_ID: data.AUTHOR_ID
          ? parseInt(data.AUTHOR_ID)
          : result1[0].AUTHOR_ID,
        PUBLISHER_ID: data.PUBLISHER_ID
          ? parseInt(data.PUBLISHER_ID)
          : result1[0].PUBLISHER_ID,
        PUBLISHED_YEAR: data.PUBLISHED_YEAR
          ? data.PUBLISHED_YEAR
          : result1[0].PUBLISHED_YEAR,
        COPIES: data.COPIES ? data.COPIES : result1[0].NO_OF_COPIES,
        ISBN: data.ISBN ? data.ISBN : result1[0].ISBN,
        EDITION: data.EDITION ? data.EDITION : result1[0].EDITION,
        LANGUAGE: data.LANGUAGE ? data.LANGUAGE : result1[0].LANGUAGE,
        FILE_PATH: req?.file?.filename ? req?.file?.filename : result1[0].IMAGE,
        PRICE: data.PRICE ? parseInt(data.PRICE) : result1[0].PRICE,
        PAGES: data.PAGES ? parseInt(data.PAGES) : result1[0].PAGES,
        LOCATION: data.LOCATION ? data.LOCATION : result1[0].LOCATION,
        FORMAT: data.FORMAT ? data.FORMAT : result1[0].FORMAT,
        DESCRIPTION: data.DESCRIPTION
          ? data.DESCRIPTION
          : result1[0].DESCRIPTION,
      };
      
      console.log(data1);
      const result = await putAddBookInfoData(data1);
      res.json(createResponse("book update Successful", false));
    });
  } catch (err) {
    next(err);
  }
};

module.exports.putLBSettingAuthor = async (req, res, next) => {
  try {
    uploadFile_books(req, res, async function (err) {
      const data = req.body;
      const result1 = await getAuthorByIdData(data.AUTHOR_ID);
      console.log(result1);
      const data1 = {
        AUTHOR_ID: data.AUTHOR_ID,
        AUTHOR_NAME: data.AUTHOR_NAME
          ? data.AUTHOR_NAME
          : result1[0].AUTHOR_NAME,
        EMAIL: data.EMAIL ? data.EMAIL : result1[0].EMAIL,
        COUNTRY: data.COUNTRY ? data.COUNTRY : result1[0].COUNTRY,
        AWARDS: data.AWARDS ? data.AWARDS : result1[0].AWARDS,
        BIOGRAPHY: data.BIOGRAPHY ? data.BIOGRAPHY : result1[0].BIOGRAPHY,
        PHONE_NUMBER: data.PHONE_NUMBER
          ? data.PHONE_NUMBER
          : result1[0].PHONE_NUMBER,
        DATE_OF_BIRTH: data.DATE_OF_BIRTH
          ? `${data.DATE_OF_BIRTH}`
          : moment(result1[0].DATE_OF_BIRTH).format("YYYY-MM-DD"),

        WEBSITE: data.WEBSITE ? data.WEBSITE : result1[0].WEBSITE,
        PROFILE_PICTURE: req?.file?.filename
          ? req?.file?.filename
          : result1[0].PROFILE_PICTURE,
      };
      // console.log(data1);
      const result = await puttLBSettingAuthorData(data1);
      res.json(createResponse("Author Data update Successful", false));
    });
  } catch (err) {
    next(err);
  }
};

module.exports.postloginCheck = async (req, res, next) => {
  try {
    const data = req.body;
    const device = req.device?.type || "unknown";
    // console.log(data);
    if (!data.username && !data.password) {
      res.json(createResponse(null, "email and password is required", true));
    } else {
      const result = await postloginCheckdata(data.username);
      // console.log(result.length);
      if (result?.length <= 0) {
        res.json(createResponse(null, "User not Registered", true));
      } else {
        if (result[0]?.USER_STATUS !== "VALID") {
          res.json(
            createResponse(
              null,
              "User Deactivated Please contact with admin.",
              true
            )
          );
        } else {
          // console.log("object");
          const isMatchedPass = await bcrypt.compare(
            data?.password,
            result[0]?.PASSWORD
          );
          roleIds = result[0].ROLES.split(",").map((id) => id.trim());
          const token = createTokens(
            result[0].EMPLOYEE_ID,
            result[0].EMAIL,
            roleIds
          );
          const ip =
            req.headers["x-forwarded-for"] || req.connection.remoteAddress;
          const browserInfo = req.useragent;

          const result2 = await postlogAudit(
            result[0].EMPLOYEE_ID,
            result[0].EMAIL,
            token,
            ip,
            browserInfo.browser,
            browserInfo.platform,
            device
          );
          const data1 = {
            token: token,
            isMatchedPass: isMatchedPass,
          };

          res.json(createResponse(data1, "Successfully Login", false));
        }
      }
    }
  } catch (err) {
    next(err);
  }
};
