const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = {status: 200};
const RESPONSE_KO = {status: 401};

interface ResponseOnlyStatus {
	status:number
}


const submitForm = (pass:string, repass?:string, optionalQuestion?:string):Promise<ResponseOnlyStatus> => 
	new Promise((resolve, reject) =>
		setTimeout(() => 
			pass !== PRUEBA_KO? resolve(RESPONSE_OK) : reject(RESPONSE_KO)
		, 3000)
)

export {
	submitForm
}