// Cartes de revision REC/CER (directive (UE) 2022/2557, resilience des entites
// critiques) et sa transposition francaise.
//
// Etat verifie le 2026-06-12 (texte officiel EUR-Lex FR, version HTML).
// Principe directeur du referentiel :
//   - Socle UE = la directive 2022/2557 est un texte STABLE et en vigueur au niveau
//     europeen. Les obligations sont citees par article (1, 2, 4-6, 12-15, 17-18,
//     21-22, 26-27) et les dates (17/10/2024, 17/01/2026, 17/07/2026...) sont des
//     faits tires du texte.
//   - Volet FRANCE = la transposition (Titre I du projet de loi "resilience") n'est
//     PAS aboutie au 2026-06-12 (loi non promulguee, aucun decret). Ces fiches sont
//     datees et marquees "a verifier".
//
// Sourcage : les fiches d'articles sont en VERBATIM, recopie depuis le texte
// officiel EUR-Lex FR (ressources/txt/cer-eurlex-html.txt). La fiche des secteurs
// de l'annexe est une liste fidele (l'annexe est un tableau, non citable en l'etat,
// detailParaphrase + detailNote). Le volet FRANCE porte FR_NOTE ("a verifier").

import type { ReviewCard } from "../types.ts";

const ANNEXE_NOTE =
  "Fiche repère : l'annexe de la directive est un tableau (secteurs, sous-secteurs, catégories d'entités) dont la mise en page ne se prête pas à la citation. La liste des secteurs est restituée fidèlement ; se reporter à l'annexe de la directive (UE) 2022/2557 (source citée ci-dessous) pour le détail exact des sous-secteurs et catégories d'entités.";
const FR_NOTE =
  "Volet en cours de transposition : au 12 juin 2026, la directive CER n'est pas encore transposée en France (loi non promulguée, aucun décret). Élément susceptible d'évoluer, à vérifier sur Légifrance et sgdsn.gouv.fr avant tout usage.";

