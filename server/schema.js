const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const mongoose = require("mongoose");
const Driver = require("./models/Drivers");
const Team = require("./models/Team");

//DUMMY USER DATA
const userData = [
  { id: 1, firstName: "Keshav", lastName: "Bokhoree", age: 23 },
  { id: 2, firstName: "Kavish", lastName: "Shankar", age: 18 },
  { id: 3, firstName: "Andrew", lastName: "Smith", age: 35 },
];

//DUMMY DRIVER DATA
const driverData = [
  {
    id: 1,
    fname: "Lewis",
    lname: "Hamilton",
    age: 38,
    team: 1,
    country: "London,UK",
    podium: 190,
    wins: 103,
    debut: "Canada 2008",
    worldchampionship: 7,
    dateOfBirth: "19 Nov 1970",
    img:"/lewishamilton.avif",
    driverNo:44
  },
  {
    id: 2,
    fname: "Max",
    lname: "Verstappen",
    age: 24,
    team: 2,
    country: "Netherlands",
    podium: 100,
    wins: 55,
    debut: "Spain ,2018 ",
    worldchampionship: 2,
    dateOfBirth: "19 Nov 1998",
    img:"/maxverstappen.avif",
    driverNo:33

  },
  {
    id: 3,
    fname: "Charles",
    lname: "Leclerc",
    age: 24,
    team: 3,
    country: "Monaco",
    podium: 26,
    wins: 9,
    debut: "Bharain 2019 ",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/charlesleclerc.avif",
    driverNo:16


  },
  {
    id: 4,
    fname: "George",
    lname: "Russel",
    age: 24,
    team: 1,
    country: "London,UK",
    podium: 5,
    wins: 1,
    debut: "Bharain 2019 ",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/georgerussel.avif",
    driverNo:63
  },
  {
    id: 5,
    fname: "Sergio",
    lname: "Perez",
    age: 35,
    team: 2,
    country: "Mexico,USA",
    podium: 30,
    wins: 5,
    debut: "Bharain 2007 ",
    worldchampionship: 2,
    dateOfBirth: "19 Nov 1971",
    img:"/sergioperez.avif",
    driverNo: 11


  },
  {
    id: 6,
    fname: "Carlos",
    lname: "Sainz",
    age: 26,
    team: 3,
    country: "Spain",
    podium: 26,
    wins: 2,
    debut: "Bharain 2015 ",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/carlossainz.avif",
    driverNo:55


  },

  {
    id: 21,
    fname: "Mick",
    lname: "Schumacher",
    age: 22,
    team: 1,
    country: "Germany",
    podium: 0,
    wins: 0,
    debut: "",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/mickschumacher.webp",
    driverNo:27

  },

  {
    id: 22,
    fname: "Robert",
    lname: "Swartzman",
    age: 19,
    team: 3,
    country: "French",
    podium: 0,
    wins: 0,
    debut: "",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/robertswartzman.jpeg",
    driverNo: 51

  },

  {
    id: 23,
    fname: "Liam",
    lname: "Lawson",
    age: 19,
    team: 2,
    country: "Australia",
    podium: 0,
    wins: 0,
    debut: "",
    worldchampionship: 0,
    dateOfBirth: "19 Nov 1998",
    img:"/liamlawson.webp",
    driverNo: 15

  },
];

const teamData = [
  {
    id: 1,
    name: "Mercesdes",
    principle: "Toto Wolf",
    driver1: 1,
    driver2: 4,
    reserverDriver: 21,
    powerUnit: "Mercedes",
    worldchampionship: 8,
    wins: 150,
    fastestLap: 98,
    polePosition: 125,
    baseIn: "Brackley",
    teamColor:"#61a100"
  },
  {
    id: 2,
    name: "Red Bull Racing",
    principle: "Christian Horner",
    driver1: 2,
    driver2: 5,
    reserverDriver: 23,
    powerUnit: "Red Bull Power Train",
    worldchampionship: 7,
    wins: 75,
    fastestLap: 35,
    polePosition: 55,
    baseIn: "Milton Keynes",
    teamColor:"#001344"
  },
  {
    id: 3,
    name: "Scuderia Ferrari",
    principle: "Fred Vasseur",
    driver1: 3,
    driver2: 6,
    reserverDriver: 22,
    powerUnit: "Ferrari",
    worldchampionship: 13,
    wins: 98,
    fastestLap: 89,
    polePosition: 90,
    baseIn: "Italy",
    teamColor:"#ef1a2d"
  },
];

