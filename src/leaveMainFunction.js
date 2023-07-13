import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker";
import "jquery-ui/themes/base/all.css";

export const leaveFunctions = {
  //enable medical report if more than 2 days
  medicalreport() {
    var date = parseInt(document.getElementById("leaveCount").value);
    var report = document.getElementById("medicalFile");
    var leaveType = document.getElementById("leaveTypeDD");
    var type = leaveType.options[leaveType.selectedIndex].text;

    if (type == "Medical" && date > 2) {
      report.disabled = false;
    } else {
      report.disabled = true;
    }
  },
  //lieu leave function
  lieuLeave() {
    var leaveType = document.getElementById("leaveTypeDD");
    var fromdate = document.getElementById("fromDate");
    var lieuPanel = document.getElementById("lieuPanel");
    var todate = document.getElementById("toDate");
    var fromlabel = document.getElementById("fromLabel");
    var tolabel = document.getElementById("toLabel");
    var type = leaveType.options[leaveType.selectedIndex].text;
    if (type == "Lieu") {
      fromdate.style.display = "none";
      todate.style.display = "none";
      fromlabel.style.display = "none";
      tolabel.style.display = "none";
      lieuPanel.style.display = "";
    } else {
      fromdate.style.display = "";
      todate.style.display = "";
      fromlabel.style.display = "";
      tolabel.style.display = "";
      lieuPanel.style.display = "none";
      this.clearPrior();
      this.clearLeave();
    }
  },

  // add prior work dates to list
  priorDates() {
    const datePicker = document.getElementById("priorDate");
    const selectedDate = datePicker.value;

    // Add the selected date to the select option list
    const datesList = document.getElementById("priorDateList");
    const option = document.createElement("option");
    option.text = selectedDate;
    datesList.add(option);
    datesList.style.display = "";
  },
  //clear prior list and datepicker
  clearPrior() {
    const datesList = document.getElementById("priorDateList");
    const datePicker = document.getElementById("priorDate");
    while (datesList.firstChild) {
      datesList.removeChild(datesList.firstChild);
    }
    datesList.style.display = "none";
    datePicker.value = "";
  },

  // add prior work dates to list
  leaveDates() {
    const datePicker = document.getElementById("leaveDate");
    const selectedDate = datePicker.value;

    // Add the selected date to the select option list
    const datesList = document.getElementById("leaveDateList");
    const option = document.createElement("option");
    option.text = selectedDate;
    datesList.add(option);
    datesList.style.display = "";
  },
  //clear date list from lieu leave
  clearLeave() {
    const datesList = document.getElementById("leaveDateList");
    const datePicker = document.getElementById("leaveDate");
    while (datesList.firstChild) {
      datesList.removeChild(datesList.firstChild);
    }
    datesList.style.display = "none";
    datePicker.value = "";
  },

  //create jquery date pickers
  setupDatePicker(blockedDates) {
    const fromdatePickerOptions = {
      beforeShowDay: function (date) {
        const formattedDate = $.datepicker.formatDate("yy-mm-dd", date);
        const isBlocked = blockedDates.includes(formattedDate);
        // const currentDate = new Date().setHours(0, 0, 0, 0);
        //const isDisabled = date.getTime() < currentDate;
        //&& !isDisabled
        return [!isBlocked];
      }, // Binding the function to the component instance

      // Other datepicker options...
    };

    const todatePickerOptions = {
      beforeShowDay: function (date) {
        const formattedDate = $.datepicker.formatDate("yy-mm-dd", date);
        const isBlocked = blockedDates.includes(formattedDate);
        //const currentDate = new Date().setHours(0, 0, 0, 0);
        //const isDisabled = date.getTime() < currentDate;
        // && !isDisabled
        return [!isBlocked];
      }, // Binding the function to the component instance
      onClose: () => {
        this.calculateBusinessDays(blockedDates);
      },

      // Other datepicker options...
    };

    $("#fromDate").datepicker(fromdatePickerOptions);
    $("#toDate").datepicker(todatePickerOptions);
  },

  formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  },

  //calculate days for leave
  calculateBusinessDays(blockedDates) {
    const startDate = document.getElementById("fromDate");
    const endingDate = document.getElementById("toDate");

    let currentDate = new Date(startDate.value);
    let endDate = new Date(endingDate.value);

    let businessDays = 0;

    //let cdate = currentDate.getDay();
    //let edate = endDate.getDay();

    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
      const formattedDate = currentDate.toISOString().split("T")[0];

      // Exclude weekends (Saturday and Sunday) and blocked dates
      if (
        dayOfWeek !== 0 &&
        dayOfWeek !== 6 &&
        !blockedDates.includes(formattedDate)
      ) {
        businessDays++;
      }

      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    //alert(businessDays);

    var numberofdays = document.getElementById("leaveCount");

    numberofdays.value = businessDays;

    this.medicalreport();

    //alert(blockedDates);
    //alert(endingDate.value);
  },
};
