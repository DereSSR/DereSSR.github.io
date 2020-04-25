dataSetVersion = "2nd"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by year of release and/or cinfes",
    key: "Year",
    tooltip: "Check this to filter some of the limited sets.",
    checked: true,
    sub: [
      { name: "Year 1 Limited SSRs", key: "Y1" },
      { name: "Year 2 Limited SSRs", key: "Y2" },
      { name: "Year 3 Limited SSRs", key: "Y3" },
      { name: "Year 4 Limited SSRs", key: "Y4" },
      { name: "Year 5 Limited SSRs", key: "Y5" },
      { name: "Cinderella Festival SSRs", key: "FES" },
    ]
  },
    {
    name: "Filter by Availability in the 2020 Anniversary Limited Ticket",
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
      Year: [ "FES" ], Ticket: [ "TIX" ] 
    }
  },
    {
    name: "Rin Shibuya (Cinfes)",
    img: "VRaWRkB.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Mio Honda (Cinfes)",
    img: "2dgPfgQ.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Sachiko Koshimizu (Cinfes)",
    img: "xu2mLJn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kaede Takagaki (Cinfes)",
    img: "NhYQ6fU.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Mika Jougasaki (Cinfes)",
    img: "dIvOPhW.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Nana Abe (Cinfes)",
    img: "fG3DSx6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Syuko Shiomi (Cinfes)",
    img: "vEzlMfp.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yui Ohtsuki (Cinfes)",
    img: "ZmlBJYx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kanade Hayami (Cinfes)",
    img: "zbeYz3R.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Miku Maekawa (Cinfes)",
    img: "7lp2sCV.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Airi Totoki (Cinfes)",
    img: "iu74AZg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Anastasia (Cinfes)",
    img: "6JykxV8.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Anzu Futaba (Cinfes)",
    img: "jy1Lfu7.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kirari Moroboshi (Cinfes)",
    img: "rvQNJr6.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Shiki Ichinose (Cinfes)",
    img: "BPLVxdg.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Ranko Kanzaki (Cinfes)",
    img: "mmtz2W1.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yoshino Yorita (Cinfes)",
    img: "X6xStyb.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yuuki Otokura (Cinfes)",
    img: "shrkvUx.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Nao Kamiya (Cinfes)",
    img: "vNvrAJM.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Shin Sato (Cinfes)",
    img: "E43DLl5.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Chieri Ogata (Cinfes)",
    img: "KiBy6g2.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Miria Akagi (Cinfes)",
    img: "EqXg62P.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Arisu Tachibana (Cinfes)",
    img: "IPkicuO.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Miho Kohinata (Cinfes)",
    img: "U528OJA.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yumi Aiba (Cinfes)",
    img: "u8RN5K3.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Fumika Sagisawa (Cinfes)",
    img: "7pXYdE0.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Karen Hojo (Cinfes)",
    img: "aC7LdDG.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Hinako Kita (Cinfes)",
    img: "vWIpKrC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Sae Kobayakawa (Cinfes)",
    img: "19PC1pC.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Asuka Ninomiya (Cinfes)",
    img: "Rc5vRfn.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Rika Jougasaki (Cinfes)",
    img: "ymIRq4X.png",
    opts: {
      Year: [ "FES" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Momoka Sakurai (Cinfes)",
    img: "OZta0HI.png",
    opts: {
      Year: [ "FES" ], Ticket: []
    }
  },
    {
    name: "Nina Ichihara (Cinfes)",
    img: "l0irKNt.png",
    opts: {
      Year: [ "FES" ], Ticket: []
    }
  },
  {
    name: "Kanako Mimura (Sweet Halloween)",
    img: "nzDLiwM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Airi Totoki (Sweet Halloween)",
    img: "TiqbK15.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Chieri Ogata (Cozy Onsen)",
    img: "mV5wFFm.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Riina Tada (Cozy Onsen)",
    img: "O8UT8e0.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Anastasia (Christmas Present)",
    img: "47vJ6OM.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Akane Hino (Christmas Present)",
    img: "X5F9ur9.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Nana Abe (Happy New Year)",
    img: "qfF9rDf.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mika Jougasaki (Happy New Year)",
    img: "n4ckIck.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miria Akagi (Valentine's Day)",
    img: "CSe8kli.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mizuki Kawashima (Valentine's Day)",
    img: "4FROae4.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kaede Takagaki (Night Time)",
    img: "12wIG5N.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miho Kohinata (Night Time)",
    img: "nJ1Kwwh.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Momoka Sakurai (After School Time)",
    img: "OI8B9HI.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Takumi Mukai (After School Time)",
    img: "IqZVTtp.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Natsuki Kimura (Exciting Travel)",
    img: "ClDaJNn.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Arisu Tachibana (Exciting Travel)",
    img: "Tjymizy.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Ranko Kanzaki (Bridal Story)",
    img: "9BBeBYq.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miku Maekawa (Bridal Story)",
    img: "Pz14cWo.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Anzu Futaba (Beginning Summer)",
    img: "jsCXlRl.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yui Ohtsuki (Beginning Summer)",
    img: "Y4jem8k.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kirari Moroboshi (Enjoy Summer)",
    img: "U9xMpbK.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Minami Nitta (Enjoy Summer)",
    img: "KAj1vym.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Fumika Sagisawa (1st Anniversary Party)",
    img: "2t9UBlt.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Shiki Ichinose (1st Anniversary Party)",
    img: "oE3oy6y.png",
    opts: {
      Year: [ "Y1" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mayu Sakuma (Happy Halloween)",
    img: "kHf5IpY.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Syoko Hoshi (Happy Halloween)",
    img: "p6YJSZ0.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Aiko Takamori (Steamy Onsen)",
    img: "sseJwxw.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Karen Hojo (Steamy Onsen)",
    img: "rLQAQE7.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Nao Kamiya (Holy Night)",
    img: "5bEWEYq.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Frederica Miyamoto (Holy Night)",
    img: "ihfTgR4.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Sae Kobayakawa (Dreamy Kimono)",
    img: "p8AIpvm.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yoshino Yorita (Dreamy Kimono)",
    img: "schQdcG.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yumi Aiba (Peaceful Valentine)",
    img: "N0CS9R2.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Asuka Ninomiya (Peaceful Valentine)",
    img: "HGLCIZz.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miyu Mifune (Enjoy Night)",
    img: "kXp3AW1.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kyoko Igarashi (Enjoy Night)",
    img: "ipXUfZj.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yuuki Otokura (Sparkling Uniform Girls)",
    img: "yi3AaaB.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Rika Jougasaki (Sparkling Uniform Girls)",
    img: "XZxOUdQ.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yuki Himekawa (Exciting Tour)",
    img: "F50r2xH.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Koume Shirasaka (Exciting Tour)",
    img: "V4wcjMO.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Rin Shibuya (Bridal Session)",
    img: "OBkQVRT.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Karin Domyoji (Bridal Session)",
    img: "K8HUE3w.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Sachiko Koshimizu (Yukata Party)",
    img: "fEoFG9X.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Shizuku Oikawa (Yukata Party)",
    img: "LDOYFs9.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Syuko Shiomi (Lovely Summer Time)",
    img: "6V6ouTt.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yuka Nakano (Lovely Summer Time)",
    img: "H4VlINd.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Shin Sato (2nd Anniversary Party)",
    img: "DUD6Mfn.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Nono Morikubo (2nd Anniversary Party)",
    img: "zaumTvv.png",
    opts: {
      Year: [ "Y2" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Uzuki Shimamura (Cosplay Party)",
    img: "Oruh79y.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Nina Ichihara (Cosplay Party)",
    img: "TFMTgwd.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kanade Hayami (Calming Onsen Vacation)",
    img: "6X5crkv.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yuko Hori (Calming Onsen Vacation)",
    img: "iMI9imE.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mio Honda (Happy Christmas)",
    img: "gcQ3G70.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Chieri Ogata (Happy Christmas)",
    img: "3CbnULe.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kako Takafuji (New Year's Shrine Visit)",
    img: "9ybSb05.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kanako Mimura (New Year's Shrine Visit)",
    img: "XW7Xnx9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miho Kohinata (Valentine Time)",
    img: "qVHmJIO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yuzu Kitami (Valentine Time)",
    img: "RkSHSfO.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miria Akagi (Sparkling Kids Model)",
    img: "D1KtkSn.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Chie Sasaki (Sparkling Kids Model)",
    img: "vi3iKqS.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Riina Tada (After School Friends)",
    img: "cu1KMQ5.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Hiromi Seki (After School Friends)",
    img: "u3oeN6G.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mayu Sakuma (Extreme Circus Show)",
    img: "7E4jtwT.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Tomoe Murakami (Extreme Circus Show)",
    img: "q2pCh0o.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Sanae Katagiri (Bridal Situation)",
    img: "0oNeGHV.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Minami Nitta (Bridal Situation)",
    img: "JnZYpnx.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Fumika Sagisawa (Tanabata Yukata)",
    img: "HycWI7U.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Mirei Hayasaka (Tanabata Yukata)",
    img: "SfsrY0A.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Atsumi Munakata (Summer-Colored Poolside)",
    img: "ObrMCSy.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yumi Aiba (Summer-Colored Poolside)",
    img: "xVPD5nB.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Karen Hojo (3rd Anniversary Party)",
    img: "1RCumqm.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Aiko Takamori (3rd Anniversary Party)",
    img: "h2UZ0V9.png",
    opts: {
      Year: [ "Y3" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kirari Moroboshi (Halloween Witches)",
    img: "1ZzWdxk.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Sachiko Koshimizu (Halloween Witches)",
    img: "Ve4WH4B.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Frederica Miyamoto (Open-Air Onsen)",
    img: "b6rlAq1.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Asuka Ninomiya (Open-Air Onsen)",
    img: "l4wKshK.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Miyu Mifune (Merry X'mas Present)",
    img: "ynL8MOx.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Rika Jougasaki (Merry X'mas Present)",
    img: "8Q5xevY.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Eve Santaclaus (Miracle Holy Night)",
    img: "pU15ypw.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Takumi Mukai (New Year Fire Dance)",
    img: "LtcJrqo.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kaede Takagaki (New Year Fire Dance)",
    img: "nRL3BmW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Haru Yuki (Sweet & Dream)",
    img: "bcfoWzO.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Mayu Sakuma (Sweet & Dream)",
    img: "lclTLdM.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yui Ohtsuki (Private Resort)",
    img: "EVvuv1Z.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kanade Hayami (Private Resort)",
    img: "gOFVJhU.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Anzu Futaba (Fresh School)",
    img: "t4iljXy.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Nina Ichihara (Fresh School)",
    img: "tIac7SW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Hajime Fujiwara (Girls' Challenge)",
    img: "A5yNmuA.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Kanako Mimura (Girls' Challenge)",
    img: "3cEd9DS.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Mika Jougasaki (Bridal Photo)",
    img: "MrvLRQj.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Frederica Miyamoto (Bridal Photo)",
    img: "yvsv9Uc.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kako Takafuji (Tanabata Festival)",
    img: "NENV1m7.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yuko Hori (Tanabata Festival)",
    img: "3iQpDQn.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yuuki Otokura (SUN 3 Summer)",
    img: "F5n1NNW.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Yuki Himekawa (SUN 3 Summer)",
    img: "izCNPWi.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Miyu Mifune (SUN 3 Summer)",
    img: "tIntPZJ.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Ranko Kanzaki (4th Anniversary Party)",
    img: "hGpEQ0H.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Nana Abe (4th Anniversary Party)",
    img: "UUnChlX.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
  {
    name: "Akane Hino (4th Anniversary Party)",
    img: "azOEXWf.png",
    opts: {
      Year: [ "Y4" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Hikaru Nanjo (Halloween Mode)",
    img: "hgrU53n.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Nao Kamiya (Halloween Mode)",
    img: "eCb0LAp.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Noriko Shiina (Halloween Mode)",
    img: "xaWXIqJ.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Shiki Ichinose (Calming Autumn Onsen)",
    img: "5RYUkbb.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Syoko Hoshi (Calming Autumn Onsen)",
    img: "tUUtCmw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Tsukasa Kiryu (Calming Autumn Onsen)",
    img: "xUdl5Iw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Koume Shirasaka (Heartfelt Christmas Gift)",
    img: "1iIQcOv.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Kyoko Igarashi (Heartfelt Christmas Gift)",
    img: "F7zDpbw.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Yuzu Kitami (Heartfelt Christmas Gift)",
    img: "cuAFLvc.png",
    opts: {
      Year: [ "Y5" ], Ticket: [ "TIX" ]
    }
  },
    {
    name: "Tomoe Murakami (New Years Kimono)",
    img: "aEezfnQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Nono Morikubo (New Years Kimono)",
    img: "crFkmMO.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Miku Maekawa (New Years Kimono)",
    img: "2Et8OmN.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Hina Araki (Valentine Girls)",
    img: "a1VMbPr.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Yukari Mizumoto (Valentine Girls)",
    img: "8MPRX4s.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Shin Sato (Valentine Girls)",
    img: "XuZQDUb.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
    {
    name: "Nagi Hisakawa (Brand New Story)",
    img: "0nqsJCx.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },{
    name: "Chiyo Shirayuki (Brand New Story)",
    img: "0QkFrlU.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },{
    name: "Arisu Tahchibana (Brand New Story)",
    img: "2jvt5WM.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },{
    name: "Hayate Hisakawa (Springtime After School)",
    img: "THAtB5X.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },{
    name: "Yoshino Yorita (Springtime After School)",
    img: "2IR13Qv.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },{
    name: "Mirei Hayasaka (Springtime After School)",
    img: "UO0sGtQ.png",
    opts: {
      Year: [ "Y5" ], Ticket: []
    }
  },
  
];