//USER OBJECT
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

//DRIVER OBJECT
const DriverType = new GraphQLObjectType({
  name: "Driver",
  fields: () => ({
    id: { type: GraphQLID },
    fname: { type: GraphQLString },
    lname: { type: GraphQLString },
    age: { type: GraphQLInt },
    team: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return teamData.filter((team) => team.id == parent.team);
      },
    },
    country: { type: GraphQLString },
    podium: { type: GraphQLInt },
    wins: { type: GraphQLInt },
    debut: { type: GraphQLInt },
    worldchampionship: { type: GraphQLInt },
    dateOfBirth: { type: GraphQLInt },
    img : { type: GraphQLString } ,
    driverNo:{ type: GraphQLInt}
  }),
});

//TEAM OBJECT
const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    driver1: {
      type: DriverType,
      resolve(parent, args) {
        return driverData.filter((driver) => driver.id == parent.driver1)[0];
      },
    },
    driver2: {
      type: DriverType,
      resolve(parent, args) {
        return driverData.filter((driver) => driver.id == parent.driver2)[0];
      },
    },
    reserverDriver: {
      type: DriverType,
      resolve(parent, args) {
        return driverData.filter(
          (driver) => driver.id == parent.reserverDriver
        )[0];
      },
    },
    principle: { type: GraphQLString },
    powerUnit: { type: GraphQLString },
    worldchampionship: { type: GraphQLInt },
    wins: { type: GraphQLInt },
    fastestLap: { type: GraphQLInt },
    polePosition: { type: GraphQLInt },
    baseIn: { type: GraphQLString },
    teamColor:{type:GraphQLString}
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: {},
      resolve(parent, args) {
        return userData;
      },
    },
    user: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return userData.filter((data) => {
          return data.id == args.id;
        });
      },
    },
    getDriverDetails: {
      type: new GraphQLList(DriverType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return driverData.filter((data) => {
          return data.id == args.id;
        });
      },
    },
    getTeamDetails: {
      type: new GraphQLList(TeamType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return teamData.filter((data) => {
          return data.id == args.id;
        });
      },
    },
    getAllDriver: {
      type: new GraphQLList(DriverType),
      args: {},
      resolve(parent, args) {
        return driverData;
      },
    },
    getAllTeams: {
      type: new GraphQLList(TeamType),
      args: {},
      resolve(parent, args) {
        return Team.find();
      },
    },
  },
});
const MutationQuery = new GraphQLObjectType({
  name: "MutationQueryType",
  fields: {
    addTeam: {
      type: TeamType,
      args: {
        name: { type: GraphQLString },
        driver1: { type: GraphQLInt },
        driver2: { type: GraphQLInt },
        reserverDriver: { type: GraphQLInt },
        principle: { type: GraphQLString },
        powerUnit: { type: GraphQLString },
        worldchampionship: { type: GraphQLInt },
        polePosition: { type: GraphQLInt },
        wins: { type: GraphQLInt },
        fastestLap: { type: GraphQLInt },
        baseIn: { type: GraphQLString },
      },
      resolve(parent, args) {
        let team = new Team({
          name: args.name,
          driver1: args.driver1,
          driver2: args.driver2,
          reserverDriver: args.reserverDriver,
          principle: args.principle,
          powerUnit: args.powerUnit,
          worldchampionship: args.worldchampionship,
          polePosition: args.polePosition,
          wins: args.wins,
          fastestLap: args.fastestLap,
          baseIn: args.baseIn,
        });
        return team.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery,
});
