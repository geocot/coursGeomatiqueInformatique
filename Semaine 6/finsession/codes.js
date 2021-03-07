function aRebours() {
    let paragraphe = document.getElementById("compteRebours");
    //Date limite
    let annee = 2021;
    let mois = 5;
    let jour = 13;
    let heure = 0;
    let minute = 0;
    let seconde = 0;

    let dateFinSession = new Date(annee, mois - 1, jour, heure, minute, seconde).valueOf(); //ValueOf permet de mettre l'info en seconde epoch

    //Date aujourd'hui
    let aujourdhui = Date.now();

    let tempsRestant = dateFinSession - aujourdhui;
    let jours = Math.floor(tempsRestant / 86400000);
    if (jours<0){ //Pour ne pas aller après la fin de la session. 
        jours = 0;
    }
    paragraphe.innerHTML = jours + " jours restant.";
    //Pour le graphique
    let dateDebutSession = new Date(2021, 0, 25, 0, 0, 0).valueOf(); //ValueOf permet de mettre l'info en seconde epoch
    let dureeSession = (dateFinSession - dateDebutSession) / 86400000;
    let pourcentageFait = Math.floor(((dureeSession - jours) / dureeSession) * 100);

    //Documentation: https://www.chartjs.org/docs/latest/
    let ctx = document.getElementById('pointeTarte').getContext('2d');
    let chart = new Chart(ctx, {
        // Type d'histogramme
        type: 'doughnut',
        
        // Données et options
        data: {
            labels: ['Fait', 'Restant'],
            datasets: [{
                label: 'Session hiver 2021',
                backgroundColor: ['rgb(0, 255, 0)', 'rgb(200, 200, 200)'],
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1,
                data: [pourcentageFait, (100 - pourcentageFait)]
            }]

        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


