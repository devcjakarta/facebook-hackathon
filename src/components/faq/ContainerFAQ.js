import React from 'react'
import {Container, Header, Accordion, Card} from 'semantic-ui-react'

const FAQLists = [{
  title: 'Kapan pendaftaran Jakarta Hack Day dibuka?',
  content: 'Pendaftaran dibuka mulai 16 Oktober 2017.'
}, {
  title: 'Kapan pendaftaran Jakarta Hack Day ditutup?',
  content: 'Pendaftaran ditutup pada tanggal 28 Oktober 2017 pukul 23.59 WIB.'
}, {
  title: 'Ke mana dokumen presentasi dikirim?',
  content: 'Dokumen presentasi dikirim melalui alamat email jakarta@devcid.com.'
}, {
  title: 'Kapan sesi penjurian hackathon dimulai?',
  content: 'Sesi penjurian hackathon dilakukan tanggal 11 November 2017.'
}, {
  title: 'Kapan pengumuman pemenang hackathon?',
  content: `Pengumuman pemenang hackathon dilakukan 2 tahap. Finalis dari luar Jabodetabek diumumkan 4 November 2017, sedangkan peserta dari Jabodetabek diumumkan tanggal 11 November 2017.`
}, {
  title: 'Apakah submission untuk registrasi hackathon sudah harus berupa produk jadi?',
  content: 'Tidak. Peserta dapat mengirimkan karya berupa prototype.'
}, {
  title: 'Apakah saya harus menggunakan tools dari Facebook?',
  content: 'Tidak. Peserta dapat menggunakan teknologi open source lainnya.'
}, {
  title: 'Apakah peserta akan melakukan coding marathon pada hari hackathon?',
  content: 'Tergantung dari jenis submission peserta. Jika submission tersebut tidak dalam bentuk produk, maka peserta tidak melakukan coding marathon pada hari hackathon.'
}, {
  title: 'Apa yang peserta lakukan jika tidak coding pada hari hackathon?',
  content: 'Peserta akan dibimbing (kegiatan mentoring) oleh mentor yang memiliki latar belakang product knowledge. Selain itu, peserta juga mengevaluasi dan mempersiapkan produknya untuk keperluan pitching.'
}, {
  title: 'Bagaimana perbandingan nilai submission antara prototoype dengan produk yang dapat di-release?',
  content: 'Karya peserta berupa produk yang menggunakan API dari MainAPI akan mendapatkan poin tambahan.'
}, {
  title: 'Saya berasal dari juar Jabodetabek, apakah saya dapat ikut Jakarta Hack Day?',
  content: `Tentu saja, tetapi transportasi dan akomodasi tidak ditanggung pihak penyelenggara Jakarta Hack Day. Selain itu, Anda juga harus terdaftar sebagai anggota grup "Facebook Developer Circle: Jakarta" di Facebook.`
}]

function ContainerFAQ () {
  return (
    <Container id="faq-container" text>
      <Card fluid raised style={styles.transparentBackground}>
        <Card.Content>
          <Header as="h1">FAQ</Header>
          <Accordion defaultActiveIndex={0} panels={FAQLists} />
        </Card.Content>
      </Card>
    </Container>
  )
}

const styles = {
  transparentBackground: {
    backgroundColor: 'rgb(13, 71, 161)',
    opacity: .75
  }
}

export default ContainerFAQ
