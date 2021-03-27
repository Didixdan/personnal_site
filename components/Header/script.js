import './style.scss'
export default {
  name: 'Header',
  data() {
    return {
      liste: [
        "Le temps, n'a pas le temps.",
        "font-family: 'Veranda';.",
        'Les deux principales inventions sorties de Berkeley sont UNIX et le LSD. Difficile de croire à une quelconque coïncidence - Jeremy S. Anderson',
        "Avant de vouloir qu'un logiciel soit réutilisable, il faudrait d'abord qu'il ait été utilisable - Ralph Johnson",
        'Photoshop est le meilleur moyen pour montrer à vos clients à quoi leur site internet ne ressemblera jamais.',
        'En #pairprogramming, il ne faut pas réfléchir au coût du nombre de mains qui codent mais aux bénéfices du nombre de têtes qui pensent. - David Leuliette',
        "J'ai essayé babun, c'est le \"moins pire\" qu'on puisse faire sur Windows et la seule façon de survivre si on est obligé de bosser avec cet os. - Bob Maerten",
        'Ne mémorisez pas ce que vous pouvez rechercher dans un livre. - Albert Einstein',
        "L'avenir de la publicité est le HTML.",
        'Dans le monde il y a 10 types de personnes, ceux qui comprennent le binaire, et les autres.',
        'Règle N° 1 : Si tout va bien, ne touchez à rien.',
        "Règle N° 2 : C'est quoi '2' ?",
        "Un programme n'est jamais fini, on arrête juste d'y travailler.",
        "Si debugger, c'est supprimer des bugs, alors programmer ne peut être que les ajouter. - Edsger Dijkstra",
        'Microsoft : "Vous avez des questions ? Nous avons des trombones qui dansent."',
        'Les développeurs ne sont pas asocial, ils ne sont juste pas orientés utilisateur.',
        'J’adorerais changer le monde, mais il est pas Open Source.',
        'Le manuel disait « Nécessite Windows XP ou mieux ». J’ai donc installé Linux.',
        'ATTENTION : ERREUR UTILISATEUR, REMPLACER L’UTILISATEUR ET RECOMMENCER.',
        'Est-ce que le site "mangerbouger.fr" enregistre les cookies ? ',
        'Un bug n’est jamais qu’une erreur. Il représente quelque chose de plus grand. Une erreur de pensée. Ça fait de vous qui vous êtes. – Elliot Alderson (Mr.Robot)',
        'L’informatique n’est qu’un outil, comme un pinceau ou un crayon. - Griffo',
        "L'informatique, ça fait gagner beaucoup de temps... à condition d'en avoir beaucoup devant soi ! - Mireille Sitbon",
      ],
      randomSentence: String,
    }
  },

  methods: {
    setRandomSentence() {
      const nb = Math.floor(Math.random() * this.liste.length)
      this.randomSentence = this.liste[nb]
    },
  },

  created() {
    this.setRandomSentence()
  },
}
