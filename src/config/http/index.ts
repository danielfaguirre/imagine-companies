const getData = async <T>(url: string) => {
	const response = await fetch(url);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

const postData = async <T, U>(
	url: string,
	payLoad: U,
) => {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(payLoad),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

const patchData = async <T, U>(
	url: string,
	payLoad: U,
	id: number | string,
) => {
	const response = await fetch(`${url}/${id}`, {
		method: "PATCH",
		body: JSON.stringify(payLoad),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	} else {
		const data = (await response.json()) as T;
		return { data };
	}
};

const deleteData = async (url: string, id: number | string) => {
	const response = await fetch(`${url}/${id}`, {
		method: "DELETE",
	});
	if (response.status !== 200) {
		return { error: response.statusText };
	}
	return { error: "" };
};


const http = {
	getData,
	postData,
	patchData,
	deleteData
}

export default http
