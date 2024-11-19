const contacts = [
    {
        nombre: 'Carlitos',
        img: 'https://i.pinimg.com/474x/bb/ef/a0/bbefa07f9ff315071961a214fad14453.jpg',
        id: 1,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Toma, come carlito',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Que decis flaco?',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:12',
                id: 3,
                texto: 'Quien sos?',
                status: 'no-visto'
            },
        ]
    },
    {
        nombre: 'Melman',
        img: 'https://preview.redd.it/melman-madagascar-v0-8321rl8wr8x91.jpg?width=386&format=pjpg&auto=webp&s=dbc0ee6f1f87d68c3198268518289f25436be678',
        id: 2,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola Melman, seguis en madagascar?',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Sii, estoy con el curso todavia',
                status: 'visto'
            }
        ]
    },
    {
        nombre: 'Robert',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Eye_reasonably_small_400x400.jpg',
        id: 3,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
                status: 'no-recibido'
            },
        ]
    },
    {
        nombre: 'Geronimo',
        img: 'https://pbs.twimg.com/profile_images/1722501239450021888/oYy45eaU_400x400.jpg',
        id: 4,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
                status: 'no-recibido'
            },
        ]
    },
    {
        nombre: 'Davo',
        img: 'https://i.pinimg.com/474x/e0/af/b1/e0afb1f32c8af2af99cdfbb227edc885.jpg',
        id: 5,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
                status: 'no-recibido'
            },
        ]
    },
    {
        nombre: 'Jorge',
        img: 'https://www.ole.com.ar/2023/12/08/WUwrcP8rg_400x400__1.jpg',
        id: 2,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola Melman, seguis en madagascar?',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Sii, estoy con el curso todavia',
                status: 'visto'
            }
        ]
    },
    {
        nombre: 'yoni',
        img: 'https://pbs.twimg.com/profile_images/1820577676647657472/1a0z9BmX_400x400.jpg',
        id: 2,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola, como estas?',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'ke onda loro',
                status: 'visto'
            }
        ]
    },
    {
        nombre: 'pedrito',
        img: 'https://preview.redd.it/melman-madagascar-v0-8321rl8wr8x91.jpg?width=386&format=pjpg&auto=webp&s=dbc0ee6f1f87d68c3198268518289f25436be678',
        id: 2,
        mensajes: [
            {
                emisor: 'Tu',
                hora: '23:10',
                id: 1,
                texto: 'Hola Melman, seguis en madagascar?',
                status: 'visto'
            },
            {
                emisor: 'Usuario',
                hora: '23:11',
                id: 2,
                texto: 'Sii, estoy con el curso todavia',
                status: 'visto'
            }
        ]
    },
    {
        nombre: 'juli',
        img: 'https://pbs.twimg.com/profile_images/1722501239450021888/oYy45eaU_400x400.jpg',
        id: 4,
        mensajes: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'USUARIO',
                hora: '23:11',
                id: 2,
                texto: 'Si, hoy aprendi estados',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Eso que significa :nerd_face:?',
                status: 'no-visto'
            },
            {
                emisor: 'YO',
                hora: '23:13',
                id: 4,
                texto: 'Estas ahi?',
                status: 'no-recibido'
            },
        ]
    }
]
export default contacts