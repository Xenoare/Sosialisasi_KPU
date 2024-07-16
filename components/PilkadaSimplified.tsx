"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [electionDay, setElectionDay] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2024-11-26T23:59:59");
    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setElectionDay(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center">
        <div className="w-full self-center p-4 lg:w-1/2">
          <Image
            src="/img_maskot.png"
            alt="Maskot KPU Lampung"
            width={400}
            className="self-center ml-10"
            height={400}
          />
        </div>
        <div className="w-full p-4 lg:w-1/2 justify-between">
          <h1 className="text-dark text-5xl my-10 text-bold font-serif font-bold">
            Selamat Datang di Situs Sosialisasi Pilkada Lampung 2024
          </h1>
        </div>
      </div>
      <div className="bg-blue-300 rounded-md flex flex-wrap w-full justify-between p-10 my-3">
        <div className="w-full  lg:w-1/2">
          <h1 className="text-dark py-3">
            7 Juta warga Lampung akan berpartisipasi dalam agenda 5 tahunan
            PILKADA (Pemilihan Kepala Daerah) Serentak di Indonesia. Website ini
            hadir untuk memberikan sosialisasi terkait informasi yang relevan
            bagi anda sebelum memutuskan untuk memilih pada Pilkada nanti.
          </h1>
          <h1 className="text-dark py-3">
            Anda Masih belum tau apa apa terkait Pilkada? Tidak masalah, anda
            bisa cek halaman satu ini mengenai apa itu Pilkada, siapa
            kandidatnya dan kapan pelaksanaannya.
          </h1>
          <button className="rounded-md bg-white p-3">Pilkada 101</button>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/img_person_wondering.png"
            alt="Asking why"
            width={350}
            height={350}
            className=" ml-10"
          />
        </div>
      </div>
      <div className="bg-red-300 rounded-md flex w-full p-10 my-3">
        <div className="w-full justify-center self-center">
          <div className="w-full">
            <h1 className="text-dark py-3">
              Udah lumayan paham? Biar tambah naik level, nih pelajari gimana
              caranya kamu bisa terhindar dari Hoax & Misinformasi!
            </h1>
          </div>
          <div>
            <button className="rounded-md bg-white p-3">
              Playlist Pause Aja Dulu
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/xcX/q6v/srL/uLj//Pz/6Oj/2Nj/+Pj/3d3/9PT/8PD/x8f/v7//Rkb/Y2P/PT3/0ND/y8v/cXH/4+P/k5P/Hh7/nZ3/iIj/1NT/6+v/3Nz/fn7/VVX/IyP/DQ3/MjL/aWn/Vlb/dnb/oqL/QkL/XV3/j4//Zmb/GBj/hIT/n5//dHT/MDD/Tk70z9TjAAAE/klEQVR4nO2daV/iMBCHkVLKWY7Scosoh6Ir3//bLV1RBDmyM5NO+vP/vNs3JI8Lmcx0khYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4D1XpjHMSTyqgbNYth6PulHd4n6T98PwyLzag7qkziYNyoV7WnfIlqI6iNoqLvLZPhtNe+b81nD3dUHmbz1n27Nx0mS88Po1EtaOiIB1EpWaxbHYbL/3l3WutFUoqCLOTG/rSTidZ5OlN/bFMvTmaKdp/MktiSX9jSdvuiFVrw6861tY6YR9KCPW2lHzyWJf2CvrbPGfqCS2tNW+YCNSnBQNvkIkKLanmjLXKRjcxvsa3tcYW2hGCobXEVicDo7nc0ZcMX9LQdbuCxDV2MhN/pcwUjbYObNJmGj9oCN3lkGmrP3wCeYFN7+gbwvqZD7ekbMGQZalYsTJlzBKvaszeCU46raE/eiArDsKQ9eSNKDMNn7ckbwVlqXE6cDnBSqDwspXd3HYZhNlV7Lg90wbL23A2h1zIa2lM3pEE2jLWnbgi95DbRnrohE7JhV3vqhnTJhgK502DF/4ybFMmGPn/wKIudn082FJjc7s9bfuV/zHXoG9Mlf/B/X6Dgnv9B11iSDQf8wfc/kaLVouSAbCiQWnwtAgJ/rYvQk4spf/DDMle39xh5SjYUmNP3hbxiK1XpkQ0F0sPjUGUpctATxC1/8JNgXLZSntySDQW+VT+2G7GFyEFPgQU6oM5sqJrikWNGNhQY/OyWUTxyOGcoHjncM5SOHFRBiTLN5cRGMnJQCzV1gbGvpG6CkaNONJQoRF1NToMngRFSqF21Et1eN9LvpkxLLrWHT6LUdrPA8CYwCLnYJlFqu11CkYgc1GKbxNNDkyIRP3KMiIYSxUSzMhg3clDLiRLdQqaFPl7koDZ9Z2lYCNYKhsUsDQuFP5mMomfIWm5yYMgMGVRDie5gs7G5YZ/aKZyVIT/pd9tQYvtNNczidyiTQjm80gilwc4aipUyqIaW9zSC5Sg3d22SJUWqoc3cQii530PNLezlh9IPhakdphLHDs8Zyj+eoR5EtFSnsfCIjVqnsVJrs/KYlFprs1AvtfSom9q6J9Gpf2woUjo8A7lbX2Ds74b2Wk6ogrKGYiX8M5ANBZqgPw3ttn6RDd/5Y+8N7bbvvZMNpXoxrDXS7KH3Yggcr9wZNqyf0qQfshTo+oqsNrTtoXd9CUxumMWdPQnZMB8HuzgdtHk4I5tCPyfr6q0tp9BvccnHEVJ6K0YhLye7OOfVszgswWfFMHT/RoUUzq0KifbkjaCHw7wERM5J55H25I2g9pqk5OOIJf2AZcH1K5Q+4F2kxGkByYo1yzCD1IcN/dRTSh6WGs5CU/gFdwzlYFfDvSdK4km3Xdi37mkL3IQr6PzWlLMp/cD1LFjgRnOB484WeeMLun1JDedqmgNjbY0rCF3Q7u6NX5xbvo5wtaoodhf0Lk908bfYYeWFP3AvLPID4QnjF22lI9o23nURCzxsE2Jq6/0P5dCFFwj0QtF3Bvwg9odbrerNZjv0bf3vnVCvFb1ksV5l88qS2Wq9SLxijfEAhkO5Pg7iSrcZlrzB8+vi5ak1pzcG9eetp5fF6/PAK4XNbiUOxnW730gG5WpqXju878k/ed+Tf3jfUy01qTqrAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUv8gfbKj5f8bLAAAAAElFTkSuQmCC"
            alt="Youtube"
            width={350}
            height={350}
            className=" ml-10"
          />
        </div>
      </div>
      <div className="bg-blue-300 rounded-md flex flex-wrap w-full p-10 my-3">
        <h1 className=" mx-auto text-6xl text-center text-dark py-3 justify-center self-center">
          Sudah Paham dan Siap? Ikuti tahap-tahap ini untuk memilih nanti ✔️
        </h1>

        <div className="flex my-10 justify-center bg-white rounded-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img_person_wondering.png"
              alt="Asking why"
              width={350}
              height={350}
              className=" ml-10"
            />
          </div>
          <div className="w-full lg:w-1/2 justify-center self-center">
            <div className="text-xl text-bold">
              <h1>
                Pastikan kamu terdaftar sebagai Daftar Pemilih Tetap (DPT)
              </h1>
              <p>
                Gunakan NIK atau Nomor Paspor untuk cek DPT kamu, dan jangan
                lupa catat nama Kabupaten/Kota serta kecamatan yang terdaftar.
              </p>
              <button className="rounded-md bg-slate-600  p-3">
                Cek DPT Online
              </button>
            </div>
          </div>
        </div>

        <div className="flex my-10 justify-center bg-white rounded-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img_person_wondering.png"
              alt="Asking why"
              width={350}
              height={350}
              className=" ml-10"
            />
          </div>
          <div className="w-full lg:w-1/2 justify-center self-center">
            <div className="text-xl text-bold">
              <h1>
                Masa Pencatatan data Pemilih oleh petugas (24 Juni - 24 Juli){" "}
              </h1>
              <p>
                Pada masa ini, petugas Pantarlih akan datang untuk melakukan
                pendataan pemilih. Pastikan untuk stay updated terkait Pantarlih
                melalui instagram KPU_Lampung{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-10 justify-center bg-white rounded-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img_person_wondering.png"
              alt="Asking why"
              width={350}
              height={350}
              className=" ml-10"
            />
          </div>
          <div className="w-full lg:w-1/2 justify-center self-center">
            <div className="text-xl text-bold">
              <h1>
                Amati Calon Pasangan dan Kampanyenya (23 September - 24
                November)
              </h1>
              <p>
                Amati calon pasangan, dan lihat bagaimana para Calon tersebut
                menyampaikan gagasan dan pendapatnya.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-10 justify-center bg-white rounded-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img_person_wondering.png"
              alt="Asking why"
              width={350}
              height={350}
              className=" ml-10"
            />
          </div>
          <div className="w-full lg:w-1/2 justify-center self-center">
            <div className="text-xl text-bold">
              <h1>
                Amati Calon Pasangan dan Kampanyenya (23 September - 24
                November)
              </h1>
              <p>
                Amati calon pasangan, dan lihat bagaimana para Calon tersebut
                menyampaikan gagasan dan pendapatnya.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap bg-red-300 p-10 my-10">
        <div className="w-full">
          <p>
            Jangan lupa gunakan hak suara anda dalam Pilkada Serentak 2024 😄{" "}
          </p>
        </div>
        <div className="w-full">
          <p>
            Kita sebagai rakyat, turut andil dalam menentukan masa depan bangsa.{" "}
          </p>
        </div>
        <div className="bg-white w-full">
          <p className="300 p-4">27 November 2024</p>
        </div>
        <div>
          <p>Countdown sampai Pilkada 2024 📅 </p>
        </div>
        {electionDay ? (
          <h1>Pilkada Telah Lewat</h1>
        ) : (
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Days</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <span className="divider">:</span>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
