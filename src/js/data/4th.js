dataSetVersion = "4th"; // Change this when creating a new data set version
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter Limited/Cinfes/Permanent SSRs",
    key: "Year",
    tooltip: "Check this to include and further filter some of the limited sets.",
    checked: true,
    sub: [
      { name: "Year 1 Limited SSRs (24)", key: "Y1" },
      { name: "Year 2 Limited SSRs (24)", key: "Y2" },
      { name: "Year 3 Limited SSRs (24)", key: "Y3" },
      { name: "Year 4 Limited SSRs (27)", key: "Y4" },
      { name: "Year 5 Limited SSRs (36)", key: "Y5" },
      { name: "Year 6 Limited SSRs (3)",  key: "Y6" },
      { name: "Cinderella Festival SSRs (40)", key: "FES"},
      { name: "Permanent SSRs (223)", key: "PERM"},
    ]
  },
 {
    name: "Filter by type",
    key: "Type",
    tooltip: "Keep unchecked if you want all three types.",
    checked: false,
    sub: [
      { name: "Cute", key: "CUTE" },
      { name: "Cool", key: "COOL" },
      { name: "Passion", key: "PASS" }
    ]
  },
    {
    name: "Filter by availability in the 2021 Anniversary Limited Ticket",
    key: "Ticket",
    tooltip: "Check this if you only want to see SSRs that will be in the limited ticket.",
    checked: false,
    sub: [
      { name: "Limited Ticket SSRs", key: "TIX" },   
    ]
  },
 {
    name: "Filter by skill",
    key: "Skill",
    tooltip: "Keep unchecked if you want all skills.",
    checked: false,
    sub: [
      { name: "Score Bonus", key: "SU" },
      { name: "Overload", key: "OL" },
      { name: "Concentration", key: "CONC" },
      { name: "Hold Act", key: "HA" },
      { name: "Flick Act", key: "FA" },
      { name: "Slide Act", key: "SA" },
      { name: "Alternate", key: "ALT" },
      { name: "Combo Bonus", key: "CU" },
      { name: "All Rounder", key: "AR" },
      { name: "Healer", key: "HEAL" },
      { name: "Life Sparkle", key: "LS" },
      { name: "Focus", key: "FOCUS" },
      { name: "Coordinate", key: "COORD" },
      { name: "Ensemble", key: "ENS" },
      { name: "Resonance", key: "RESO" },
      { name: "Charm", key: "CHARM" },
      { name: "Symphony", key: "SYM" },
      { name: "Skill Boost", key: "SB" },
      { name: "Perfect Support", key: "PERF" },
      { name: "Tuning", key: "TUNE" },
      { name: "Misc.", key: "MISC" },
   
    ]
  },
];

