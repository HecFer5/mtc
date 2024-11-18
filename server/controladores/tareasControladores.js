import { pool } from "../db.js";

/////////////////////////// TABLA MERIDIANOS //////////////////////////////////

// TRAE TODOS LOS MERIDIANOS
export const getMeridianos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY nombremeridiano ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosOrden = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY nombremeridiano DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosSoploAsc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY soplo ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosSoploDesc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY soplo DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosTipoAsc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY tipo ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosTipoDesc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY tipo DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosPuntosAsc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY puntos ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeridianosPuntosDesc = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos ORDER BY puntos DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// TRAE UNA MERIDIANO ESPECIFICO
export const getMeridiano = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM meridianos WHERE idmeridiano = ? ",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "el registro no existe" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//// MODIFICA UN REGISTRO
export const actualizarMeridiano = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE meridianos SET ? WHERE idmeridiano = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




