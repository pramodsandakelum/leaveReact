import { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { leaveFunctions } from "./leaveMainFunction";
import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/all.css";
import $ from "jquery";

export class holidays extends Component {
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
    $("#fromDate").datepicker();
  }

  refreshlist() {}

  render() {
    const { blockedDates, userData, agmUnit, dgmUnit, serviceUnit, username } =
      this.state;

    return (
      <div>
        <h1>Leave Management System</h1>

        <section class="py-4 py-xl-5">
          <div class="container">
            <div class="text-white bg-dark border rounded border-0 p-4 p-md-5">
              <h4 class="fw-bold text-white mb-3">
                Bureau Holidays and Mercantile Holidays
              </h4>
              <div class="my-3"></div>
              <div class="table-responsive text-white">
                <table class="table table-sm table-bordered text-white">
                  <thead>
                    <tr>
                      <th width="25%">
                        <label class="form-label" id="annualNo">
                          Type of Holiday
                        </label>
                      </th>
                      <th width="25%">
                        <select>
                          <option value="12">Bureau</option>
                          <option value="13">Mercantile</option>
                        </select>
                      </th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th>
                        <label class="form-label" id="annualNo">
                          Description
                        </label>
                      </th>

                      <th>
                        <textarea></textarea>
                      </th>
                      <th></th>
                      <th>
                        
                      </th>
                    </tr>
                    <tr>
                      <th id="fromLabel">Date</th>
                      <th>
                        <input id="fromDate" type="text" />
                      </th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
