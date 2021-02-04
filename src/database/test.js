const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: "-23.4837725",
    //     lng: "-51.966595",
    //     name: "Lar dos meninos",
    //     about: "presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    //     whatsapp:"4499999999",
    //     images: [
    //         "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1595295403848-3f1d04c4e95e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours:"Horário de visitas: Das 08h até 18h.",
    //     open_on_weekends: "0"

    // })

    // consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // consultar somente 1 orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    // deletar dado da tabela
     //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //  console.log('cheguei aqui')
    //await db.run("DROP TABLE IF EXISTS orphanages")

})