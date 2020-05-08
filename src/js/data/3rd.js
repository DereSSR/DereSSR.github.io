dataSetVersion = "3rd"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Year 5 Limited SSRs (24)", key: "Y5" },
      { name: "Cinderella Festival SSRs (35)", key: "FES"},
      { name: "Permanent SSRs (197)", key: "PERM"},
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
    name: "Filter by availability in the 2020 Anniversary Limited Ticket",
    key: "Ticket",
    tooltip: "Check this if you only want to see SSRs that will be in the limited ticket.",
    checked: false,
    sub: [
      { name: "Limited Ticket SSRs", key: "TIX" },   
    ]
  },
];

dataSet[dataSetVersion].characterData = [
    {
    name: "Uzuki Shimamura (Cinfes)",
    img: "LXucE8c.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Rin Shibuya (Cinfes)",
    img: "VRaWRkB.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Mio Honda (Cinfes)",
    img: "2dgPfgQ.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Sachiko Koshimizu (Cinfes)",
    img: "xu2mLJn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Kaede Takagaki (Cinfes)",
    img: "NhYQ6fU.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Mika Jougasaki (Cinfes)",
    img: "dIvOPhW.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Nana Abe (Cinfes)",
    img: "fG3DSx6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Syuko Shiomi (Cinfes)",
    img: "vEzlMfp.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Yui Ohtsuki (Cinfes)",
    img: "ZmlBJYx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Kanade Hayami (Cinfes)",
    img: "zbeYz3R.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Miku Maekawa (Cinfes)",
    img: "7lp2sCV.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Airi Totoki (Cinfes)",
    img: "iu74AZg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Anastasia (Cinfes)",
    img: "6JykxV8.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Anzu Futaba (Cinfes)",
    img: "jy1Lfu7.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Kirari Moroboshi (Cinfes)",
    img: "rvQNJr6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Shiki Ichinose (Cinfes)",
    img: "BPLVxdg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Ranko Kanzaki (Cinfes)",
    img: "mmtz2W1.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Yoshino Yorita (Cinfes)",
    img: "X6xStyb.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Yuuki Otokura (Cinfes)",
    img: "shrkvUx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Nao Kamiya (Cinfes)",
    img: "vNvrAJM.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Shin Sato (Cinfes)",
    img: "E43DLl5.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Chieri Ogata (Cinfes)",
    img: "KiBy6g2.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Miria Akagi (Cinfes)",
    img: "EqXg62P.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Arisu Tachibana (Cinfes)",
    img: "IPkicuO.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Miho Kohinata (Cinfes)",
    img: "U528OJA.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Yumi Aiba (Cinfes)",
    img: "u8RN5K3.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Fumika Sagisawa (Cinfes)",
    img: "7pXYdE0.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Karen Hojo (Cinfes)",
    img: "aC7LdDG.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Hinako Kita (Cinfes)",
    img: "vWIpKrC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Sae Kobayakawa (Cinfes)",
    img: "19PC1pC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Asuka Ninomiya (Cinfes)",
    img: "Rc5vRfn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Rika Jougasaki (Cinfes)",
    img: "ymIRq4X.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Momoka Sakurai (Cinfes)",
    img: "OZta0HI.png",
    opts: {
      Year: [ "FES" ], Ticket: [], Type: [ "CUTE" ]
    }
  },
    {
    name: "Nina Ichihara (Cinfes)",
    img: "l0irKNt.png",
    opts: {
      Year: [ "FES" ], Ticket: [], Type: [ "PASS" ]
    }
  },{
    name: "Minami Nitta (Cinfes)",
    img: "EqXcuSj.png",
    opts: {
      Year: [ "FES" ], Ticket: [], Type: [ "COOL" ]
    }
  }, //END OF FES SSR START OF LIM SSR
  {
    name: "Kanako Mimura (Sweet Halloween)",
    img: "nzDLiwM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Airi Totoki (Sweet Halloween)",
    img: "TiqbK15.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Chieri Ogata (Cozy Onsen)",
    img: "mV5wFFm.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Riina Tada (Cozy Onsen)",
    img: "O8UT8e0.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Anastasia (Christmas Present)",
    img: "47vJ6OM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Akane Hino (Christmas Present)",
    img: "X5F9ur9.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Nana Abe (Happy New Year)",
    img: "qfF9rDf.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Mika Jougasaki (Happy New Year)",
    img: "n4ckIck.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Miria Akagi (Valentine's Day)",
    img: "CSe8kli.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Mizuki Kawashima (Valentine's Day)",
    img: "4FROae4.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Kaede Takagaki (Night Time)",
    img: "12wIG5N.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Miho Kohinata (Night Time)",
    img: "nJ1Kwwh.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Momoka Sakurai (After School Time)",
    img: "OI8B9HI.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Takumi Mukai (After School Time)",
    img: "IqZVTtp.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Natsuki Kimura (Exciting Travel)",
    img: "ClDaJNn.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Arisu Tachibana (Exciting Travel)",
    img: "Tjymizy.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Ranko Kanzaki (Bridal Story)",
    img: "9BBeBYq.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Miku Maekawa (Bridal Story)",
    img: "Pz14cWo.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Anzu Futaba (Beginning Summer)",
    img: "jsCXlRl.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Yui Ohtsuki (Beginning Summer)",
    img: "Y4jem8k.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Kirari Moroboshi (Enjoy Summer)",
    img: "U9xMpbK.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Minami Nitta (Enjoy Summer)",
    img: "KAj1vym.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Fumika Sagisawa (1st Anniversary Party)",
    img: "2t9UBlt.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Shiki Ichinose (1st Anniversary Party)",
    img: "oE3oy6y.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Mayu Sakuma (Happy Halloween)",
    img: "kHf5IpY.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Syoko Hoshi (Happy Halloween)",
    img: "p6YJSZ0.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Aiko Takamori (Steamy Onsen)",
    img: "sseJwxw.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Karen Hojo (Steamy Onsen)",
    img: "rLQAQE7.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Nao Kamiya (Holy Night)",
    img: "5bEWEYq.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Frederica Miyamoto (Holy Night)",
    img: "ihfTgR4.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Sae Kobayakawa (Dreamy Kimono)",
    img: "p8AIpvm.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Yoshino Yorita (Dreamy Kimono)",
    img: "schQdcG.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Yumi Aiba (Peaceful Valentine)",
    img: "N0CS9R2.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Asuka Ninomiya (Peaceful Valentine)",
    img: "HGLCIZz.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Miyu Mifune (Enjoy Night)",
    img: "kXp3AW1.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Kyoko Igarashi (Enjoy Night)",
    img: "ipXUfZj.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Yuuki Otokura (Sparkling Uniform Girls)",
    img: "yi3AaaB.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Rika Jougasaki (Sparkling Uniform Girls)",
    img: "XZxOUdQ.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Yuki Himekawa (Exciting Tour)",
    img: "F50r2xH.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Koume Shirasaka (Exciting Tour)",
    img: "V4wcjMO.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Rin Shibuya (Bridal Session)",
    img: "OBkQVRT.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Karin Domyoji (Bridal Session)",
    img: "K8HUE3w.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Sachiko Koshimizu (Yukata Party)",
    img: "fEoFG9X.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Shizuku Oikawa (Yukata Party)",
    img: "LDOYFs9.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Syuko Shiomi (Lovely Summer Time)",
    img: "6V6ouTt.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Yuka Nakano (Lovely Summer Time)",
    img: "H4VlINd.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Shin Sato (2nd Anniversary Party)",
    img: "DUD6Mfn.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Nono Morikubo (2nd Anniversary Party)",
    img: "zaumTvv.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Uzuki Shimamura (Cosplay Party)",
    img: "Oruh79y.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Nina Ichihara (Cosplay Party)",
    img: "TFMTgwd.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Kanade Hayami (Calming Onsen Vacation)",
    img: "6X5crkv.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Yuko Hori (Calming Onsen Vacation)",
    img: "iMI9imE.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Mio Honda (Happy Christmas)",
    img: "gcQ3G70.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Chieri Ogata (Happy Christmas)",
    img: "3CbnULe.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Kako Takafuji (New Year's Shrine Visit)",
    img: "9ybSb05.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Kanako Mimura (New Year's Shrine Visit)",
    img: "XW7Xnx9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Miho Kohinata (Valentine Time)",
    img: "qVHmJIO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Yuzu Kitami (Valentine Time)",
    img: "RkSHSfO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Miria Akagi (Sparkling Kids Model)",
    img: "D1KtkSn.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Chie Sasaki (Sparkling Kids Model)",
    img: "vi3iKqS.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Riina Tada (After School Friends)",
    img: "cu1KMQ5.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Hiromi Seki (After School Friends)",
    img: "u3oeN6G.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Mayu Sakuma (Extreme Circus Show)",
    img: "7E4jtwT.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Tomoe Murakami (Extreme Circus Show)",
    img: "q2pCh0o.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Sanae Katagiri (Bridal Situation)",
    img: "0oNeGHV.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Minami Nitta (Bridal Situation)",
    img: "JnZYpnx.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Fumika Sagisawa (Tanabata Yukata)",
    img: "HycWI7U.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Mirei Hayasaka (Tanabata Yukata)",
    img: "SfsrY0A.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Atsumi Munakata (Summer-Colored Poolside)",
    img: "ObrMCSy.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Yumi Aiba (Summer-Colored Poolside)",
    img: "xVPD5nB.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Karen Hojo (3rd Anniversary Party)",
    img: "1RCumqm.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Aiko Takamori (3rd Anniversary Party)",
    img: "h2UZ0V9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Kirari Moroboshi (Halloween Witches)",
    img: "1ZzWdxk.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Sachiko Koshimizu (Halloween Witches)",
    img: "Ve4WH4B.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Frederica Miyamoto (Open-Air Onsen)",
    img: "b6rlAq1.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Asuka Ninomiya (Open-Air Onsen)",
    img: "l4wKshK.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Miyu Mifune (Merry X'mas Present)",
    img: "ynL8MOx.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Rika Jougasaki (Merry X'mas Present)",
    img: "8Q5xevY.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Eve Santaclaus (Miracle Holy Night)",
    img: "pU15ypw.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Takumi Mukai (New Year Fire Dance)",
    img: "LtcJrqo.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Kaede Takagaki (New Year Fire Dance)",
    img: "nRL3BmW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Haru Yuki (Sweet & Dream)",
    img: "bcfoWzO.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Mayu Sakuma (Sweet & Dream)",
    img: "lclTLdM.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Yui Ohtsuki (Private Resort)",
    img: "EVvuv1Z.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Kanade Hayami (Private Resort)",
    img: "gOFVJhU.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Anzu Futaba (Fresh School)",
    img: "t4iljXy.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Nina Ichihara (Fresh School)",
    img: "tIac7SW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Hajime Fujiwara (Girls' Challenge)",
    img: "A5yNmuA.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Kanako Mimura (Girls' Challenge)",
    img: "3cEd9DS.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Mika Jougasaki (Bridal Photo)",
    img: "MrvLRQj.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
  {
    name: "Frederica Miyamoto (Bridal Photo)",
    img: "yvsv9Uc.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Kako Takafuji (Tanabata Festival)",
    img: "NENV1m7.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Yuko Hori (Tanabata Festival)",
    img: "3iQpDQn.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Yuuki Otokura (SUN 3 Summer)",
    img: "F5n1NNW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Yuki Himekawa (SUN 3 Summer)",
    img: "izCNPWi.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Miyu Mifune (SUN 3 Summer)",
    img: "tIntPZJ.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
  {
    name: "Ranko Kanzaki (4th Anniversary Party)",
    img: "hGpEQ0H.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Nana Abe (4th Anniversary Party)",
    img: "UUnChlX.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
  {
    name: "Akane Hino (4th Anniversary Party)",
    img: "azOEXWf.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Hikaru Nanjo (Halloween Mode)",
    img: "hgrU53n.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Nao Kamiya (Halloween Mode)",
    img: "eCb0LAp.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Noriko Shiina (Halloween Mode)",
    img: "xaWXIqJ.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Shiki Ichinose (Calming Autumn Onsen)",
    img: "5RYUkbb.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Syoko Hoshi (Calming Autumn Onsen)",
    img: "tUUtCmw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Tsukasa Kiryu (Calming Autumn Onsen)",
    img: "xUdl5Iw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Koume Shirasaka (Heartfelt Christmas Gift)",
    img: "1iIQcOv.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "COOL" ]
    }
  },
    {
    name: "Kyoko Igarashi (Heartfelt Christmas Gift)",
    img: "F7zDpbw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "CUTE" ]
    }
  },
    {
    name: "Yuzu Kitami (Heartfelt Christmas Gift)",
    img: "cuAFLvc.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ], Type: [ "PASS" ]
    }
  },
    {
    name: "Tomoe Murakami (New Years Kimono)",
    img: "aEezfnQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "PASS" ]
    }
  },
    {
    name: "Nono Morikubo (New Years Kimono)",
    img: "crFkmMO.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "COOL" ]
    }
  },
    {
    name: "Miku Maekawa (New Years Kimono)",
    img: "2Et8OmN.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "CUTE" ]
    }
  },
    {
    name: "Hina Araki (Valentine Girls)",
    img: "a1VMbPr.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "COOL" ]
    }
  },
    {
    name: "Yukari Mizumoto (Valentine Girls)",
    img: "8MPRX4s.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "CUTE" ]
    }
  },
    {
    name: "Shin Sato (Valentine Girls)",
    img: "XuZQDUb.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "PASS" ]
    }
  },
    {
    name: "Nagi Hisakawa (Brand New Story)",
    img: "0nqsJCx.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "PASS" ]
    }
  },{
    name: "Chiyo Shirayuki (Brand New Story)",
    img: "0QkFrlU.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "CUTE" ]
    }
  },{
    name: "Arisu Tahchibana (Brand New Story)",
    img: "2jvt5WM.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "COOL" ]
    }
  },{
    name: "Hayate Hisakawa (Springtime After School)",
    img: "THAtB5X.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "COOL" ]
    }
  },{
    name: "Yoshino Yorita (Springtime After School)",
    img: "2IR13Qv.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "PASS" ]
    }
  },{
    name: "Mirei Hayasaka (Springtime After School)",
    img: "UO0sGtQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "CUTE" ]
    }
  },{
    name: "Uzuki Shimamura (New Adventure)",
    img: "XcwvR8i.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "CUTE" ]
    }
  },{
    name: "Rin Shibuya (New Adventure)",
    img: "KhAKq2E.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "COOL" ]
    }
  },{
    name: "Mio Honda (New Adventure)",
    img: "pGtLApC.png",
    opts: {
      Year: [ "Y5" ], Ticket: [], Type: [ "PASS" ]
    }    
  },
    //END OF LIM SSR START OF PERM SSR
    {
    name: "Uzuki Shimamura (1st Perm)",
    img: "QziZV0R.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Rin Shibuya (1st Perm)",
    img: "AlldE1f.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Mio Honda (1st Perm)",
    img: "GdB8gBz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Ranko Kanzaki (Perm)",
    img: "rxlddIF.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Anzu Futaba (Perm)",
    img: "0c8gDqY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Kirari Moroboshi (Perm)",
    img: "tbhkNay.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Miku Maekawa (Perm)",
    img: "SGRNoMd.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Minami Nitta (Perm)",
    img: "cFppCRp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Fumika Sagisawa (Perm)",
    img: "l9FogVj.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Rika Jougasaki (Perm)",
    img: "yFoLQAh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Sachiko Koshimizu (Perm)",
    img: "nHywEho.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Nina Ichihara (Perm)",
    img: "tHeyIkw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Kanade Hayami (Perm)",
    img: "B14Z4It.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yuki Himekawa (Perm)",
    img: "H56kMcA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Mayu Sakuma (Perm)",
    img: "PwBAWWG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Shiki Ichinose (Perm)",
    img: "65zPv1w.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Nao Kamiya (Perm)",
    img: "JPJTt86.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Aiko Takamori (Perm)",
    img: "n464rkD.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Karen Hojo (Perm)",
    img: "bSDrfaw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Syoko Hoshi (1st Perm)",
    img: "tPSc5Us.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Sae Kobayakawa (1st Perm)",
    img: "ua4mf2U.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Asuka Ninomiya (Perm)",
    img: "fW8MBPn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Hinako Kita (1st Perm)",
    img: "7V8iAK3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Kyoko Igarashi (1st Perm)",
    img: "2SmaOJI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Koume Shirasaka (Perm)",
    img: "GwX2Ox9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Frederica Miyamoto (Perm)",
    img: "Xg3NStv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yoshino Yorita (Perm)",
    img: "LYawwNw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Shizuku Oikawa (Perm)",
    img: "jIlsL5e.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Syuko Shiomi (1st Perm)",
    img: "cWiOqZI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Chieri Ogata (Perm)",
    img: "IsNkGjL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Miyu Mifune (Perm)",
    img: "e6CA9wA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yumi Aiba (Perm)",
    img: "aVA02QX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Yuuki Otokura (Perm)",
    img: "UuRBeBQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Mirei Hayasaka (1st Perm)",
    img: "o0RdsBF.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Haruna Kamijo (Perm)",
    img: "a3YAbyo.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Airi Totoki (1st Perm)",
    img: "jSp8kBz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Yuko Hori (Perm)",
    img: "cSmqq1S.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Miho Kohinata (Perm)",
    img: "IT5oPXX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Anastasia (1st Perm)",
    img: "mbObFYL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Ayame Hamaguchi (Perm)",
    img: "AfydLFV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Hajime Fujiwara (1st Perm)",
    img: "dAldyC0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kanako Mimura (Perm)",
    img: "XTnlTaX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Momoka Sakurai (1st Perm)",
    img: "bqdQnmi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Shin Sato (Perm)",
    img: "28AOBug.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Nono Morikubo (1st Perm)",
    img: "WMWCYQC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kaoru Ryuzaki (1st Perm)",
    img: "eM1i9EB.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Yukari Mizumoto (1st Perm)",
    img: "b5TwDRV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hina Araki (1st Perm)",
    img: "T56akPE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Miria Akagi (Perm)",
    img: "sTgRT5f.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Makino Yagami (1st Perm)",
    img: "8t5Dz9X.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yuka Nakano (Perm)",
    img: "hQ2GWu9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Noriko Shiina (Perm)",
    img: "mtlCmVh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yuzu Kitami (Perm)",
    img: "hd63pSa.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Riina Tada (1st Perm)",
    img: "53L6hOT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Sanae Katagiri (Perm)",
    img: "sCVEbJJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Hiromi Seki (1st Perm)",
    img: "Wa5N5rD.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yukimi Sajo (1st Perm)",
    img: "hirY8bX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Akane Hino (Perm)",
    img: "NGJR5Cp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Rina Fujimoto (Perm)",
    img: "ytJAb5V.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kozue Yusa (1st Perm)",
    img: "z4rtTUT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Chie Sasaki (Perm)",
    img: "PhkSyuO.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Tomoe Murakami (Perm)",
    img: "tz8T1KC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Natsuki Kimura (Perm)",
    img: "fwXC681.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Atsumi Munakata (Perm)",
    img: "QvfiumV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Aki Yamato (Perm)",
    img: "dBFoGW6.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Tamami Wakiyama(Perm)",
    img: "L0UOYpC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Risa Matoba (1st Perm)",
    img: "AijRUQZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Hotaru Shiragiku (1st Perm)",
    img: "Q9LXBvu.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Emi Namba (Perm)",
    img: "FNc5HV4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Mizuki Kawashima (1st Perm)",
    img: "PBqWrXu.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kana Imai (Perm)",
    img: "vLZ4Cyn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Kaede Takagaki (Perm)",
    img: "W399P7O.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kotoka Saionji (Perm)",
    img: "jTGAAWw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Natalia (1st Perm)",
    img: "XrL4TgQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Arisu Tachibana (Perm)",
    img: "fMbmyBP.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Sana Miyoshi (Perm)",
    img: "QFkVmTJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Koharu Koga (Perm)",
    img: "crZLSg9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Shinobu Kudo (Perm)",
    img: "LadfSym.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yui Ohtsuki (Perm)",
    img: "kSHE3CE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Layla (Perm)",
    img: "QWoWMy1.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Tsukasa Kiryu (Perm)",
    img: "nln4cVL.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Clarice (Perm)",
    img: "27NAl1J.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Takumi Mukai (Perm)",
    img: "iSldN3i.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Tokiko Zaizen (Perm)",
    img: "EXUW9tM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Nana Abe (Perm)",
    img: "EKhrZHM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Mutsumi Ujiie (Perm)",
    img: "vbQRJ52.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Izumi Ohishi (Perm)",
    img: "25hUBXh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Mika Jougasaki (Perm)",
    img: "8SBTIaG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Nene Kurihara (Perm)",
    img: "tLr2R4O.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Sakura Muramatsu (Perm)",
    img: "WD6SgTN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Reina Koseki (Perm)",
    img: "6SJFKau.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Seira Mizuki (Perm)",
    img: "b4rcon4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Ako Tsuchiya (Perm)",
    img: "AZlzIc9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Haru Yuuki (Perm)",
    img: "FyKkICT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Karin Domyoji (Perm)",
    img: "jdqvRWW.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Ai Togo (Perm)",
    img: "eb2MGpB.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Michiru Ohara (Perm)",
    img: "j8CqWqy.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Meiko Namiki (Perm)",
    img: "kuY9nGZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Akiha Ikebukuro (Perm)",
    img: "8X6sYZb.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Suzuho Ueda (Perm)",
    img: "PTreThS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Noa Takamine (Perm)",
    img: "kD1AF80.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kiyomi Saejima (Perm)",
    img: "fHj5R4p.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Kyoko Igarashi (2nd Perm)",
    img: "7FFDFGt.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Nanami Asari (Perm)",
    img: "dOD0sFG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Hina Araki (2nd Perm)",
    img: "PbZEOd9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Azuki Momoi (Perm)",
    img: "87Iwx9a.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hikaru Nanjo (Perm)",
    img: "D8c5okl.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Uzuki Shimamura (2nd Perm)",
    img: "Ya4vywR.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hinako Kita (2nd Perm)",
    img: "susOvLE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Hajime Fujiwara (2nd Perm)",
    img: "h9LBwoi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kako Takafuji (2nd Perm)",
    img: "WXku41P.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Miyo Harada (Perm)",
    img: "uyteIwn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Ibuki Komatsu (Perm)",
    img: "dj0KEWI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Syoko Hoshi (2nd Perm)",
    img: "u57TgzY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Sae Kobayakawa (2nd Perm)",
    img: "BiFtQ4T.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Nono Morikubo (2nd Perm)",
    img: "knLzbMP.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Mirei Hayasaka (2nd Perm)",
    img: "6gXP1LM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Anastasia (2nd Perm)",
    img: "J9bOJ6Z.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Rena Hyodo (Perm)",
    img: "22Wl5LI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Syuko Shiomi (2nd Perm)",
    img: "ekLcx4e.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Mai Fukuyama (Perm)",
    img: "N0sqeon.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Mio Honda (2nd Perm)",
    img: "CjwdNVU.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Airi Totoki (2nd Perm)",
    img: "fPeA38T.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Momoka Sakurai (2nd Perm)",
    img: "RNiXWrK.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yume Narumiya (Perm)",
    img: "rzHwuWG.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kumiko Matsuyama (Perm)",
    img: "a1WrULh.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Kurumi Ohnuma (Perm)",
    img: "VNRJVTv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Rin Shibuya (2nd Perm)",
    img: "rt56fHA.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kaoru Ryuzaki (2nd Perm)",
    img: "VHHiKAC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Yukari Mizumoto (2nd Perm)",
    img: "bHfGaoe.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Itsuki Manabe (Perm)",
    img: "mtwE0Y4.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Riina Tada (2nd Perm)",
    img: "eSEHT39.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Chitose Kurosaki (Perm)",
    img: "SiKVd3Q.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Chiyo Shirayuki (Perm)",
    img: "EbhA2sE.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Chiaki Kurokawa (Perm)",
    img: "yh3ycqS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Seika Suzumiya (Perm)",
    img: "b0IIpUn.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hayate Hisakawa (Perm)",
    img: "eMYDpym.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Nagi Hisakawa (Perm)",
    img: "7XUzciV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Honoka Ayase (Perm)",
    img: "1wXUlJt.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yukino Aihara (Perm)",
    img: "6E9xcXi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Tomoka Wakabayashi (Perm)",
    img: "GdwXiyT.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Hotaru Shiragiku (2nd Perm)",
    img: "sp0pToo.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Satomi Sakakibara (Perm)",
    img: "O7PWhXH.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Mahiro Kitagawa (Perm)",
    img: "I4u2bS0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Mizuki Kawashima (2nd Perm)",
    img: "zZnIYDH.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Akari Tsujino (Perm)",
    img: "10n79Ag.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Rumi Wakui(Perm)",
    img: "1uWjUXb.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Umi Sugisaka (Perm)",
    img: "ISx9bz6.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Shiori Sena (Perm)",
    img: "IBewhSw.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Hiromi Seki (2nd Perm)",
    img: "pJyR5TV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Mary Cochran (Perm)",
    img: "lLh8mmM.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Akira Sunazuka (Perm)",
    img: "1bohXQp.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yuriko Ohnishi (Perm)",
    img: "CKoEKRy.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Kai Nishijima (Perm)",
    img: "VFvpgGC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Marina Sawada (Perm)",
    img: "MLgpE7F.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Riamu Yumemi (Perm)",
    img: "PCSohiN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Tomo Fujii (Perm)",
    img: "UqJeukY.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Fuka Asano (Perm)",
    img: "QWIP1e5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yukimi Sajo (2nd Perm)",
    img: "bLagbpJ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yuu Ohta (Perm)",
    img: "FuGk2Mi.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Makino Yagami (2nd Perm)",
    img: "XnHOpDR.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Cathy Graham (Perm)",
    img: "QIq4DQs.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Erika Akanishi (Perm)",
    img: "mSqwqf5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hitomi Niwa (Perm)",
    img: "W1UYth9.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Honami Nishikawa (Perm)",
    img: "OtPaA9z.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yao Fueifuei (Perm)",
    img: "3jeRsZq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Chinatsu Aikawa (Perm)",
    img: "6Ei8UPV.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Ema Senzaki (Perm)",
    img: "SRGXhs3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Saki Yoshioka (Perm)",
    img: "E12KeyN.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kozue Yusa (2nd Perm)",
    img: "QdT6BBx.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Shino Hiiragi (Perm)",
    img: "2AddzJ8.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Natalia (2nd Perm)",
    img: "Tnti2R3.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Setsuna Imura (Perm)",
    img: "ZdbsyH7.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hijiri Mochizuki (Perm)",
    img: "EKsn5Hv.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Sora Nonomura (Perm)",
    img: "x9Es7tQ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Toko Hattori (Perm)",
    img: "jbU3y05.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Arisa Mochido (Perm)",
    img: "mPpIh8h.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Yasuha Okazaki (Perm)",
    img: "kbhd0XI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Risa Matoba (2nd Perm)",
    img: "4XKkDDI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Sarina Matsumoto (Perm)",
    img: "Sa1M12a.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Yoko Saito (Perm)",
    img: "gHsUiJq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Tsubaki Egami (Perm)",
    img: "ubCxcu7.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Saya Matsubara (Perm)",
    img: "NXDNiwz.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Ayaka Kishibe (Perm)",
    img: "JcEgEnZ.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Miyuki Yanase (Perm)",
    img: "lGVY3YS.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Chika Yokoyama (Perm)",
    img: "yKIBdYX.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Kanna Ariura (Perm)",
    img: "tQIdxs5.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Hasumi Nagatomi (Perm)",
    img: "LHtBn51.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Misaki Etou (Perm)",
    img: "lkMELEr.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Chizuru Matsuo (Perm)",
    img: "pOJsiRq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Manami Kiba (Perm)",
    img: "EkU3iwO.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Miyabi Tsukimiya (Perm)",
    img: "SbYFuuI.png",
    opts: {
      Year: [ "PERM" ], Type: [ "CUTE" ]
    }
  },{
    name: "Aya Kirino (Perm)",
    img: "s25N8aq.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Natsumi Soma (Perm)",
    img: "RizqyV0.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },{
    name: "Megumi Ijuin (Perm)",
    img: "56KLnEC.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Kate (Perm)",
    img: "vMUmSBl.png",
    opts: {
      Year: [ "PERM" ], Type: [ "COOL" ]
    }
  },{
    name: "Shiho Makihara (Perm)",
    img: "phtt6Kr.png",
    opts: {
      Year: [ "PERM" ], Type: [ "PASS" ]
    }
  },
  
];
