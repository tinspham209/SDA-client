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

// - /industry/industry/city/:cityid;
// - /industry/industry/year/:yearid;
// - /industry/industry/city/:cityid/year/yearid;

export const getDataCityInYear = async (dataCube, dataSet, city, year) => {
	console.log("url", `${url}/${dataCube}/${dataSet}/city/${city}/year/${year}`);
	try {
		const data = axios.get(
			`${url}/${dataCube}/${dataSet}/city/${city}/year/${year}`
		);
		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getDataMergeThreeWidgetPeriodOfCity = async (
	dataCube1,
	dataSet1,
	dataCube2,
	dataSet2,
	dataCube3,
	dataSet3,
	city,
	fYear,
	tYear
) => {
	try {
		const { data } = await axios.get(
			`${url}/merge/dc1/dc${dataCube1}/dc2/dc${dataCube2}/dc3/dc${dataCube3}/s1/${dataSet1}/s2/${dataSet2}/s3/${dataSet3}/city/${city}/fyear/${fYear}/tyear/${tYear}`
		);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getDataMergeTwoWidgetPeriodOfCity = async (
	dataCube1,
	dataSet1,
	dataCube2,
	dataSet2,
	city,
	fYear,
	tYear
) => {
	try {
		console.log(
			"url",
			`${url}/merge/dc1/dc${dataCube1}/dc2/dc${dataCube2}/s1/${dataSet1}/s2/${dataSet2}/city/${city}/fyear/${fYear}/tyear/${tYear}`
		);
		const { data } = await axios.get(
			`${url}/merge/dc1/dc${dataCube1}/dc2/dc${dataCube2}/s1/${dataSet1}/s2/${dataSet2}/city/${city}/fyear/${fYear}/tyear/${tYear}`
		);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getIndustryByPeriodOfCity = async (city, fYear, tYear) => {
	try {
		const { data } = await axios.get(
			`${url}/industry/industry/city/${city}/fYear/${fYear}/tYear/${tYear}`
		);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getRainfallByPeriodOfCity = async (city, fYear, tYear) => {
	try {
		const { data } = await axios.get(
			`${url}/climate/rainfall/city/${city}/fYear/${fYear}/tYear/${tYear}`
		);

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

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getHumidityByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/climate/humidity/year/${year}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};

export const getIndustryByYear = async (year) => {
	try {
		const { data } = await axios.get(`${url}/industry/industry/year/${year}`);

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
		const { data } = await axios.get(`${url}/industry/industry/city/${city}`);

		return data;
	} catch (error) {
		console.log("error: ", error);
	}
};
