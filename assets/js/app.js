const tipoMultimedia = (() => {
    const funcionInterna = (url, id) => {
        document.getElementById(id).setAttribute('src', url);
    }
    return {
        playVideo: (url, id) => funcionInterna(url, id)
    }
})();

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl()
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id
    }
    
    playMultimedia() {
        tipoMultimedia.playVideo(this.url, this.getId())
    }
    setInicio(tiempo) {
        const inicio = document.getElementById(this.getId())
        inicio.setAttribute('src', `${this.getUrl()}?start=${tiempo}`)
    }
}

let musica = new Reproductor("https://www.youtube.com/embed/8nXqcugV2Y4", "musica")
let peliculas = new Reproductor("https://www.youtube.com/embed/9ix7TUGVYIo", "peliculas")
let series = new Reproductor("https://www.youtube.com/embed/oqxAJKy0ii4", "series")
// console.log(musica)
// console.log(peliculas)
// console.log(series)

// console.log(musica.playMultimedia())
musica.playMultimedia()
peliculas.playMultimedia()
series.playMultimedia()


// console.log(musica.setInicio(20))
// musica.setInicio(20)
peliculas.setInicio(40)
series.setInicio(17)