export const cerCards: ReviewCard[] = [
  // --------------------------------------------------------------------------
  // Theme : socle (notions, cadre, articulation NIS2, calendrier)
  // --------------------------------------------------------------------------
  {
    id: "cer-quoi",
    refId: "cer",
    themeId: "socle",
    title: "Qu'est-ce que la directive REC / CER",
    short:
      "REC (en anglais CER, Critical Entities Resilience) est la directive (UE) 2022/2557 du 14 décembre 2022 sur la résilience des entités critiques : le volet « physique » et tous risques du paquet européen dont NIS2 est le volet cyber. C'est une directive, donc elle produit ses effets via une transposition nationale.",
    elementDeLangage:
      "« CER, c'est la jumelle physique de NIS2 : même paquet du 14 décembre 2022, mais elle vise la résilience tous risques des entités critiques, pas la cybersécurité. Et comme toute directive, elle passe par une loi de transposition. »",
    detail:
      "Directive (UE) 2022/2557 du Parlement européen et du Conseil du 14 décembre 2022 « sur la résilience des entités critiques, et abrogeant la directive 2008/114/CE du Conseil ». Article 1er, §1 : la directive « impose aux États membres l'obligation d'adopter des mesures spécifiques visant à garantir que les services qui sont essentiels au maintien de fonctions sociétales ou d'activités économiques vitales [...] soient fournis sans entrave dans le marché intérieur, en particulier l'obligation de recenser les entités critiques » (point a) et « impose aux entités critiques des obligations visant à renforcer leur résilience et leur capacité à fournir les services visés au point a) dans le marché intérieur » (point b).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557 (effets via transposition nationale)" },
    sources: ["cer-dir"],
    tags: ["définition", "cadre"],
  },
  {
    id: "cer-abroge-2008-114",
    refId: "cer",
    themeId: "socle",
    title: "CER abroge la directive 2008/114/CE et devait être transposée pour le 17 octobre 2024",
    short:
      "CER remplace la directive 2008/114/CE de 2008 sur le recensement et la désignation des infrastructures critiques européennes (ICE), abrogée avec effet au 18 octobre 2024. Les États membres devaient transposer CER au plus tard le 17 octobre 2024 et appliquer leurs dispositions à partir du 18 octobre 2024.",
    elementDeLangage:
      "« CER succède au régime ICE de 2008 : on passe de la protection d'infrastructures à la résilience d'entités. L'échéance de transposition, c'était le 17 octobre 2024. »",
    detail:
      "Article 26, §1 de la directive (UE) 2022/2557 : « Les États membres adoptent et publient, au plus tard le 17 octobre 2024, les dispositions nécessaires pour se conformer à la présente directive. Ils en informent immédiatement la Commission. Ils appliquent ces dispositions à partir du 18 octobre 2024. » Article 27 : « La directive 2008/114/CE est abrogée avec effet au 18 octobre 2024. Les références faites à la directive abrogée s'entendent comme faites à la présente directive. » (La directive abrogée est la directive 2008/114/CE du Conseil du 8 décembre 2008 « concernant le recensement et la désignation des infrastructures critiques européennes ainsi que l'évaluation de la nécessité d'améliorer leur protection ».)",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 26 et 27 (obligation des États membres)" },
    sources: ["cer-dir", "dir-2008-114"],
    tags: ["cadre", "calendrier"],
  },
  {
    id: "cer-articulation-nis2",
    refId: "cer",
    themeId: "socle",
    title: "Articulation avec NIS2 : champs séparés, mise en œuvre coordonnée (art. 1 §2 et art. 8)",
    short:
      "CER ne traite pas la cybersécurité : les questions couvertes par NIS2 lui échappent, mais les deux directives doivent être mises en œuvre de manière coordonnée. Cas particulier : les entités critiques des secteurs bancaire, des marchés financiers et des infrastructures numériques (points 3, 4 et 8 de l'annexe) sont exemptées des principales obligations CER, car déjà couvertes par DORA et NIS2.",
    elementDeLangage:
      "« CER et NIS2 se partagent le terrain : le physique pour l'une, le cyber pour l'autre, avec une coordination obligatoire. Et les secteurs banque, marchés financiers et infrastructures numériques sont sous CER pour le recensement, mais exemptés de ses obligations de fond. »",
    detail:
      "Article 1er, §2 de la directive (UE) 2022/2557 : « La présente directive ne s'applique pas aux questions couvertes par la directive (UE) 2022/2555, sans préjudice de l'article 8 de la présente directive. La sécurité physique et la cybersécurité des entités critiques étant liées, les États membres veillent à ce que la présente directive et la directive (UE) 2022/2555 soient mises en œuvre de manière coordonnée. » Article 8 : « Les États membres veillent à ce que l'article 11 et les chapitres III, IV et VI ne s'appliquent pas aux entités critiques qu'ils ont recensées dans les secteurs figurant aux points 3, 4 et 8 du tableau de l'annexe. » (points 3, 4 et 8 de l'annexe : secteur bancaire, infrastructures des marchés financiers, infrastructures numériques).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 1 §2 et art. 8" },
    sources: ["cer-dir", "nis2"],
    tags: ["articulation", "NIS2", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : entites (definitions, recensement, secteurs, cadre national)
  // --------------------------------------------------------------------------
  {
    id: "cer-definitions",
    refId: "cer",
    themeId: "entites",
    title: "Définitions clés : entité critique, résilience, incident, service essentiel (art. 2)",
    short:
      "Une entité critique n'existe que par sa désignation : c'est une entité publique ou privée désignée par un État membre. La résilience couvre tout le cycle : prévenir, se protéger, réagir, résister, atténuer, absorber, s'adapter, se rétablir. L'incident est tout événement perturbant de manière importante un service essentiel, pas seulement un incident cyber.",
    elementDeLangage:
      "« Dans CER, on n'est pas entité critique par nature : on le devient par désignation de l'État. Et la résilience y est définie large, de la prévention au rétablissement. »",
    detail:
      "Article 2 de la directive (UE) 2022/2557. Entité critique (point 1) : « une entité publique ou privée qui a été désignée par un État membre conformément à l'article 6 comme appartenant à l'une des catégories qui figurent dans la troisième colonne du tableau de l'annexe ». Résilience (point 2) : « la capacité d'une entité critique à prévenir tout incident, à s'en protéger, à y réagir, à y résister, à l'atténuer, à l'absorber, à s'y adapter et à s'en rétablir ». Incident (point 3) : « un événement qui perturbe ou est susceptible de perturber de manière importante la fourniture d'un service essentiel, y compris lorsqu'il affecte les systèmes nationaux qui préservent l'état de droit ». Service essentiel (point 5) : « un service qui est crucial pour le maintien de fonctions sociétales ou d'activités économiques vitales, de la santé publique et de la sûreté publique, ou de l'environnement ».",
    sources: ["cer-dir"],
    tags: ["définition", "entités"],
  },
  {
    id: "cer-recensement",
    refId: "cer",
    themeId: "entites",
    title: "Recensement des entités critiques par les États : au plus tard le 17 juillet 2026 (art. 6)",
    short:
      "C'est l'État qui désigne : chaque État membre recense ses entités critiques au plus tard le 17 juillet 2026, selon trois critères cumulatifs (service essentiel fourni, activité et infrastructure sur le territoire, effet perturbateur important d'un incident). L'entité est notifiée de sa désignation dans un délai d'un mois. C'est l'inverse de la logique d'auto-enregistrement de NIS2.",
    elementDeLangage:
      "« Sous CER, personne ne s'auto-déclare : l'État recense, désigne et notifie. Sous NIS2, c'est l'entité qui s'enregistre. C'est une différence structurante entre les deux directives. »",
    detail:
      "Article 6 de la directive (UE) 2022/2557. §1 : « Au plus tard le 17 juillet 2026, chaque État membre recense les entités critiques pour les secteurs et sous-secteurs figurant à l'annexe. » §2 : l'État membre « applique tous les critères suivants: a) l'entité fournit un ou plusieurs services essentiels; b) l'entité exerce ses activités sur le territoire dudit État membre et son infrastructure critique est située sur ledit territoire; et c) un incident aurait des effets perturbateurs importants, déterminés conformément à l'article 7, paragraphe 1, sur la fourniture par l'entité d'un ou de plusieurs services essentiels [...] ». §3 : chaque État membre « veille à ce que ces entités critiques reçoivent notification de ce qu'elles ont été recensées en tant qu'entités critiques dans un délai d'un mois à compter de ce recensement » ; « Le chapitre III s'applique aux entités critiques concernées dix mois suivant la date de la notification visée au premier alinéa du présent paragraphe. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 6 (obligation des États membres)" },
    sources: ["cer-dir"],
    tags: ["entités", "recensement", "idée reçue"],
  },
  {
    id: "cer-secteurs",
    detailParaphrase: true,
    detailNote: ANNEXE_NOTE,
    refId: "cer",
    themeId: "entites",
    title: "Les 11 secteurs de l'annexe",
    short:
      "L'annexe de CER liste 11 secteurs : énergie, transports, secteur bancaire, infrastructures des marchés financiers, santé, eau potable, eaux résiduaires, infrastructures numériques, administration publique, espace, et production, transformation et distribution de denrées alimentaires. NIS2 en compte davantage (18, réparties en deux annexes) : les périmètres se recoupent sans coïncider.",
    elementDeLangage:
      "« CER, c'est 11 secteurs dans une annexe unique. À ne pas confondre avec les annexes I et II de NIS2 : les listes se recoupent, mais ne sont pas identiques. »",
    detail:
      "Annexe de la directive (UE) 2022/2557 (« Secteurs, sous-secteurs et catégories d'entités », tableau) : 1. Énergie ; 2. Transports ; 3. Secteur bancaire ; 4. Infrastructures des marchés financiers ; 5. Santé ; 6. Eau potable ; 7. Eaux résiduaires ; 8. Infrastructures numériques ; 9. Administration publique ; 10. Espace ; 11. Production, transformation et distribution de denrées alimentaires. Pour chaque secteur, le tableau précise les sous-secteurs et les catégories d'entités visées (avec renvois aux textes sectoriels de l'Union). Rappel : les entités critiques des secteurs des points 3, 4 et 8 sont exemptées de l'article 11 et des chapitres III, IV et VI (art. 8).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, annexe" },
    sources: ["cer-dir"],
    tags: ["entités", "secteurs"],
  },
  {
    id: "cer-cadre-national",
    refId: "cer",
    themeId: "entites",
    title: "Cadre national : stratégie (art. 4) et évaluation des risques d'État membre (art. 5)",
    short:
      "Avant de désigner les entités, chaque État doit se doter, au plus tard le 17 janvier 2026, d'une stratégie de résilience des entités critiques (mise à jour au moins tous les quatre ans) et d'une évaluation des risques d'État membre couvrant les risques naturels et d'origine humaine, y compris accidents, catastrophes naturelles, urgences de santé publique et menaces hybrides.",
    detail:
      "Article 4, §1 de la directive (UE) 2022/2557 : « chaque État membre adopte, au plus tard le 17 janvier 2026, une stratégie visant à renforcer la résilience des entités critiques » ; §2 : « les États membres mettent à jour leur stratégie au moins tous les quatre ans ». Article 5, §1 : « Les autorités compétentes utilisent ladite liste des services essentiels pour effectuer une évaluation des risques [...] au plus tard le 17 janvier 2026, puis selon les besoins, et au moins tous les quatre ans. » Ces évaluations « rendent compte des risques naturels et d'origine humaine pertinents, y compris ceux qui revêtent un caractère transsectoriel ou transfrontière, des accidents, des catastrophes naturelles, des urgences de santé publique et des menaces hybrides ou autres menaces antagonistes [...] ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 4 et 5 (obligation des États membres)" },
    sources: ["cer-dir"],
    tags: ["entités", "stratégie", "calendrier"],
  },

  // --------------------------------------------------------------------------
  // Theme : obligations (des entites critiques, chapitre III)
  // --------------------------------------------------------------------------
  {
    id: "cer-eval-risques-entite",
    refId: "cer",
    themeId: "obligations",
    title: "Évaluation des risques par l'entité critique : 9 mois, puis au moins tous les 4 ans (art. 12)",
    short:
      "Une fois notifiée de sa désignation, l'entité critique a neuf mois pour réaliser sa propre évaluation des risques, à renouveler selon les besoins et au moins tous les quatre ans. Elle couvre tous les risques pertinents (naturels et d'origine humaine), pas seulement le cyber, et peut réutiliser des évaluations existantes faites au titre d'autres textes.",
    detail:
      "Article 12 de la directive (UE) 2022/2557. §1 : « les États membres veillent à ce que les entités critiques procèdent à une évaluation des risques dans un délai de neuf mois suivant la réception de la notification visée à l'article 6, paragraphe 3, selon les besoins par la suite et au moins tous les quatre ans, sur la base des évaluations des risques d'États membres et d'autres sources d'informations pertinentes [...] ». §2 : « Les évaluations des risques d'entités critiques rendent compte de tous les risques naturels et d'origine humaine pertinents, susceptibles d'entraîner un incident, y compris ceux qui revêtent un caractère transsectoriel ou transfrontière, des accidents, des catastrophes naturelles, des urgences de santé publique et des menaces hybrides et autres menaces antagonistes [...] » ; lorsque l'entité a réalisé d'autres évaluations ou documents au titre d'autres actes juridiques pertinents, « elle peut utiliser ces évaluations et documents pour satisfaire aux exigences énoncées dans le présent article ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 12" },
    sources: ["cer-dir"],
    tags: ["obligations", "risques"],
  },
  {
    id: "cer-mesures",
    refId: "cer",
    themeId: "obligations",
    title: "Mesures de résilience : prévenir, protéger, réagir, se rétablir (art. 13)",
    short:
      "L'entité critique prend des mesures techniques, de sécurité et organisationnelles proportionnées : prévention des incidents, protection physique des locaux et infrastructures (clôtures, barrières, surveillance, contrôle d'accès), réaction et atténuation, rétablissement et continuité d'activité, sécurité liée au personnel, sensibilisation. Le tout est décrit dans un plan de résilience, et un agent de liaison sert de point de contact avec les autorités.",
    elementDeLangage:
      "« L'article 13 de CER, c'est le pendant physique de l'article 21 de NIS2 : clôtures, contrôle d'accès, continuité d'activité, sécurité du personnel, formalisés dans un plan de résilience. »",
    detail:
      "Article 13, §1 de la directive (UE) 2022/2557 : « Les États membres veillent à ce que les entités critiques prennent des mesures techniques, des mesures de sécurité et des mesures organisationnelles appropriées et proportionnées pour garantir leur résilience [...] y compris des mesures nécessaires pour: a) prévenir la survenance d'incidents [...]; b) assurer une protection physique adéquate de leurs locaux et infrastructures critiques, en prenant dûment en considération, par exemple, des clôtures, des barrières, des outils et procédures de surveillance des enceintes, et des équipements de détection et de contrôle des accès; c) réagir et résister aux conséquences des incidents et les atténuer [...]; d) se rétablir d'incidents, en prenant dûment en considération des mesures assurant la continuité des activités [...]; e) assurer une gestion adéquate de la sécurité liée au personnel [...]; f) sensibiliser le personnel concerné aux mesures visées aux points a) à e) [...] ». §2 : les entités critiques « aient mis en place et appliquent un plan de résilience ou un ou plusieurs documents équivalents, qui décrivent les mesures prises en application du paragraphe 1 ». §3 : « chaque entité critique désigne un agent de liaison ou une personne ayant une fonction équivalente en tant que point de contact avec les autorités compétentes ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 13" },
    sources: ["cer-dir"],
    tags: ["obligations", "protection physique", "continuité"],
  },
  {
    id: "cer-antecedents",
    refId: "cer",
    themeId: "obligations",
    title: "Vérification des antécédents du personnel sensible (art. 14)",
    short:
      "CER organise un cadre de vérification des antécédents : dans des cas dûment motivés, l'entité critique peut demander la vérification des antécédents des personnes occupant des fonctions sensibles ou ayant accès à ses locaux et systèmes. La vérification couvre au minimum l'identité et les casiers judiciaires pertinents, de manière proportionnée et strictement limitée au nécessaire.",
    elementDeLangage:
      "« CER va jusqu'au criblage du personnel sensible : identité et casier judiciaire, dans un cadre proportionné défini par chaque État. C'est un volet qu'on ne trouve pas tel quel dans NIS2. »",
    detail:
      "Article 14 de la directive (UE) 2022/2557. §1 : « Les États membres précisent les conditions dans lesquelles une entité critique est autorisée, dans des cas dûment motivés et compte tenu de l'évaluation des risques d'État membre, à présenter des demandes de vérification des antécédents des personnes: a) qui occupent des fonctions sensibles au sein de l'entité critique ou au bénéfice de celle-ci [...]; b) qui sont autorisées à avoir un accès direct ou à distance aux locaux et aux systèmes d'information ou de contrôle de l'entité critique [...]; c) dont le recrutement est envisagé à des postes répondant aux critères énoncés au point a) ou b). » §2 : « Les vérifications des antécédents sont proportionnées et strictement limitées à ce qui est nécessaire. Elles sont effectuées dans le seul but d'évaluer un risque potentiel pour la sécurité de l'entité critique concernée. » §3 : à tout le moins, la vérification « corrobore l'identité de la personne qui fait l'objet d'une demande de vérification des antécédents » et « vérifie les casiers judiciaires de cette personne en ce qui concerne des infractions qui seraient pertinentes pour un poste déterminé ».",
    exigence: { level: "obligatoire", note: "art. 14 : cadre que les États doivent préciser ; pour l'entité, faculté encadrée (« est autorisée » à demander)" },
    sources: ["cer-dir"],
    tags: ["obligations", "personnel"],
  },
  {
    id: "cer-notification",
    refId: "cer",
    themeId: "obligations",
    title: "Notification des incidents : 24 h puis rapport détaillé sous un mois, à l'autorité compétente (art. 15)",
    short:
      "L'entité critique notifie sans retard injustifié à l'autorité compétente les incidents qui perturbent (ou risquent de perturber) de manière importante un service essentiel : première notification au plus tard 24 h après en avoir pris connaissance, puis rapport détaillé au plus tard un mois après. Attention au piège : sous CER on notifie l'autorité compétente, pas un CSIRT (logique NIS2), et le rythme est 24 h / 1 mois, pas 24 h / 72 h / 1 mois.",
    elementDeLangage:
      "« Sous CER : 24 heures puis un mois, à l'autorité compétente. Sous NIS2 : 24 heures, 72 heures, un mois, au CSIRT. Deux régimes de notification distincts, à ne pas mélanger. »",
    detail:
      "Article 15, §1 de la directive (UE) 2022/2557 : « Les États membres veillent à ce que les entités critiques notifient sans retard injustifié à l'autorité compétente les incidents qui perturbent ou sont susceptibles de perturber de manière importante la fourniture de services essentiels. Les États membres veillent à ce que, sauf à être dans l'incapacité de le faire pour des raisons opérationnelles, les entités critiques présentent une première notification au plus tard 24 heures après avoir pris connaissance d'un incident, suivie, s'il y a lieu, d'un rapport détaillé au plus tard un mois après. » Paramètres d'appréciation de l'importance de la perturbation : « a) le nombre et la proportion d'utilisateurs affectés par la perturbation; b) la durée de la perturbation; c) la zone géographique concernée par la perturbation, en tenant compte de son éventuel isolement géographique. » Et : « Lorsqu'un incident a ou pourrait avoir un impact important sur la continuité de la fourniture de services essentiels à ou dans six États membres ou plus, les autorités compétentes des États membres affectés par l'incident notifient ledit incident à la Commission. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 15" },
    sources: ["cer-dir"],
    tags: ["obligations", "incident", "notification", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : controle-ue (ECIP, supervision, sanctions)
  // --------------------------------------------------------------------------
  {
    id: "cer-ecip",
    refId: "cer",
    themeId: "controle-ue",
    title: "Entités critiques d'importance européenne particulière : 6 États membres ou plus (art. 17 et 18)",
    short:
      "Une entité critique qui fournit les mêmes services essentiels (ou similaires) à ou dans six États membres ou plus peut être reconnue entité critique d'importance européenne particulière, après notification par la Commission. Elle peut alors faire l'objet de missions de conseil organisées par la Commission pour évaluer ses mesures de résilience.",
    detail:
      "Article 17, §1 de la directive (UE) 2022/2557 : « Une entité est considérée comme une entité critique d'importance européenne particulière lorsqu'elle: a) a été désignée en tant qu'entité critique conformément à l'article 6, paragraphe 1; b) fournit les mêmes services essentiels ou des services essentiels similaires à ou dans six États membres ou plus; et c) elle a fait l'objet d'une notification conformément au paragraphe 3 du présent article. » Article 18, §1 : « À la demande de l'État membre qui a désigné une entité critique d'importance européenne particulière en tant qu'entité critique en vertu de l'article 6, paragraphe 1, la Commission organise une mission de conseil afin d'évaluer les mesures mises en place par ladite entité pour satisfaire aux obligations qui lui incombent en vertu du chapitre III. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 17 (recensement) et 18 (missions de conseil)" },
    sources: ["cer-dir"],
    tags: ["contrôle", "UE", "transfrontière"],
  },
  {
    id: "cer-supervision",
    refId: "cer",
    themeId: "controle-ue",
    title: "Supervision et exécution : inspections, audits, injonctions (art. 21)",
    short:
      "Les autorités compétentes peuvent inspecter sur place les infrastructures critiques et les locaux, superviser à distance les mesures prises, effectuer ou ordonner des audits, exiger des informations et des preuves de mise en œuvre (y compris un audit indépendant aux frais de l'entité), et enjoindre de remédier aux violations constatées.",
    detail:
      "Article 21 de la directive (UE) 2022/2557. §1 : « les États membres veillent à ce que les autorités compétentes disposent des pouvoirs et des moyens nécessaires pour: a) procéder à des inspections sur place de l'infrastructure critique et des locaux utilisés par l'entité critique pour fournir ses services essentiels et à la supervision à distance des mesures prises par les entités critiques conformément à l'article 13; b) effectuer ou ordonner des audits portant sur ces entités critiques. » §2 : les autorités peuvent exiger « les informations nécessaires pour évaluer si les mesures prises par ces entités pour garantir leur résilience satisfont aux exigences énoncées à l'article 13 » et « la preuve de la mise en œuvre effective de ces mesures, y compris les résultats d'un audit effectué par un auditeur indépendant et qualifié sélectionné par ladite entité et effectué à ses frais ». §3 : elles peuvent « enjoindre aux entités critiques concernées de prendre les mesures nécessaires et proportionnées pour remédier à toute violation constatée de la présente directive, dans un délai raisonnable fixé par lesdites autorités ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 21" },
    sources: ["cer-dir"],
    tags: ["contrôle", "supervision", "audit"],
  },
  {
    id: "cer-sanctions",
    refId: "cer",
    themeId: "controle-ue",
    title: "Sanctions : effectives, proportionnées et dissuasives, sans plafond chiffré (art. 22)",
    short:
      "Contrairement à NIS2 (qui impose des planchers d'amendes : 10 M€ / 2 % du CA pour les EE, 7 M€ / 1,4 % pour les EI), CER ne fixe aucun montant : elle renvoie entièrement le régime des sanctions aux États membres, en exigeant seulement qu'elles soient effectives, proportionnées et dissuasives.",
    elementDeLangage:
      "« Pas de barème d'amendes dans CER : la directive exige des sanctions effectives, proportionnées et dissuasives, et laisse chaque État fixer son régime. Les montants chiffrés, c'est NIS2. »",
    detail:
      "Article 22 de la directive (UE) 2022/2557 : « Les États membres déterminent le régime des sanctions applicables aux violations des dispositions nationales adoptées conformément à la présente directive et prennent toutes les mesures nécessaires pour assurer la mise en œuvre de ces sanctions. Ces sanctions doivent être effectives, proportionnées et dissuasives. Les États membres informent la Commission, au plus tard le 17 octobre 2024 du régime ainsi déterminé et des mesures ainsi prises, de même que, sans retard, de toute modification apportée ultérieurement à ce régime ou à ces mesures. » L'article 22 ne fixe aucun montant d'amende.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 22 (régime national de sanctions)" },
    sources: ["cer-dir"],
    tags: ["contrôle", "sanction", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : france (transposition en cours, a verifier)
  // --------------------------------------------------------------------------
  {
    id: "cer-fr-loi",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "cer",
    themeId: "france",
    title: "Transposition française : Titre I du projet de loi « résilience » (en cours)",
    short:
      "La France transpose CER dans le Titre I du projet de loi « relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité » (le Titre II transpose NIS2, le Titre III le volet financier). Au 12 juin 2026, cette loi n'est pas promulguée et aucun décret n'est paru : l'échéance de transposition du 17 octobre 2024 est dépassée.",
    elementDeLangage:
      "« CER devait être transposée pour le 17 octobre 2024. En France, le Titre I de la loi résilience s'en charge, mais la loi n'est toujours pas promulguée : rien n'est exigible à ce jour au titre de CER. »",
    detail:
      "Chronologie au 12 juin 2026 : le projet de loi « relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité » porte la transposition de la directive CER dans son Titre I (NIS2 au Titre II, volet financier au Titre III). Présenté en Conseil des ministres le 15 octobre 2024, adopté en première lecture par le Sénat le 12 mars 2025, voté en commission spéciale à l'Assemblée nationale le 10 septembre 2025, il n'est ni adopté définitivement ni promulgué, et aucun décret d'application n'existe. L'échéance de transposition fixée par la directive (17 octobre 2024, art. 26) est donc dépassée. Statut à vérifier avant tout usage.",
    exigence: { level: "conseille", note: "statut au 12 juin 2026, à vérifier (loi non promulguée)" },
    sources: ["loi-resilience", "senat-rap"],
    tags: ["France", "à vérifier"],
  },
  {
    id: "cer-fr-saiv",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "cer",
    themeId: "france",
    title: "CER et le dispositif SAIV (OIV/PIV) : une évolution à venir, rien à présumer",
    short:
      "Le dispositif français existant le plus proche de CER est le SAIV (sécurité des activités d'importance vitale) du code de la défense, avec ses OIV et points d'importance vitale. La loi « résilience » doit le faire évoluer pour transposer CER, mais tant qu'elle n'est pas promulguée, aucune équivalence n'est établie : un OIV n'est pas automatiquement une « entité critique » au sens de CER, et le périmètre futur reste à vérifier.",
    elementDeLangage:
      "« OIV et entité critique, ce n'est pas la même chose : le SAIV est le cousin français de CER, et la loi résilience doit organiser le passage de l'un à l'autre. Tant qu'elle n'est pas promulguée, on ne présume de rien. »",
    detail:
      "Le dispositif SAIV (code de la défense, art. L.1332-1 et suivants : opérateurs d'importance vitale, points d'importance vitale) organise déjà en France la protection des activités indispensables à la vie de la Nation, sous le pilotage du SGDSN. Le Titre I du projet de loi « résilience » doit faire évoluer ce dispositif pour transposer la directive CER. Au 12 juin 2026, la loi n'étant pas promulguée, la correspondance exacte entre les notions (OIV / entité critique, PIV / infrastructure critique), les seuils et le calendrier de désignation ne sont pas connus : tout rapprochement précis serait spéculatif, à vérifier dans les textes à paraître.",
    exigence: { level: "conseille", note: "articulation SAIV / CER à vérifier (textes de transposition à paraître)" },
    sources: ["sgdsn-saiv", "loi-resilience", "senat-rap"],
    tags: ["France", "SAIV", "idée reçue", "à vérifier"],
  },
];
