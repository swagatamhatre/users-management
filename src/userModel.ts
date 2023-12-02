import db from './databaseConnection';


export interface User {
    id: number;
    username: string;
    email: string;
    address: string;
    password: string;
    profile_pic: string;
  }
  

export  function createUser (user:User): Promise<number> {
    const { username, email, address, password, profile_pic} = user;
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (username, email, address, password, profile_pic) VALUES (?, ?, ?, ?, ?)', [username, email, address, password, profile_pic], (err, result) => {
            if (err) {
                console.log("Error>>>>>",err);
                
                reject(0);
            } else {
                resolve(result.insertId) ;
            }    
        });
    })  
};
export function getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        db.query('SELECT id, username, email, address, profile_pic FROM users', (err,result) => {
            if(err) {
                console.log("Errorrrrrrr",err);
                reject (err);
            } else {
                resolve(result);
            }
        } )
    })
};

export function getUserById(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
        db.query('SELECT id,username, email, address, profile_pic FROM users where id = ?', [id], (err,result) => {
            if(err) {
                console.log("Errorrrrrrr",err);
                reject (err);
            } else {
                resolve(result[0]);
            }
        } )
    })
};

export function updateUser(id: number,user:User): Promise<boolean> {
    const { username, email, address, password, profile_pic} = user;

    return new Promise((resolve, reject) => {
        db.query('UPDATE users SET username=?, email = ?, address = ?, profile_pic = ?  where id = ?', [username, email, address, profile_pic, id], (err,result) => {
            if(err) {
                console.log("Errorrrrrrr",err);
                reject (false);
            } else {
                console.log("Result===",result);
                
                resolve(true);
            }
        } )
    })
};

export function deleteUser(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM users where id = ?', [id], (err,result) => {
            if(err) {
                console.log("Errorrrrrrr",err);
                reject (false);
            } else {
                resolve(true);
            }
        } )
    })
};