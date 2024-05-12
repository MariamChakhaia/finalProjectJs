"use strict";

export function filter() {
  let input = document.getElementById("filter");
  let books = document.getElementById("result");
  let listArrays = [];

  async function users() {
    try {
      let response = await fetch("https://softwium.com/api/books");
      if (!response.ok) {
        throw new Error("Page not found");
      }
      let responseData = await response.json();

      responseData.forEach((el) => {
        let li = document.createElement("li");
        let booklink = document.createElement("a");
        booklink.setAttribute("href", "#");
        booklink.style.textDecoration = "none";
        booklink.style.color = "var(--grey)";
        booklink.style.backgroundColor = "white";
        booklink.innerText = `${el.title} (${el.authors})`;

        li.appendChild(booklink);
        listArrays.push(li);
        books.appendChild(li);
      });
    } catch (error) {
      console.log(error);
    }
  }

  users();

  function filterUsers(searchItem) {
    listArrays.forEach((el) => {
      if (
        el.innerText.toLowerCase().includes(searchItem.trim().toLowerCase())
      ) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  }

  input.addEventListener("keyup", function () {
    filterUsers(this.value);
  });
}

export function filter2() {
  let ourStaff = document.getElementById("staff");
  let listArrays = [];

  async function staff() {
    try {
      let response = await fetch("https://reqres.in/api/users?page=1");
      if (!response.ok) {
        throw new Error("Page not found");
      }
      let responseData = await response.json();
      let data = responseData.data;

      data.forEach((el) => {
        let li = document.createElement("li");
        li.classList.add("staffImg");
        let name = document.createElement("h2");
        name.innerText = `${el.first_name} ${el.last_name}`;
        name.style.fontFamily = "var(--medium)";
        // name.style.fontSize = "18px";
        // name.style.padding = "10px";
        name.classList.add("aboutusName");

        let email = document.createElement("h3");
        email.style.fontFamily = "var(--regular)";
        // email.style.fontSize = "16px";
        // email.style.padding = "10px";
        email.classList.add("aboutusEmail");

        email.innerText = el.email;
        let img = document.createElement("img");
        img.src = el.avatar;
        img.classList.add("aboutUsImg");
        img.style.borderRadius = "50%";

        li.appendChild(name);
        li.appendChild(email);
        li.appendChild(img);
        listArrays.push(li);
        ourStaff.appendChild(li);
      });
    } catch (error) {
      console.log(error);
    }
  }

  staff();

  function filterUsers(searchItem) {
    listArrays.forEach((el) => {
      if (
        el.innerText.toLowerCase().includes(searchItem.trim().toLowerCase())
      ) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  }

  input.addEventListener("keyup", function () {
    filterUsers(this.value);
  });
}
