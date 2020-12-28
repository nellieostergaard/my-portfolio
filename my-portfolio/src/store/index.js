import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bigHello: [
      { letter: "H", style: "--i:1;" },
      { letter: "e", style: "--i:2;" },
      { letter: "l", style: "--i:3;" },
      { letter: "l", style: "--i:4;" },
      { letter: "o", style: "--i:5;" }
    ],
    textMe:
      "I've been working as a frontend developer for two years and I use Vue.js as prefered framework. During these two years I have been working in-house and developed a CRM system for my current workplace as the main frontend designer. Another project which I worked together with another designer on, was a quick shop and favorite lists view for our e-commerce clients. Besides this I live in Malmö with my boyfriend Linus, who also works with programming, and my son Hannes.",
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
    aboutToggleText: "Show Timeline"
  },
  mutations: {
    setWeatherData(state, data) {
      let weatherData = data.body.list[0];
      state.weather.name = weatherData.name;
      state.weather.description = weatherData.weather[0].description;
      state.weather.temp = parseInt(weatherData.main.temp);
    },
    toggleAbout(state) {
      state.showTimeline = !state.showTimeline;
      if (state.showTimeline) {
        state.aboutToggleText = "Show Skills";
      } else {
        state.aboutToggleText = "Show Timeline";
      }
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
