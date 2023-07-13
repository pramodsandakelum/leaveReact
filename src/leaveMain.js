import { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { leaveFunctions } from "./leaveMainFunction";
import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/all.css";
import $ from "jquery";

export class leaveMain extends Component {
  constructor(props) {
    super(props);

    this.refreshlist = this.refreshlist.bind(this);

    this.state = {
      blockedDates: ["2023-05-14", "2023-05-20", "2023-05-25"],
      userData: [],
      agmUnit: "",
      dgmUnit: "",
      serviceUnit: "",
      username: "",
    };
  }

  componentDidMount() {
    this.refreshlist();
    leaveFunctions.setupDatePicker(this.state.blockedDates);
    var report = document.getElementById("medicalFile");
    var priorlist = document.getElementById("priorDateList");
    var leavelist = document.getElementById("leaveDateList");
    var lieuPanel = document.getElementById("lieuPanel");
    priorlist.style.display = "none";
    lieuPanel.style.display = "none";
    leavelist.style.display = "none";
    report.disabled = true;
  }

  refreshlist() {}

  render() {
    const { blockedDates, userData, agmUnit, dgmUnit, serviceUnit, username } =
      this.state;

    return (
      <div>
        {" "}
        <h1>Leave Management System</h1>
        <div class="card">
          <div class="card-header d-flex">
            <h5 id="username" class="mb-0">
              Jeewanthi Panawala
            </h5>
            &nbsp;&nbsp;
            <h5 id="epfno" class="mb-0">
              006941
            </h5>
            &nbsp;&nbsp;&nbsp;
            <a class="d-block float-end" id="logout" href="#" rel="nofollow">
              Logout
            </a>
          </div>
          <div class="card-body">
            <div class="table-responsive text-center">
              <table class="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th class="text-center text-bg-success">Casual</th>
                    <th class="text-center text-bg-success">Annual</th>
                    <th class="text-center text-bg-success">Medical</th>
                    <th class="text-center text-bg-success">Duty</th>
                    <th class="text-center text-bg-success">Lieu Leave</th>
                    <th class="text-center text-bg-success">No pay</th>
                    <th class="text-center text-bg-success">Maternity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center text-bg-info">
                      <label class="form-label" id="casualNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center text-bg-warning">
                      <label class="form-label" id="annualNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center text-bg-danger">
                      <label class="form-label" id="medicalNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center">
                      <label class="form-label" id="dutyNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center">
                      <label class="form-label" id="lieuNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center">
                      <label class="form-label" id="nopayNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                    <td class="text-center text-bg-muted">
                      <label class="form-label" id="maternityNo">
                        10
                      </label>
                      <label class="form-label">/</label>
                      <label class="form-label">10</label>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <label class="form-label fs-5">Apply for Leave</label>
          </div>
        </div>
        <div class="container text-center d-inline-flex">
          <div class="table-responsive">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>
                    <select
                      id="leaveTypeDD"
                      required=""
                      onChange={() => {
                        leaveFunctions.lieuLeave();
                        leaveFunctions.medicalreport();
                      }}
                    >
                      <option value="0">Select Leave Type</option>
                      <option value="12">Casual</option>
                      <option value="12">Annual</option>
                      <option value="12">Medical</option>
                      <option value="12">Duty</option>
                      <option value="12">Lieu</option>
                      <option value="12">No Pay</option>
                      <option value="12">Maternity</option>
                    </select>
                  </th>
                  <th>Number of Days</th>
                  <th>
                    <input type="number" id="leaveCount" disabled />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Reason</th>
                  <td>
                    <textarea id="reasonText"></textarea>
                  </td>
                  <div id="lieuPanel" class="card">
                    <div class="card-header text-bg-secondary">
                      <h5 class="mb-0">Select Dates</h5>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>Prior Dates</th>
                              <th>
                                <input
                                  type="date"
                                  id="priorDate"
                                  onChange={() => leaveFunctions.priorDates()}
                                />
                              </th>
                              <th>
                                <input
                                  type="button"
                                  id="clearPriorList"
                                  value="Clear"
                                  onClick={() => leaveFunctions.clearPrior()}
                                />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <select size="3" id="priorDateList"></select>
                              </td>
                            </tr>
                            <tr>
                              <th>Leave Dates</th>
                              <td>
                                <input
                                  type="date"
                                  id="leaveDate"
                                  onChange={() => leaveFunctions.leaveDates()}
                                />
                              </td>
                              <th>
                                <input
                                  type="button"
                                  id="clearPriorList"
                                  value="Clear"
                                  onClick={() => leaveFunctions.clearLeave()}
                                />
                              </th>
                            </tr>
                            <tr>
                              <th></th>
                              <td>
                                <select size="3" id="leaveDateList"></select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <th id="fromLabel">
                    From&nbsp;
                    <input id="fromDate" type="text" />
                  </th>
                  <th id="toLabel">
                    To&nbsp;
                    <input id="toDate" type="text" />
                    &nbsp;
                  </th>
                </tr>
                <tr>
                  <th>Address During Leave</th>
                  <td>
                    <textarea id="leaveAddressText"></textarea>
                  </td>
                  <th>Acting Employee for Leave Duration</th>
                  <td>
                    <select>
                      <option value="12">This is item 1</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>Attach Medical Report</th>
                  <td>
                    <input type="file" id="medicalFile" required />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </div>
    );
  }
}
