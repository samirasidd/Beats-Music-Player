import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Got it",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-300x300.jpg",
      id: uuidv4(),
      active: true,
      color: ["#2E385B", "#8586A1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15041",
    },
    {
      name: "Blue View",
      artist: "Leavv",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#892D42", "#F38258"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16216",
    },
    {
      name: "Evening Stroll",
      artist: "Xander, Blue Wednesday",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1E5B54", "#82A46F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16178",
    },
    {
      name: "Romance",
      artist: "RenBoz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3FBBA3", "#F58279"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16064",
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
