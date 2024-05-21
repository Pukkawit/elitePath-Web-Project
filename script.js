'use strict';

const sideBarMenuItems = document.querySelectorAll('.sidebar-menu .menu-items');
const blackIcon = document.querySelector('.black-icon');
const whiteIcon = document.querySelector('.white-icon');
const bDownarrow = document.querySelector('.black-icon2');
const wDownarrow = document.querySelector('.white-icon2');
const employeesSubmenu = document.querySelector('.sidebar-submenu');
const allEmployeesContent = document.querySelector('.allEmployee-content');
const employeesSubMenuItems = document.querySelectorAll('.employees-submenu');
const empoyeesCard = document.getElementById('employees-card');
const rolesCard = document.getElementById('roles-card');
const assignRole = document.querySelector('.assign-role');
const assignRoleModal = document.querySelector('.assign-role-modal');
const OverlayModal = document.querySelector('.overlay-modal');
const closeModal = document.querySelector('.modal-close');
const listedRoles = document.querySelectorAll('.role');

/* Assign role modal popup */
assignRole.addEventListener('click', function () {
  OverlayModal.classList.remove('hidden');
  assignRoleModal.style.transform = 'scale(100%)';

  /* Reset Checkboxes after modal close */
  function uncheckRoles() {
    listedRoles.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkbox.parentElement.parentElement.classList.remove(
          'active-assign-listed-employees'
        );
        checkbox.checked = false;
      }
    });
  }

  /* Close modal by clicking on the close button */
  closeModal.addEventListener('click', () => {
    assignRoleModal.style.transform = 'scale(0)';
    OverlayModal.classList.add('hidden');
    uncheckRoles();
  });

  /* Close modal by clicking on the overlay */
  OverlayModal.addEventListener('click', () => {
    assignRoleModal.style.transform = 'scale(0)';
    OverlayModal.classList.add('hidden');
    uncheckRoles();
  });
  /* Close modal by pressing Escape key */
  document.addEventListener('keydown', event => {
    event.key;
    if (event.key === 'Escape') {
      if (!assignRoleModal.classList.contains('hidden')) {
        assignRoleModal.style.transform = 'scale(0)';
        OverlayModal.classList.add('hidden');
        uncheckRoles();
      }
    }
  });
});

/* Selecting the Checkbox Function in the Modal */
listedRoles.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.classList.add(
        'active-assign-listed-employees'
      );
    } else {
      checkbox.parentElement.parentElement.classList.remove(
        'active-assign-listed-employees'
      );
    }
  });
});

