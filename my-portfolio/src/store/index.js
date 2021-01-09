import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDropDownMenu: false,
    bigHello: [
      { letter: "H", style: "--i:1;" },
      { letter: "e", style: "--i:2;" },
      { letter: "l", style: "--i:3;" },
      { letter: "l", style: "--i:4;" },
      { letter: "o", style: "--i:5;" }
    ],
    textMe:
      "I've been working as a frontend developer for a e-commerce company for two years now and I use <a>Vue.js</a> as prefered framework. My previous studies consists of a 3 year long Interaction design programme at Malmö University and 1 year of psychology courses in Lund. Besides this, I live in Malmö with my son Hannes and my boyfriend Linus, who also works in programming.",
    textSkills:
      "During these two years I have been working in-house and among other things developed a <a>CRM system</a> for my collegues in the sales- and design department. Another project which I worked together with another designer on, was a <a>quick shop</a> and <a>favorite lists</a> view for our e-commerce clients. <br /> In my team we have been working in <a>SCRUM</a>, so I have a good understanding in using this method on a day-to-day basis. I also have good experience in <a>code reviews</a>, trying to keep a good coding standard for the whole team and system. Lastly, one of my more recent tasks at my company was to create a frontend <a>guideline</a> for Vue coding which is now in use.",
    weather: {
      name: "",
      temp: "",
      description: ""
    },
    timelineData: [
      {
        datetime: "2019 - now",
        event: "Working for Starweb AB"
      },
      {
        datetime: "2018 - 2019",
        event:
          "Worked for IKEA Hubhult. My role at the company was office support"
      },
      {
        datetime: "2014-2018",
        event: "I studied Interaction Design 180hp at Malmö University"
      },
      {
        datetime: "2017",
        event: "For one year I took psychology courses at Lunds University"
      },
      {
        datetime: "2016",
        event:
          "In 2016 I was chosen to go on a exchange study program in Rochester, USA."
      }
    ],
    showTimeline: false,
    aboutToggleText: "Show timeline",
    skillsData: [
      {
        name: "CSS"
      },
      {
        name: "HTML"
      },
      {
        name: "Javascript"
      },
      {
        name: "Vue"
      },
      {
        name: "UX"
      }
    ],
    highestIdDragItem: 10,
    dragGroups: [
      {
        id: 1,
        name: "To Do",
        class: "column-1",
        items: [
          { id: 1, name: "Do laundry", groupId: 1 },
          { id: 2, name: "Work out", groupId: 1 },
          { id: 3, name: "Shower", groupId: 1 },
          { id: 4, name: "Make dinner", groupId: 1 }
        ]
      },
      {
        id: 2,
        name: "In Progress",
        class: "column-2",
        items: [
          { id: 5, name: "Pick up delivery", groupId: 2 },
          { id: 6, name: "Tidy up", groupId: 2 }
        ]
      },
      {
        id: 3,
        name: "Done",
        class: "column-3",
        items: [
          { id: 7, name: "Make breakfast", groupId: 3 },
          { id: 8, name: "Eat breakfast", groupId: 3 },
          { id: 9, name: "Go to work", groupId: 3 }
        ]
      }
    ]
  },
  mutations: {
    toggleMobileMenu(state) {
      state.showDropDownMenu = !state.showDropDownMenu;
    },
    setWeatherData(state, data) {
      let weatherData = data.body.list[0];
      state.weather.name = weatherData.name;
      state.weather.description = weatherData.weather[0].description;
      state.weather.temp = parseInt(weatherData.main.temp);
    },
    toggleAbout(state) {
      state.showTimeline = !state.showTimeline;
      if (state.showTimeline) {
        state.aboutToggleText = "Show skills";
      } else {
        state.aboutToggleText = "Show timeline";
      }
    },
    addNewItem(state, name) {
      state.dragGroups[0].items.push({
        id: state.highestIdDragItem + 1,
        name: name,
        groupId: 1
      });
      state.highestIdDragItem++;
    }
  },
  actions: {
    getWeatherData() {
      Vue.http
        .get(
          "http://api.openweathermap.org/data/2.5/find?q=malmoe&type=like&appid=1d2b7517b2bbac162d8e5c7db6d7e8c6&units=metric"
        )
        .then(data => {
          this.commit("setWeatherData", data);
        })
        .catch(error => {
          console.log("Error! Issue with fetching weather data: ", error);
        });
    }
  },
  modules: {}
});
