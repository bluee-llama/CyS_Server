/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const bajarIdArchivoGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.bajarIdArchivoGET);
};

const compartirPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.compartirPOST);
};

const loginPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.loginPOST);
};

const registrarPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.registrarPOST);
};

const subirPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.subirPOST);
};

const usuariosUsernameClavePublicaGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.usuariosUsernameClavePublicaGET);
};


module.exports = {
  bajarIdArchivoGET,
  compartirPOST,
  loginPOST,
  registrarPOST,
  subirPOST,
  usuariosUsernameClavePublicaGET,
};