/* Selecting the Side Bar Menu Items */
sideBarMenuItems.forEach(sideBarMenuItem => {
  const dashboard = sideBarMenuItems[0];
  const roles = sideBarMenuItems[1];
  const employees = sideBarMenuItems[2];
  const payroll = sideBarMenuItems[3];
  const reports = sideBarMenuItems[4];
  const settings = sideBarMenuItems[5];

  sideBarMenuItem.addEventListener('click', function (event) {
    const clickedItem = event.target;
    const allEmployees = document.querySelector('.submenu-all-employees');
    const recentHires = document.querySelector('.submenu-recent-hires');

    function resetMenus(menuItem) {
      menuItem.classList.remove('active-sidebar-menu');
      menuItem.firstElementChild.classList.remove('hidden');
      menuItem.lastElementChild.classList.add('hidden');
      return;
    }

    function resetDashboard() {
      resetMenus(dashboard);
    }
    function resetRoles() {
      resetMenus(roles);
      rolesCard.classList.add('hidden');
    }
    function resetEmployees() {
      blackIcon.classList.remove('hidden');
      employees.classList.remove('active-sidebar-menu');
      whiteIcon.classList.add('hidden');

      bDownarrow.classList.remove('hidden');
      wDownarrow.classList.add('hidden');
      empoyeesCard.classList.add('hidden');
      allEmployeesContent.classList.add('hidden');
    }
    function resetPayroll() {
      resetMenus(payroll);
    }
    function resetReports() {
      resetMenus(reports);
    }
    function resetSettings() {
      resetMenus(settings);
    }

    function hideEmployeeSubMenu() {
      if (!employeesSubmenu.classList.contains('hidden')) {
        employeesSubmenu.classList.add('hidden');
        wDownarrow.style.transform = 'rotate(180deg)';
      }
    }
    if (
      clickedItem === dashboard &&
      dashboard.classList !== 'active-sidebar-menu'
    ) {
      dashboard.firstElementChild.classList.add('hidden');
      dashboard.lastElementChild.classList.remove('hidden');
      dashboard.classList.add('active-sidebar-menu');
      resetRoles();
      resetEmployees();
      resetPayroll();
      resetReports();
      resetSettings();
      hideEmployeeSubMenu();
    } else if (
      clickedItem === roles &&
      roles.classList !== 'active-sidebar-menu'
    ) {
      resetDashboard();
      resetEmployees();
      resetPayroll();
      resetReports();
      resetSettings();
      roles.classList.add('active-sidebar-menu');
      roles.firstElementChild.classList.add('hidden');
      roles.lastElementChild.classList.remove('hidden');
      rolesCard.classList.remove('hidden');
      hideEmployeeSubMenu();
    } else if (
      clickedItem === employees &&
      employees.classList !== 'active-sidebar-menu'
    ) {
      resetDashboard();
      resetRoles();
      resetPayroll();
      resetReports();
      resetSettings();
      employeesSubmenu.classList.remove('hidden');
      employees.classList.add('active-sidebar-menu');
      empoyeesCard.classList.remove('hidden');
      blackIcon.classList.add('hidden');
      whiteIcon.classList.remove('hidden');
      bDownarrow.classList.add('hidden');
      wDownarrow.classList.remove('hidden');
      wDownarrow.style.transform = 'rotate(-180deg)';
      wDownarrow.style.transition = 'all ease-in-out 0.15s';
      allEmployeesContent.classList.remove('hidden');
      allEmployees.classList.add('active-sidebar-submenu');
      recentHires.classList.remove('active-sidebar-submenu');

      employees.addEventListener('click', function (event) {
        // employeesSubmenu.classList.toggle('hidden');

        if (!employeesSubmenu.classList.contains('hidden')) {
          employeesSubmenu.classList.add('hidden');
          wDownarrow.style.transform = 'rotate(0deg)';
        } else if (employeesSubmenu.classList.contains('hidden')) {
          wDownarrow.style.transform = 'rotate(-180deg)';
          employeesSubmenu.classList.remove('hidden');
        }
      });
    } else if (
      clickedItem === payroll &&
      payroll.classList !== 'active-sidebar-menu'
    ) {
      resetDashboard();
      resetRoles();
      resetEmployees();
      resetPayroll();
      resetReports();
      resetSettings();
      payroll.firstElementChild.classList.add('hidden');
      payroll.lastElementChild.classList.remove('hidden');
      payroll.classList.add('active-sidebar-menu');

      hideEmployeeSubMenu();
    } else if (
      clickedItem === reports &&
      payroll.classList !== 'active-sidebar-menu'
    ) {
      resetDashboard();
      resetRoles();
      resetEmployees();
      resetPayroll();
      resetReports();
      resetSettings();
      reports.firstElementChild.classList.add('hidden');
      reports.lastElementChild.classList.remove('hidden');
      reports.classList.add('active-sidebar-menu');

      hideEmployeeSubMenu();
    } else if (
      clickedItem === settings &&
      payroll.classList !== 'active-sidebar-menu'
    ) {
      resetDashboard();
      resetRoles();
      resetEmployees();
      resetPayroll();
      resetReports();
      settings.firstElementChild.classList.add('hidden');
      settings.lastElementChild.classList.remove('hidden');
      settings.classList.add('active-sidebar-menu');

      hideEmployeeSubMenu();
    }
  });
});

