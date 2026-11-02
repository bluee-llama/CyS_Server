/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Descarga un archivo cifrado y la clave AES envuelta del usuario
*
* idUnderscorearchivo Integer 
* returns _bajar__id_archivo__get_200_response
* */
const bajarIdArchivoGET = ({ idUnderscorearchivo }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        idUnderscorearchivo,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Asigna un archivo existente a un nuevo usuario con su clave AES envuelta
*
* compartirPostRequest CompartirPostRequest 
* no response value expected for this operation
* */
const compartirPOST = ({ compartirPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        compartirPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Autentica al usuario y devuelve un token de sesión
*
* loginPostRequest LoginPostRequest 
* returns _login_post_200_response
* */
const loginPOST = ({ loginPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        loginPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Registra un nuevo usuario con sus credenciales criptográficas
*
* registrarPostRequest RegistrarPostRequest 
* no response value expected for this operation
* */
const registrarPOST = ({ registrarPostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        registrarPostRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Sube un archivo cifrado y la clave AES envuelta
*
* archivoUnderscorecifrado File  (optional)
* claveUnderscoreaesUnderscoreenvuelta String  (optional)
* no response value expected for this operation
* */
const subirPOST = ({ archivoUnderscorecifrado, claveUnderscoreaesUnderscoreenvuelta }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        archivoUnderscorecifrado,
        claveUnderscoreaesUnderscoreenvuelta,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtiene la clave pública de un usuario para poder compartirle un archivo
*
* username String 
* returns _usuarios__username__clave_publica_get_200_response
* */
const usuariosUsernameClavePublicaGET = ({ username }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        username,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  bajarIdArchivoGET,
  compartirPOST,
  loginPOST,
  registrarPOST,
  subirPOST,
  usuariosUsernameClavePublicaGET,
};