dataSet[dataSetVersion].characterData = [
    {
    name: "Uzuki Shimamura (Cinfes)",
    img: "LXucE8c.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
    {
    name: "Rin Shibuya (Cinfes)",
    img: "VRaWRkB.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
    {
    name: "Mio Honda (Cinfes)",
    img: "2dgPfgQ.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
    {
    name: "Sachiko Koshimizu (Cinfes)",
    img: "xu2mLJn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
    {
    name: "Kaede Takagaki (Cinfes)",
    img: "NhYQ6fU.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
    {
    name: "Mika Jougasaki (Cinfes)",
    img: "dIvOPhW.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
    {
    name: "Nana Abe (Cinfes)",
    img: "fG3DSx6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
    {
    name: "Syuko Shiomi (Cinfes)",
    img: "vEzlMfp.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
    {
    name: "Yui Ohtsuki (Cinfes)",
    img: "ZmlBJYx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
    {
    name: "Kanade Hayami (Cinfes)",
    img: "zbeYz3R.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["SB"]
    }
  },
    {
    name: "Miku Maekawa (Cinfes)",
    img: "7lp2sCV.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["SB"]
    }
  },
    {
    name: "Airi Totoki (Cinfes)",
    img: "iu74AZg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["SB"]
    }
  },
    {
    name: "Anastasia (Cinfes)",
    img: "6JykxV8.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["SB"]
    }
  },
    {
    name: "Anzu Futaba (Cinfes)",
    img: "jy1Lfu7.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["SB"]
    }
  },
    {
    name: "Kirari Moroboshi (Cinfes)",
    img: "rvQNJr6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["SB"]
    }
  },
    {
    name: "Shiki Ichinose (Cinfes)",
    img: "BPLVxdg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Ranko Kanzaki (Cinfes)",
    img: "mmtz2W1.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Yoshino Yorita (Cinfes)",
    img: "X6xStyb.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Yuuki Otokura (Cinfes)",
    img: "shrkvUx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["SB"]
    }
  },
    {
    name: "Nao Kamiya (Cinfes)",
    img: "vNvrAJM.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Shin Sato (Cinfes)",
    img: "E43DLl5.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Chieri Ogata (Cinfes)",
    img: "KiBy6g2.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Miria Akagi (Cinfes)",
    img: "EqXg62P.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["SB"]
    }
  },
    {
    name: "Arisu Tachibana (Cinfes)",
    img: "IPkicuO.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Miho Kohinata (Cinfes)",
    img: "U528OJA.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Yumi Aiba (Cinfes)",
    img: "u8RN5K3.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CHARM"]
    }
  },
    {
    name: "Fumika Sagisawa (Cinfes)",
    img: "7pXYdE0.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["SB"]
    }
  },
    {
    name: "Karen Hojo (Cinfes)",
    img: "aC7LdDG.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["RESO"]
    }
  },
    {
    name: "Hinako Kita (Cinfes)",
    img: "vWIpKrC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["RESO"]
    }
  },
    {
    name: "Sae Kobayakawa (Cinfes)",
    img: "19PC1pC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["RESO"]
    }
  },
    {
    name: "Asuka Ninomiya (Cinfes)",
    img: "Rc5vRfn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["RESO"]
    }
  },
    {
    name: "Rika Jougasaki (Cinfes)",
    img: "ymIRq4X.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["SYM"]
    }
  },
    {
    name: "Momoka Sakurai (Cinfes)",
    img: "OZta0HI.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["SYM"]
    }
  },
    {
    name: "Nina Ichihara (Cinfes)",
    img: "l0irKNt.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["RESO"]
    }
  },{
    name: "Minami Nitta (Cinfes)",
    img: "EqXcuSj.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["SYM"]
    }
  },{
    name: "Frederica Miyamoto (Cinfes)",
    img: "JSSnp3C.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["RESO"]
    }
  },{
    name: "Aiko Takamori (Cinfes)",
    img: "j4TxzXD.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["SYM"]
    }
  },{
    name: "Hajime Fujiwara (Cinfes)",
    img: "6dFPPYm.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["SYM"]
    }
  },{
    name: "Riamu Yumemi (Cinfes)",
    img: "znxGFQV.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["RESO"]
    }
  },{
    name: "Mayu Sakuma (Cinfes)",
    img: "svaAH60.png",
    opts: {
      Year: [ "FES" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["SYM"]
    }
  },
    //END OF FES SSR START OF LIM SSR
  {
    name: "Kanako Mimura (Sweet Halloween)",
    img: "nzDLiwM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Airi Totoki (Sweet Halloween)",
    img: "TiqbK15.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Chieri Ogata (Cozy Onsen)",
    img: "mV5wFFm.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Riina Tada (Cozy Onsen)",
    img: "O8UT8e0.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Anastasia (Christmas Present)",
    img: "47vJ6OM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Akane Hino (Christmas Present)",
    img: "X5F9ur9.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Nana Abe (Happy New Year)",
    img: "qfF9rDf.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Mika Jougasaki (Happy New Year)",
    img: "n4ckIck.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },
  {
    name: "Miria Akagi (Valentine's Day)",
    img: "CSe8kli.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Mizuki Kawashima (Valentine's Day)",
    img: "4FROae4.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },
  {
    name: "Kaede Takagaki (Night Time)",
    img: "12wIG5N.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Miho Kohinata (Night Time)",
    img: "nJ1Kwwh.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },
  {
    name: "Momoka Sakurai (After School Time)",
    img: "OI8B9HI.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Takumi Mukai (After School Time)",
    img: "IqZVTtp.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Natsuki Kimura (Exciting Travel)",
    img: "ClDaJNn.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Arisu Tachibana (Exciting Travel)",
    img: "Tjymizy.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Ranko Kanzaki (Bridal Story)",
    img: "9BBeBYq.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Miku Maekawa (Bridal Story)",
    img: "Pz14cWo.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Anzu Futaba (Beginning Summer)",
    img: "jsCXlRl.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Yui Ohtsuki (Beginning Summer)",
    img: "Y4jem8k.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Kirari Moroboshi (Enjoy Summer)",
    img: "U9xMpbK.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Minami Nitta (Enjoy Summer)",
    img: "KAj1vym.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
  {
    name: "Fumika Sagisawa (1st Anniversary Party)",
    img: "2t9UBlt.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Shiki Ichinose (1st Anniversary Party)",
    img: "oE3oy6y.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
  {
    name: "Mayu Sakuma (Happy Halloween)",
    img: "kHf5IpY.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Syoko Hoshi (Happy Halloween)",
    img: "p6YJSZ0.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
  {
    name: "Aiko Takamori (Steamy Onsen)",
    img: "sseJwxw.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Karen Hojo (Steamy Onsen)",
    img: "rLQAQE7.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Nao Kamiya (Holy Night)",
    img: "5bEWEYq.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Frederica Miyamoto (Holy Night)",
    img: "ihfTgR4.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
  {
    name: "Sae Kobayakawa (Dreamy Kimono)",
    img: "p8AIpvm.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Yoshino Yorita (Dreamy Kimono)",
    img: "schQdcG.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
  {
    name: "Yumi Aiba (Peaceful Valentine)",
    img: "N0CS9R2.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["CU"]
    }
  },
  {
    name: "Asuka Ninomiya (Peaceful Valentine)",
    img: "HGLCIZz.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
  {
    name: "Miyu Mifune (Enjoy Night)",
    img: "kXp3AW1.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["CU"]
    }
  },
  {
    name: "Kyoko Igarashi (Enjoy Night)",
    img: "ipXUfZj.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["CU"]
    }
  },
  {
    name: "Yuuki Otokura (Sparkling Uniform Girls)",
    img: "yi3AaaB.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Rika Jougasaki (Sparkling Uniform Girls)",
    img: "XZxOUdQ.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
  {
    name: "Yuki Himekawa (Exciting Tour)",
    img: "F50r2xH.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Koume Shirasaka (Exciting Tour)",
    img: "V4wcjMO.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
  {
    name: "Rin Shibuya (Bridal Session)",
    img: "OBkQVRT.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Karin Domyoji (Bridal Session)",
    img: "K8HUE3w.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
  {
    name: "Sachiko Koshimizu (Yukata Party)",
    img: "fEoFG9X.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Shizuku Oikawa (Yukata Party)",
    img: "LDOYFs9.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Syuko Shiomi (Lovely Summer Time)",
    img: "6V6ouTt.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Yuka Nakano (Lovely Summer Time)",
    img: "H4VlINd.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Shin Sato (2nd Anniversary Party)",
    img: "DUD6Mfn.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Nono Morikubo (2nd Anniversary Party)",
    img: "zaumTvv.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Uzuki Shimamura (Cosplay Party)",
    img: "Oruh79y.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Nina Ichihara (Cosplay Party)",
    img: "TFMTgwd.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Kanade Hayami (Calming Onsen Vacation)",
    img: "6X5crkv.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Yuko Hori (Calming Onsen Vacation)",
    img: "iMI9imE.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
  {
    name: "Mio Honda (Happy Christmas)",
    img: "gcQ3G70.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Chieri Ogata (Happy Christmas)",
    img: "3CbnULe.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
  {
    name: "Kako Takafuji (New Year's Shrine Visit)",
    img: "9ybSb05.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["MISC"]
    }
  },
    {
    name: "Kanako Mimura (New Year's Shrine Visit)",
    img: "XW7Xnx9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
  {
    name: "Miho Kohinata (Valentine Time)",
    img: "qVHmJIO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Yuzu Kitami (Valentine Time)",
    img: "RkSHSfO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
  {
    name: "Miria Akagi (Sparkling Kids Model)",
    img: "D1KtkSn.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Chie Sasaki (Sparkling Kids Model)",
    img: "vi3iKqS.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
  {
    name: "Riina Tada (After School Friends)",
    img: "cu1KMQ5.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
    {
    name: "Hiromi Seki (After School Friends)",
    img: "u3oeN6G.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
  {
    name: "Mayu Sakuma (Extreme Circus Show)",
    img: "7E4jtwT.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Tomoe Murakami (Extreme Circus Show)",
    img: "q2pCh0o.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
  {
    name: "Sanae Katagiri (Bridal Situation)",
    img: "0oNeGHV.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Minami Nitta (Bridal Situation)",
    img: "JnZYpnx.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Fumika Sagisawa (Tanabata Yukata)",
    img: "HycWI7U.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Mirei Hayasaka (Tanabata Yukata)",
    img: "SfsrY0A.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
  {
    name: "Atsumi Munakata (Summer-Colored Poolside)",
    img: "ObrMCSy.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Yumi Aiba (Summer-Colored Poolside)",
    img: "xVPD5nB.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
  {
    name: "Karen Hojo (3rd Anniversary Party)",
    img: "1RCumqm.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
    {
    name: "Aiko Takamori (3rd Anniversary Party)",
    img: "h2UZ0V9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Kirari Moroboshi (Halloween Witches)",
    img: "1ZzWdxk.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Sachiko Koshimizu (Halloween Witches)",
    img: "Ve4WH4B.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
  {
    name: "Frederica Miyamoto (Open-Air Onsen)",
    img: "b6rlAq1.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Asuka Ninomiya (Open-Air Onsen)",
    img: "l4wKshK.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
  {
    name: "Miyu Mifune (Merry X'mas Present)",
    img: "ynL8MOx.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Rika Jougasaki (Merry X'mas Present)",
    img: "8Q5xevY.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
  {
    name: "Eve Santaclaus (Miracle Holy Night)",
    img: "pU15ypw.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["MISC"]
    }
  },
    {
    name: "Takumi Mukai (New Year Fire Dance)",
    img: "LtcJrqo.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
  {
    name: "Kaede Takagaki (New Year Fire Dance)",
    img: "nRL3BmW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["HEAL"]
    }
  },
    {
    name: "Haru Yuki (Sweet & Dream)",
    img: "bcfoWzO.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Mayu Sakuma (Sweet & Dream)",
    img: "lclTLdM.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["HEAL"]
    }
  },
    {
    name: "Yui Ohtsuki (Private Resort)",
    img: "EVvuv1Z.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Kanade Hayami (Private Resort)",
    img: "gOFVJhU.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
    {
    name: "Anzu Futaba (Fresh School)",
    img: "t4iljXy.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
  {
    name: "Nina Ichihara (Fresh School)",
    img: "tIac7SW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
    {
    name: "Hajime Fujiwara (Girls' Challenge)",
    img: "A5yNmuA.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
  {
    name: "Kanako Mimura (Girls' Challenge)",
    img: "3cEd9DS.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["FOCUS"]
    }
  },
    {
    name: "Mika Jougasaki (Bridal Photo)",
    img: "MrvLRQj.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["FOCUS"]
    }
  },
  {
    name: "Frederica Miyamoto (Bridal Photo)",
    img: "yvsv9Uc.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
    {
    name: "Kako Takafuji (Tanabata Festival)",
    img: "NENV1m7.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["ENS"]
    }
  },
  {
    name: "Yuko Hori (Tanabata Festival)",
    img: "3iQpDQn.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
    {
    name: "Yuuki Otokura (SUN 3 Summer)",
    img: "F5n1NNW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["ENS"]
    }
  },
  {
    name: "Yuki Himekawa (SUN 3 Summer)",
    img: "izCNPWi.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["HEAL"]
    }
  },
    {
    name: "Miyu Mifune (SUN 3 Summer)",
    img: "tIntPZJ.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
  {
    name: "Ranko Kanzaki (4th Anniversary Party)",
    img: "hGpEQ0H.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
    {
    name: "Nana Abe (4th Anniversary Party)",
    img: "UUnChlX.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["HEAL"]
    }
  },
  {
    name: "Akane Hino (4th Anniversary Party)",
    img: "azOEXWf.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["ENS"]
    }
  },
    {
    name: "Hikaru Nanjo (Halloween Mode)",
    img: "hgrU53n.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["LS"]
    }
  },
    {
    name: "Nao Kamiya (Halloween Mode)",
    img: "eCb0LAp.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["ENS"]
    }
  },
    {
    name: "Noriko Shiina (Halloween Mode)",
    img: "xaWXIqJ.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
    {
    name: "Shiki Ichinose (Calming Autumn Onsen)",
    img: "5RYUkbb.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["LS"]
    }
  },
    {
    name: "Syoko Hoshi (Calming Autumn Onsen)",
    img: "tUUtCmw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["ENS"]
    }
  },
    {
    name: "Tsukasa Kiryu (Calming Autumn Onsen)",
    img: "xUdl5Iw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["OL"]
    }
  },
    {
    name: "Koume Shirasaka (Heartfelt Christmas Gift)",
    img: "1iIQcOv.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ], Skill: ["HEAL"]
    }
  },
    {
    name: "Kyoko Igarashi (Heartfelt Christmas Gift)",
    img: "F7zDpbw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ], Skill: ["ENS"]
    }
  },
    {
    name: "Yuzu Kitami (Heartfelt Christmas Gift)",
    img: "cuAFLvc.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ], Skill: ["OL"]
    }
  },
    {
    name: "Tomoe Murakami (New Years Kimono)",
    img: "aEezfnQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["HEAL"]
    }
  },
    {
    name: "Nono Morikubo (New Years Kimono)",
    img: "crFkmMO.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
    {
    name: "Miku Maekawa (New Years Kimono)",
    img: "2Et8OmN.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ENS"]
    }
  },
    {
    name: "Hina Araki (Valentine Girls)",
    img: "a1VMbPr.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["LS"]
    }
  },
    {
    name: "Yukari Mizumoto (Valentine Girls)",
    img: "8MPRX4s.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },
    {
    name: "Shin Sato (Valentine Girls)",
    img: "XuZQDUb.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ENS"]
    }
  },
    {
    name: "Nagi Hisakawa (Brand New Story)",
    img: "0nqsJCx.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ALT"]
    }
  },{
    name: "Chiyo Shirayuki (Brand New Story)",
    img: "0QkFrlU.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["OL"]
    }
  },{
    name: "Arisu Tahchibana (Brand New Story)",
    img: "2jvt5WM.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["ENS"]
    }
  },{
    name: "Hayate Hisakawa (Springtime After School)",
    img: "THAtB5X.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["HEAL"]
    }
  },{
    name: "Yoshino Yorita (Springtime After School)",
    img: "2IR13Qv.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ENS"]
    }
  },{
    name: "Mirei Hayasaka (Springtime After School)",
    img: "UO0sGtQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ALT"]
    }
  },{
    name: "Uzuki Shimamura (New Adventure)",
    img: "XcwvR8i.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ENS"]
    }
  },{
    name: "Rin Shibuya (New Adventure)",
    img: "KhAKq2E.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["ENS"]
    }
  },{
    name: "Mio Honda (New Adventure)",
    img: "pGtLApC.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ENS"]
    }    
  },{
    name: "Chitose Kurosaki (Pure Bridal)",
    img: "uxTf4MN.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ENS"]
    }    
  },{
    name: "Eve Santaclaus (Pure Bridal)",
    img: "eMjlINt.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["CU"]
    }    
  },{ 
    name: "Mizuki Kawashima (Pure Bridal)",
    img: "m8Yi84v.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["ALT"]
    }    
  },{
    name: "Akira Sunazuka (Tanabata☆Summer)",
    img: "vGOEEI4.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["CU"]
    }    
  },{
    name: "Kozue Yusa (Tanabata☆Summer)",
    img: "0qngH6p.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["HEAL"]
    }    
  },{
    name: "Natalia (Tanabata☆Summer)",
    img: "QSeDE2I.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ALT"]
    }    
  },{
    name: "Akari Tsujino (Fruitful Summer Ocean)",
    img: "QFsxZe3.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ALT"]
    }    
  },{
    name: "Airi Totoki (Fruitful Summer Ocean)",
    img: "aHOw0rF.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ENS"]
    }    
  },{
    name: "Kako Takafuji (Fruitful Summer Ocean)",
    img: "u55aqoY.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["OL"]
    }    
  },{
    name: "Anzu Futaba (5th Anniversary in Summer)",
    img: "iuah5Mq.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ALT"]
    }    
  },{
    name: "Mika Jougasaki (5th Anniversary in Summer)",
    img: "GdbrZ4D.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["OL"]
    }    
  },{
    name: "Kanade Hayami (5th Anniversary in Summer)",
    img: "IGWhLy7.png",
    opts: {
      Year: [ "Y5" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["ENS"]
    }    
  },{
    name: "Yukimi Sajo (Dreamy Fairytale Halloween)",
    img: "C0z0vdZ.png",
    opts: {
      Year: [ "Y6" ], Ticket: ["TIX"], Type: [ "COOL" ], Skill: ["ALT"]
    }    
  },{
    name: "Chieri Ogata (Dreamy Fairytale Halloween)",
    img: "yez8Wjv.png",
    opts: {
      Year: [ "Y6" ], Ticket: ["TIX"], Type: [ "CUTE" ], Skill: ["ENS"]
    }    
  },{
    name: "Hinako Kita (Dreamy Fairytale Halloween)",
    img: "pA6Txn3.png",
    opts: {
      Year: [ "Y6" ], Ticket: ["TIX"], Type: [ "PASS" ], Skill: ["ALT"]
    }    
  },
    //END OF LIM SSR START OF PERM SSR
    {
    name: "Uzuki Shimamura (1st Perm)",
    img: "QziZV0R.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["PERF"]
    }
  },{
    name: "Rin Shibuya (1st Perm)",
    img: "AlldE1f.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["PERF"]
    }
  },{
    name: "Mio Honda (1st Perm)",
    img: "GdB8gBz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["PERF"]
    }
  },{
    name: "Ranko Kanzaki (Perm)",
    img: "rxlddIF.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Anzu Futaba (Perm)",
    img: "0c8gDqY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Kirari Moroboshi (Perm)",
    img: "tbhkNay.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Miku Maekawa (Perm)",
    img: "SGRNoMd.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Minami Nitta (Perm)",
    img: "cFppCRp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Fumika Sagisawa (Perm)",
    img: "l9FogVj.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Rika Jougasaki (Perm)",
    img: "yFoLQAh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Sachiko Koshimizu (1st Perm)",
    img: "nHywEho.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Nina Ichihara (Perm)",
    img: "tHeyIkw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Kanade Hayami (Perm)",
    img: "B14Z4It.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Yuki Himekawa (1st Perm)",
    img: "H56kMcA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Mayu Sakuma (Perm)",
    img: "PwBAWWG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Shiki Ichinose (Perm)",
    img: "65zPv1w.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Nao Kamiya (Perm)",
    img: "JPJTt86.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Aiko Takamori (Perm)",
    img: "n464rkD.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Karen Hojo (Perm)",
    img: "bSDrfaw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Syoko Hoshi (1st Perm)",
    img: "tPSc5Us.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Sae Kobayakawa (1st Perm)",
    img: "ua4mf2U.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Asuka Ninomiya (Perm)",
    img: "fW8MBPn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Hinako Kita (1st Perm)",
    img: "7V8iAK3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Kyoko Igarashi (1st Perm)",
    img: "2SmaOJI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Koume Shirasaka (Perm)",
    img: "GwX2Ox9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Frederica Miyamoto (Perm)",
    img: "Xg3NStv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Yoshino Yorita (Perm)",
    img: "LYawwNw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Shizuku Oikawa (Perm)",
    img: "jIlsL5e.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Syuko Shiomi (1st Perm)",
    img: "cWiOqZI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Chieri Ogata (Perm)",
    img: "IsNkGjL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Miyu Mifune (Perm)",
    img: "e6CA9wA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Yumi Aiba (Perm)",
    img: "aVA02QX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Yuuki Otokura (Perm)",
    img: "UuRBeBQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Mirei Hayasaka (1st Perm)",
    img: "o0RdsBF.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Haruna Kamijo (1st Perm)",
    img: "a3YAbyo.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Airi Totoki (1st Perm)",
    img: "jSp8kBz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Yuko Hori (Perm)",
    img: "cSmqq1S.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Miho Kohinata (Perm)",
    img: "IT5oPXX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Anastasia (1st Perm)",
    img: "mbObFYL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Ayame Hamaguchi (Perm)",
    img: "AfydLFV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Hajime Fujiwara (1st Perm)",
    img: "dAldyC0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Kanako Mimura (Perm)",
    img: "XTnlTaX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Momoka Sakurai (1st Perm)",
    img: "bqdQnmi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Shin Sato (Perm)",
    img: "28AOBug.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Nono Morikubo (1st Perm)",
    img: "WMWCYQC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Kaoru Ryuzaki (1st Perm)",
    img: "eM1i9EB.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Yukari Mizumoto (1st Perm)",
    img: "b5TwDRV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Hina Araki (1st Perm)",
    img: "T56akPE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Miria Akagi (Perm)",
    img: "sTgRT5f.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Makino Yagami (1st Perm)",
    img: "8t5Dz9X.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Yuka Nakano (Perm)",
    img: "hQ2GWu9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Noriko Shiina (Perm)",
    img: "mtlCmVh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Yuzu Kitami (Perm)",
    img: "hd63pSa.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Riina Tada (1st Perm)",
    img: "53L6hOT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Sanae Katagiri (Perm)",
    img: "sCVEbJJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Ryo Matsunaga (Perm)",
    img: "DoS5jUT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Hiromi Seki (1st Perm)",
    img: "Wa5N5rD.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Yukimi Sajo (1st Perm)",
    img: "hirY8bX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Akane Hino (Perm)",
    img: "NGJR5Cp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Rina Fujimoto (Perm)",
    img: "ytJAb5V.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Kozue Yusa (1st Perm)",
    img: "z4rtTUT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Chie Sasaki (Perm)",
    img: "PhkSyuO.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Tomoe Murakami (Perm)",
    img: "tz8T1KC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Natsuki Kimura (Perm)",
    img: "fwXC681.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Atsumi Munakata (Perm)",
    img: "QvfiumV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Aki Yamato (Perm)",
    img: "dBFoGW6.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Tamami Wakiyama (Perm)",
    img: "L0UOYpC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Risa Matoba (1st Perm)",
    img: "AijRUQZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Hotaru Shiragiku (1st Perm)",
    img: "Q9LXBvu.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Emi Namba (1st Perm)",
    img: "FNc5HV4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Mizuki Kawashima (1st Perm)",
    img: "PBqWrXu.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Kana Imai (Perm)",
    img: "vLZ4Cyn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Kaede Takagaki (Perm)",
    img: "W399P7O.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Kotoka Saionji (1st Perm)",
    img: "jTGAAWw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Natalia (1st Perm)",
    img: "XrL4TgQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Arisu Tachibana (Perm)",
    img: "fMbmyBP.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SU"]
    }
  },{
    name: "Sana Miyoshi (Perm)",
    img: "QFkVmTJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Koharu Koga (Perm)",
    img: "crZLSg9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Shinobu Kudo (Perm)",
    img: "LadfSym.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Yui Ohtsuki (Perm)",
    img: "kSHE3CE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SU"]
    }
  },{
    name: "Layla (Perm)",
    img: "QWoWMy1.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Tsukasa Kiryu (1st Perm)",
    img: "nln4cVL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Clarice (Perm)",
    img: "27NAl1J.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SU"]
    }
  },{
    name: "Takumi Mukai (Perm)",
    img: "iSldN3i.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Tokiko Zaizen (Perm)",
    img: "EXUW9tM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Nana Abe (Perm)",
    img: "EKhrZHM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Mutsumi Ujiie (Perm)",
    img: "vbQRJ52.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Izumi Ohishi (Perm)",
    img: "25hUBXh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["PERF"]
    }
  },{
    name: "Mika Jougasaki (Perm)",
    img: "8SBTIaG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Nene Kurihara (Perm)",
    img: "tLr2R4O.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Sakura Muramatsu (Perm)",
    img: "WD6SgTN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["PERF"]
    }
  },{
    name: "Reina Koseki (1st Perm)",
    img: "6SJFKau.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Seira Mizuki (Perm)",
    img: "b4rcon4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Ako Tsuchiya (Perm)",
    img: "AZlzIc9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["PERF"]
    }
  },{
    name: "Haru Yuuki (Perm)",
    img: "FyKkICT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Karin Domyoji (Perm)",
    img: "jdqvRWW.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Ai Togo (Perm)",
    img: "eb2MGpB.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Michiru Ohara (Perm)",
    img: "j8CqWqy.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Meiko Namiki (Perm)",
    img: "kuY9nGZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Akiha Ikebukuro (Perm)",
    img: "8X6sYZb.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Suzuho Ueda (Perm)",
    img: "PTreThS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Noa Takamine (Perm)",
    img: "kD1AF80.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Kiyomi Saejima (Perm)",
    img: "fHj5R4p.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Kyoko Igarashi (2nd Perm)",
    img: "7FFDFGt.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Nanami Asari (Perm)",
    img: "dOD0sFG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Hina Araki (2nd Perm)",
    img: "PbZEOd9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Azuki Momoi (Perm)",
    img: "87Iwx9a.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Hikaru Nanjo (Perm)",
    img: "D8c5okl.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Uzuki Shimamura (2nd Perm)",
    img: "Ya4vywR.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Hinako Kita (2nd Perm)",
    img: "susOvLE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Hajime Fujiwara (2nd Perm)",
    img: "h9LBwoi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Kako Takafuji (2nd Perm)",
    img: "WXku41P.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Miyo Harada (Perm)",
    img: "uyteIwn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Ibuki Komatsu (Perm)",
    img: "dj0KEWI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Syoko Hoshi (2nd Perm)",
    img: "u57TgzY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["COORD"]
    }
  },{
    name: "Sae Kobayakawa (2nd Perm)",
    img: "BiFtQ4T.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Nono Morikubo (2nd Perm)",
    img: "knLzbMP.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Mirei Hayasaka (2nd Perm)",
    img: "6gXP1LM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Anastasia (2nd Perm)",
    img: "J9bOJ6Z.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Rena Hyodo (Perm)",
    img: "22Wl5LI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Syuko Shiomi (2nd Perm)",
    img: "ekLcx4e.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Mai Fukuyama (Perm)",
    img: "N0sqeon.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Mio Honda (2nd Perm)",
    img: "CjwdNVU.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["COORD"]
    }
  },{
    name: "Airi Totoki (2nd Perm)",
    img: "fPeA38T.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Momoka Sakurai (2nd Perm)",
    img: "RNiXWrK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Yume Narumiya (Perm)",
    img: "rzHwuWG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Kumiko Matsuyama (Perm)",
    img: "a1WrULh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Kurumi Ohnuma (Perm)",
    img: "VNRJVTv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Rin Shibuya (2nd Perm)",
    img: "rt56fHA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Kaoru Ryuzaki (2nd Perm)",
    img: "VHHiKAC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Yukari Mizumoto (2nd Perm)",
    img: "bHfGaoe.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Itsuki Manabe (Perm)",
    img: "mtwE0Y4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Riina Tada (2nd Perm)",
    img: "eSEHT39.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Chitose Kurosaki (Perm)",
    img: "SiKVd3Q.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["HA"]
    }
  },{
    name: "Chiyo Shirayuki (Perm)",
    img: "EbhA2sE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["FA"]
    }
  },{
    name: "Chiaki Kurokawa (1st Perm)",
    img: "yh3ycqS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Seika Suzumiya (Perm)",
    img: "b0IIpUn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Hayate Hisakawa (Perm)",
    img: "eMYDpym.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["HA"]
    }
  },{
    name: "Nagi Hisakawa (Perm)",
    img: "7XUzciV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["FA"]
    }
  },{
    name: "Honoka Ayase (Perm)",
    img: "1wXUlJt.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Yukino Aihara (Perm)",
    img: "6E9xcXi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Tomoka Wakabayashi (Perm)",
    img: "GdwXiyT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Hotaru Shiragiku (2nd Perm)",
    img: "sp0pToo.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Satomi Sakakibara (Perm)",
    img: "O7PWhXH.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Mahiro Kitagawa (Perm)",
    img: "I4u2bS0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Mizuki Kawashima (2nd Perm)",
    img: "zZnIYDH.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Akari Tsujino (Perm)",
    img: "10n79Ag.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SA"]
    }
  },{
    name: "Rumi Wakui (Perm)",
    img: "1uWjUXb.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Umi Sugisaka (Perm)",
    img: "ISx9bz6.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Shiori Sena (Perm)",
    img: "IBewhSw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Hiromi Seki (2nd Perm)",
    img: "pJyR5TV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Mary Cochran (Perm)",
    img: "lLh8mmM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Akira Sunazuka (Perm)",
    img: "1bohXQp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["FA"]
    }
  },{
    name: "Yuriko Ohnishi (Perm)",
    img: "CKoEKRy.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Kai Nishijima (Perm)",
    img: "VFvpgGC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Marina Sawada (Perm)",
    img: "MLgpE7F.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Riamu Yumemi (Perm)",
    img: "PCSohiN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["HA"]
    }
  },{
    name: "Tomo Fujii (Perm)",
    img: "UqJeukY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Fuka Asano (Perm)",
    img: "QWIP1e5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Yukimi Sajo (2nd Perm)",
    img: "bLagbpJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SA"]
    }
  },{
    name: "Yuu Ohta (Perm)",
    img: "FuGk2Mi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Makino Yagami (2nd Perm)",
    img: "XnHOpDR.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["HA"]
    }
  },{
    name: "Cathy Graham (Perm)",
    img: "QIq4DQs.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Erika Akanishi (Perm)",
    img: "mSqwqf5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Hitomi Niwa (Perm)",
    img: "W1UYth9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Honami Nishikawa (Perm)",
    img: "OtPaA9z.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Yao Fueifuei (Perm)",
    img: "3jeRsZq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Chinatsu Aikawa (Perm)",
    img: "6Ei8UPV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Ema Senzaki (Perm)",
    img: "SRGXhs3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Saki Yoshioka (Perm)",
    img: "E12KeyN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Kozue Yusa (2nd Perm)",
    img: "QdT6BBx.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["SA"]
    }
  },{
    name: "Shino Hiiragi (Perm)",
    img: "2AddzJ8.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Natalia (2nd Perm)",
    img: "Tnti2R3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SA"]
    }
  },{
    name: "Setsuna Imura (Perm)",
    img: "ZdbsyH7.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Hijiri Mochizuki (Perm)",
    img: "EKsn5Hv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Sora Nonomura (Perm)",
    img: "x9Es7tQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["COORD"]
    }
  },{
    name: "Toko Hattori (Perm)",
    img: "jbU3y05.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Arisa Mochido (Perm)",
    img: "mPpIh8h.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Yasuha Okazaki (Perm)",
    img: "kbhd0XI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Risa Matoba (2nd Perm)",
    img: "4XKkDDI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["FA"]
    }
  },{
    name: "Sarina Matsumoto (Perm)",
    img: "Sa1M12a.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Yoko Saito (Perm)",
    img: "gHsUiJq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["COORD"]
    }
  },{
    name: "Tsubaki Egami (Perm)",
    img: "ubCxcu7.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Saya Matsubara (Perm)",
    img: "NXDNiwz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["HA"]
    }
  },{
    name: "Ayaka Kishibe (Perm)",
    img: "JcEgEnZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Miyuki Yanase (Perm)",
    img: "lGVY3YS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Chika Yokoyama (Perm)",
    img: "yKIBdYX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Kanna Ariura (Perm)",
    img: "tQIdxs5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Hasumi Nagatomi (Perm)",
    img: "LHtBn51.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["TUNE"]
    }
  },{
    name: "Misaki Etou (Perm)",
    img: "lkMELEr.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Chizuru Matsuo (Perm)",
    img: "pOJsiRq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Manami Kiba (Perm)",
    img: "EkU3iwO.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SA"]
    }
  },{
    name: "Miyabi Tsukimiya (Perm)",
    img: "SbYFuuI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["CONC"]
    }
  },{
    name: "Aya Kirino (Perm)",
    img: "s25N8aq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Natsumi Soma (Perm)",
    img: "RizqyV0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Megumi Ijuin (Perm)",
    img: "56KLnEC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["CONC"]
    }
  },{
    name: "Kate (Perm)",
    img: "vMUmSBl.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Shiho Makihara (Perm)",
    img: "phtt6Kr.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["HA"]
    }
  },{
    name: "Wakaba Kusakabe (Perm)",
    img: "pk3kxgS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["FA"]
    }
  },{
    name: "Kiyora Yanagi (Perm)",
    img: "vlYZ55U.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["AR"]
    }
  },{
    name: "Ayuna Hamakawa (Perm)",
    img: "5sD7hgZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["CONC"]
    }
  },{
    name: "Reiko Takahashi (Perm)",
    img: "yzfQCxc.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Yoriko Furusawa (Perm)",
    img: "cLMXmIL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["FA"]
    }
  },{
    name: "Miyako Anzai (Perm)",
    img: "USkoyZO.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Naho Ebihara (Perm)",
    img: "wUMvjkc.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["COORD"]
    }
  },{
    name: "Saori Okuyama (Perm)",
    img: "4NymtbN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Chinami Komuro (Perm)",
    img: "XuRG4II.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Nagisa Aino (Perm)",
    img: "q705y3a.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["AR"]
    }
  },{
    name: "Otoha Umeki (Perm)",
    img: "ezrRjeK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Aoi Syuto (Perm)",
    img: "H2pMa87.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["SA"]
    }
  },{
    name: "Rei Shinohara (Perm)",
    img: "DetQTvK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["AR"]
    }
  },{
    name: "Miu Yagachi (Perm)",
    img: "xjxeKGW.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Misato Manaka (Perm)",
    img: "nIKX8mx.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["HA"]
    }
  },{
    name: "Midori Mizuno (Perm)",
    img: "2aTQ6jk.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Helen (Perm)",
    img: "go2Cqjr.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["MISC"]
    }
  },{
    name: "Sachiko Koshimizu (2nd Perm)",
    img: "uHENLjH.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["FA"]
    }
  },{
    name: "Haruna Kamijo (2nd Perm)",
    img: "Pd84Tq8.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["TUNE"]
    }
  },{
    name: "Reina Koseki (2nd Perm)",
    img: "xb0htKK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },{
    name: "Tsukasa Kiryu (2nd Perm)",
    img: "jzJFCZS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["SA"]
    }
  },{
    name: "Kotoka Saionji (2nd Perm)",
    img: "6nR44yy.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ], Skill: ["COORD"]
    }
  },{
    name: "Yuki Himekawa (2nd Perm)",
    img: "zKjwxIL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["HA"]
    }
  },{
    name: "Chiaki Kurokawa (2nd Perm)",
    img: "KdQ2NVG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ], Skill: ["COORD"]
    }
  },{
    name: "Emi Namba(2nd Perm)",
    img: "qr1g5UK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ], Skill: ["TUNE"]
    }
  },
  
];
