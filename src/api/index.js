import axios from "axios";

const url = `http://server.sda-research.ml`;

// - /climate/humidity/city/:cityid;
// - /climate/humidity/year/:yearid;
// - /climate/humidity/city/:cityid/year/yearid;
// - /climate/humidity/city/:cityid/fYear/:fromYear/tYear/:toYear

// - /climate/rainfall/city/:cityid;
// - /climate/rainfall/year/:yearid;
// - /climate/rainfall/city/:cityid/year/yearid;

// - /climate/temperature/city/:cityid;
// - /climate/temperature/year/:yearid;
// - /climate/temperature/city/:cityid/year/yearid;

// - /industry/city/:cityid;
// - /industry/year/:yearid;
// - /industry/city/:cityid/year/yearid;

export const getRainfallByPeriodOfCity = async (city, fYear, tYear) => {
	try {
		const { data } = await axios.get(
			`${url}/climate/rainfall/city/${city}/fYear/${fYear}/tYear/${tYear}`
		);
		console.log("data: ", data);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getTemperatureByPeriodOfCity = async (city, fYear, tYear) => {
	try {
		const { data } = await axios.get(
			`${url}/climate/temperature/city/${city}/fYear/${fYear}/tYear/${tYear}`
		);
		console.log("data: ", data);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getHumidityByPeriodOfCity = async (city, fYear, tYear) => {
	try {
		const { data } = await axios.get(
			`${url}/climate/humidity/city/${city}/fYear/${fYear}/tYear/${tYear}`
		);
		console.log("data: ", data);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getHumidityByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/climate/humidity/year/${year}`);
		console.log("data: ", data);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getIndustryByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/industry/year/${year}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getTemperatureByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/climate/temperature/year/${year}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getRainfallByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/climate/rainfall/year/${year}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getHumidityByCity = async (city) => {
	try {
		const { data } = await axios.get(`${url}/climate/humidity/city/${city}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getTemperatureByCity = async (city) => {
	try {
		const { data } = await axios.get(`${url}/climate/temperature/city/${city}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getRainfallByCity = async (city) => {
	try {
		const { data } = await axios.get(`${url}/climate/rainfall/city/${city}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getIndustryByCity = async (city) => {
	try {
		const { data } = await axios.get(`${url}/industry/city/${city}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};
