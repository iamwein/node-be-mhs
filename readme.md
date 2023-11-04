npx sequelize-cli model:generate --name dmatkul --attributes kodematkul:string,matkul:string,sks:integer,smt:integer
npx sequelize-cli model:generate --name dosen --attributes nidn:string,nama:string,jk:string,alamat:string
npx sequelize-cli model:generate --name data_ngajar --attributes id_dosen:integer,id_matkul:integer
