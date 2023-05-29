const sql = require('mssql');

// Configuración de la conexión a la base de datos
const config = {
  server: 'janfit.database.windows.net',
  user: 'localhost',
  password: 'JAN-Fit1',
  database: 'JAN-Fit',
  options: {
    encrypt: true, // Si estás utilizando la autenticación integrada de Azure, establece esta opción en "false"
    trustServerCertificate: true // Opcional, se utiliza para confiar en los certificados de servidor SSL
  }
};

// Función para realizar consultas a la base de datos
async function executeQuery(query) {
  try {
    await sql.connect(config);
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
    throw error;
  } finally {
    sql.close();
  }
}

module.exports = {
  executeQuery
};