/* Submenu Under All Employees SideBar Menu*/

employeesSubMenuItems.forEach(employeeSubmenuItem => {
  const allEmployees = employeesSubMenuItems[0];
  const recentHires = employeesSubMenuItems[1];

  employeeSubmenuItem.addEventListener('click', event => {
    let clicked = event.target;

    if (clicked === recentHires) {
      recentHires.classList.add('active-sidebar-submenu');
      allEmployees.classList.remove('active-sidebar-submenu');
      allEmployeesContent.classList.add('hidden');
    } else if (clicked === allEmployees) {
      allEmployees.classList.add('active-sidebar-submenu');
      recentHires.classList.remove('active-sidebar-submenu');
      allEmployeesContent.classList.remove('hidden');
    }
  });
});

/* Pagination */
document.addEventListener('DOMContentLoaded', () => {
  const tr = document.querySelectorAll('#pagination-list .pagination-item'); // target rows inside tbody
  const paginationNumber = document.getElementById('pagination-numbers');
  const previousButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  const display = 8; // items per page
  let count = 1; // current page
  const buttonCount = Math.ceil(tr.length / display); //showing how many bottons based on the items to display.

  //! Render dynamic buttons
  function renderButtons() {
    paginationNumber.innerHTML = ''; // Clear existing buttons

    if (buttonCount <= 7) {
      // Display all buttons if there are 7 or fewer pages
      for (let i = 1; i <= buttonCount; i++) {
        addButton(i);
      }
    } else {
      addButton(1); // Always add the first button

      let start, end;

      if (count <= 4) {
        // If count is less than or equal to 4, display buttons 2 to 5
        start = 2;
        end = 5;
      } else if (count >= buttonCount - 3) {
        // If count is greater than or equal to buttonCount - 3, display buttons (buttonCount - 4) to (buttonCount - 1)
        start = buttonCount - 4;
        end = buttonCount - 1;
      } else {
        // Otherwise, display buttons (count - 1) to (count + 1)
        start = count - 1;
        end = count + 1;
      }

      // Add buttons and ellipsis in the middle
      for (let i = start; i <= end; i++) {
        addButton(i);
        if (i === start + 1 && end - start > 2) {
          addEllipsisButton(i + 1);
        }
      }

      addButton(buttonCount); // Always add the last button
    }
  }

  // Function to create button and place the numbers
  function addButton(pageNum) {
    const button = document.createElement('button');
    button.innerHTML = pageNum;
    button.className = 'pagination-button';
    if (pageNum == count) {
      button.classList.add('active');
    }
    button.addEventListener('click', function () {
      count = pageNum;
      renderButtons();
      main(count);
      updateButtonStates();
    });
    paginationNumber.appendChild(button);
  }

  function addEllipsisButton(nextPage) {
    const button = document.createElement('button');
    button.innerHTML = '...';
    button.className = 'pagination-ellipsis';
    button.addEventListener('click', function () {
      count = nextPage;
      renderButtons();
      main(count);
      updateButtonStates();
    });
    paginationNumber.appendChild(button);
  }
  function next() {
    if (count < buttonCount) {
      count++;
      renderButtons();
      main(count);
      updateButtonStates();
    }
  }

  function prev() {
    if (count > 1) {
      count--;
      renderButtons();
      main(count);
      updateButtonStates();
    }
  }

  function updateButtonStates() {
    previousButton.disabled = count == 1;
    nextButton.disabled = count == buttonCount;
  }

  previousButton.addEventListener('click', prev);
  nextButton.addEventListener('click', next);

  function main(pageNum) {
    const nextPage = display * pageNum;
    const prevPage = display * (pageNum - 1);

    for (let i = 0; i < tr.length; i++) {
      tr[i].style.display = 'none';

      if (i < nextPage && i >= prevPage) {
        tr[i].style.display = 'table-row';
      }
    }
  }

  // Initial setup
  main(1);
  renderButtons();
  updateButtonStates();
});
