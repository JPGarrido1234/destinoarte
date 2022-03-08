export interface Componente {
    name: string;
    icon: string;
    redirectTo: string;
}

export interface UserToken {
    token: string;
    user_email: string;
    user_nicename: string;
    user_display_name: string;
    response_token: string;
}

export interface responseError {
    code: string;
    message: string;
    data: string;
}

export interface UserRegister {
    username: string;
    email: string;
    password: string;
    response_registro: string;
}

export interface UserForgetPass {
    user_login: string;
}

export interface ListAudioExist {
    title: string,
    idguia: Number,
    iditinerario: Number,
    url: string,
    tipo: Number,
    imgthumb: string
}

export interface ListViewAudioInit {
    idGuia: Number,
    idGuiaPartes: Number,
    idGuiaItinerario: Number
}

export interface ListProvUrl{
    nombre: string,
    urlimg: string
}

export interface ListViewPlants {
    idguia: Number,
    url_plano: string,
    title: string
}

export interface ViewMap {
    idguia: Number,
    iditi: Number,
    titulo: string,
    tipo: string,
    mapa: string
}

export interface ViewInfograph{
    idguia: Number,
    iditi: Number,
    titulo: string,
    id_img: string
}

export interface ListBuyColorProduct {
    idguia: Number,
    img_thumb: string,
    titulo: string,
    nombre: string,
    resumen: string,
    color: string
}