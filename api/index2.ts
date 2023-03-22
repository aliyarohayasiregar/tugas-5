type JenisKelamin = "L" | "P";

interface Mahasiswa {
  nim: string;
  nama: string;
  jenisKelamin: JenisKelamin;
}

let mahasiswa1: Mahasiswa;
mahasiswa1 = {
  nim: "1111",
  nama: "Romi Kusuma Bakti",
  jenisKelamin: "L",
};
