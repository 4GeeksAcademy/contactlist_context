const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			apiContact: "https://playground.4geeks.com/contact/",
			nombreAgenda: "Luisa",
			contacts: [],
			
		},
		actions: {
			// Función GET para traer los contactos
			getContacts: async () => {
				const uri = getStore().apiContact + "agendas/" + getStore().nombreAgenda + "/contacts";
				const response = await fetch(uri); 
				if (!response.ok) {
					console.log ("error", response.status, response.statusText);
					return
				}

				const data = await response.json()
				setStore({constacts: data.contacts}); 
			},

			// Función POST para añadir contactos
			addContact: async (dataToSend) => {
				const uri = getStore().apiContact + "agendas/" + getStore().nombreAgenda + "/contacts";
				const opctions = {
					method: "POST",
					headers:{
						"Content-type":"application/json"
					},
					body: JSON.stringify(dataToSend)
				}

				const response = await fetch(uri, opctions); 
				if (!response.ok) {
					console.log ("error", response.status, response.statusText);
					return
				}
					getActions().getContacts();
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
