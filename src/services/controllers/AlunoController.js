import db from '../database/database'

db.transaction((tx) => { 
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS mediaAlunos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, media REAL);"
    );
});

export const create = (obj) => {
    
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO mediaAlunos (nome, media) values(?, ?);",
                [obj.nome, obj.media],
                (_, { rowsAffected, insertId }) => {
                    if(rowsAffected > 0) {
                        resolve(insertId)
                    } else {
                        reject("Erro ao inserir dados na tabela: " + JSON.stringify(obj))
                    }
                },
                (_, error) => reject(error)
            )
        })
    }) 
}

export const update = (id, obj) => {
    
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE mediaAlunos SET nome=?, media=? WHERE id=?;",
                [obj.nome, obj.media],
                (_, { rowsAffected, insertId }) => {
                    if(rowsAffected > 0) {
                        resolve(insertId)
                    } else {
                        reject("Erro ao inserir dados na tabela: " + JSON.stringify(obj))
                    }
                },
                (_, error) => reject(error)
            )
        })
    })
}

export const remove = (id) => {
    
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM mediaAlunos WHERE id=?;",
                [id],
                (_, { rowsAffected, insertId }) => {
                    if(rowsAffected > 0) {
                        resolve(insertId)
                    } else {
                        reject("Erro ao inserir dados na tabela: " + JSON.stringify(obj))
                    }
                },
                (_, error) => reject(error)
            )
        })
    })
}


export const read = () => {
    db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM mediaAlunos;",
          [],
          (_, { rows }) => {
            const len = rows.length;
            if (len > 0) {
              for (let i = 0; i < len; i++) {
                const { id, nome, media } = rows.item(i);
                console.log(`ID: ${id}, Nome: ${nome}, Média: ${media}`);
              }
            } else {
              console.log('Nenhum dado encontrado.');
            }
          },
          error => {
            console.log('Erro ao recuperar os dados:', error);
          }
        );
      });
}