export interface Root {
    paintData: PaintData
  }
  
  export interface PaintData {
    target: string
    make: string
    paintCombinations: PaintCombinations
  }
  
  export interface PaintCombinations {
    pspc0000: Pspc0000
    pspc0002: Pspc0002
    pspc0002sspc0014: Pspc0002sspc0014
    pspc0002sspc0391: Pspc0002sspc0391
    pspc0004: Pspc0004
    pspc0006: Pspc0006
    pspc0007: Pspc0007
    pspc0008: Pspc0008
    pspc0009: Pspc0009
    pspc0010: Pspc0010
    pspc0014: Pspc0014
    pspc0014sspc0004tspc0002: Pspc0014sspc0004tspc0002
    pspc0015: Pspc0015
    pspc0016: Pspc0016
    pspc0019: Pspc0019
    pspc0020: Pspc0020
    pspc0021: Pspc0021
    pspc0022: Pspc0022
    pspc0023: Pspc0023
    pspc0023sspc0016: Pspc0023sspc0016
    pspc0024: Pspc0024
    pspc0024sspc0004: Pspc0024sspc0004
    pspc0025: Pspc0025
    pspc0026: Pspc0026
    pspc0027: Pspc0027
    pspc0028: Pspc0028
    pspc0029: Pspc0029
    pspc0030: Pspc0030
 
  }
  
  export interface Pspc0000 {
    paintSwatch: PaintSwatch
    mapped: Mapped
  }
  
  export interface PaintSwatch {
    primary: Primary
  }
  
  export interface Primary {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped {
    "481": N481
    "110343": N110343
    "119578": N119578
    "152070": N152070
    "30647311": N30647311
    "63645d-alvitgrau-metallic": N63645dAlvitgrauMetallic
    "63645d-alvitgrau-metallise": N63645dAlvitgrauMetallise
    "666060-bmw-individual-alvitgrau-metallic": N666060BmwIndividualAlvitgrauMetallic
    b66: B66
    "bmm-1cedcjb": Bmm1cedcjb
    "bmm-22064agm": Bmm22064agm
    customoption55: Customoption55
    p0c48: P0c48
    p0c5e: P0c5e
  }
  
  export interface N481 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N110343 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119578 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152070 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647311 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N63645dAlvitgrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N63645dAlvitgrauMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N666060BmwIndividualAlvitgrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B66 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm1cedcjb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm22064agm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption55 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c48 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c5e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0002 {
    paintSwatch: PaintSwatch2
    mapped: Mapped2
  }
  
  export interface PaintSwatch2 {
    primary: Primary2
  }
  
  export interface Primary2 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped2 {
    "490": N490
    "60904": N60904
    "82589": N82589
    "84931": N84931
    "108726": N108726
    "121713": N121713
    "122439": N122439
    "145015": N145015
    "145047": N145047
    "145048": N145048
    "145049": N145049
    "152287": N152287
    "30870531": N30870531
    "31135296": N31135296
    "32285349": N32285349
    "32558395": N32558395
    "32777217": N32777217
    "490a": N490a
    "490c": N490c
    "490f": N490f
    a72: A72
    "bmm-bec7acs": BmmBec7acs
    c2s: C2s
    customoptionb0jtnwhw127: Customoptionb0jtnwhw127
    customoptiongkpb070vttn: Customoptiongkpb070vttn
    customoptionznjevr5w0qp: Customoptionznjevr5w0qp
    jatop001: Jatop001
    p0490: P0490
    p0490b: P0490b
    p0490g: P0490g
    p0a72: P0a72
    p0a96: P0a96
    p0c2s: P0c2s
    p0p63: P0p63
    p0u21: P0u21
    p0x16: P0x16
  }
  
  export interface N490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N60904 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N82589 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N84931 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N108726 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N121713 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N122439 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145015 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145047 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145048 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145049 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152287 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30870531 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31135296 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N32285349 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32558395 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32777217 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A72 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBec7acs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2s {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionb0jtnwhw127 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongkpb070vttn {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Customoptionznjevr5w0qp {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Jatop001 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a72 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a96 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c2s {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0p63 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0u21 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x16 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0002sspc0014 {
    paintSwatch: PaintSwatch3
    mapped: Mapped3
  }
  
  export interface PaintSwatch3 {
    primary: Primary3
    secondary: Secondary
  }
  
  export interface Primary3 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped3 {
    c4x: C4x
    p0c4x: P0c4x
  }
  
  export interface C4x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0002sspc0391 {
    paintSwatch: PaintSwatch4
    mapped: Mapped4
  }
  
  export interface PaintSwatch4 {
    primary: Primary4
    secondary: Secondary2
  }
  
  export interface Primary4 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary2 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped4 {
    "116405": N116405
  }
  
  export interface N116405 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0004 {
    paintSwatch: PaintSwatch5
    mapped: Mapped5
  }
  
  export interface PaintSwatch5 {
    primary: Primary5
  }
  
  export interface Primary5 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped5 {
    "475": N475
    "668": N668
    "6387": N6387
    "11098": N11098
    "26230": N26230
    "61202": N61202
    "69094": N69094
    "74317": N74317
    "26578472": N26578472
    "27685797": N27685797
    "27973209": N27973209
    "28610122": N28610122
    "28934192": N28934192
    "28934275": N28934275
    "29540490": N29540490
    "30017411": N30017411
    "30017449": N30017449
    "30051808": N30051808
    "30051809": N30051809
    "30051819": N30051819
    "30051832": N30051832
    "30051855": N30051855
    "30051864": N30051864
    "30052461": N30052461
    "30052516": N30052516
    "30052574": N30052574
    "30343662": N30343662
    "30641400": N30641400
    "30641516": N30641516
    "30642422": N30642422
    "30645508": N30645508
    "30647275": N30647275
    "30647278": N30647278
    "30649535": N30649535
    "30649567": N30649567
    "30649884": N30649884
    "30650891": N30650891
    "30652165": N30652165
    "30653176": N30653176
    "30673150": N30673150
    "30770047": N30770047
    "30773360": N30773360
    "30776765": N30776765
    "30776779": N30776779
    "30778413": N30778413
    "30778740": N30778740
    "30782012": N30782012
    "30788274": N30788274
    "30788472": N30788472
    "30788683": N30788683
    "30789892": N30789892
    "30790189": N30790189
    "30790800": N30790800
    "30805979": N30805979
    "30806090": N30806090
    "30806193": N30806193
    "30814905": N30814905
    "30814906": N30814906
    "30815206": N30815206
    "30823559": N30823559
    "30823572": N30823572
    "30824034": N30824034
    "31174101": N31174101
    "31266587": N31266587
    "31266891": N31266891
    "31500190": N31500190
    "31514675": N31514675
    "32275021": N32275021
    "32278894": N32278894
    "32285113": N32285113
    "32305566": N32305566
    "32324042": N32324042
    "32341745": N32341745
    "32375773": N32375773
    "32378941": N32378941
    "32543951": N32543951
    "32707611": N32707611
    "32707616": N32707616
    "32717042": N32717042
    "32723288": N32723288
    "32850466": N32850466
    "32850880": N32850880
    "33113344": N33113344
    "0096": N0096
    "070707-saphirschwarz-metallic": N070707SaphirschwarzMetallic
    "070707-saphirschwarz-metallise": N070707SaphirschwarzMetallise
    "0e": N0e
    "0r": N0r
    "2t2t": N2t2t
    "373737-saphirschwarz-metallise": N373737SaphirschwarzMetallise
    "463f39-jatoba": N463f39Jatoba
    "490p": N490p
    c49: C49
    customoption05s0x5bu04sg: Customoption05s0x5bu04sg
    customoption0qwphl1mwblq: Customoption0qwphl1mwblq
    customoption0wsqmoyps3i: Customoption0wsqmoyps3i
    customoption1bke1973v71j: Customoption1bke1973v71j
    customoption1jf6klter8l: Customoption1jf6klter8l
    customoption36: Customoption36
    customoption39: Customoption39
    customoption404wgv7rcy2: Customoption404wgv7rcy2
    customoption4uns5cc3d2x: Customoption4uns5cc3d2x
    customoption78185hxsvcj: Customoption78185hxsvcj
    customoption78ffopxkl43: Customoption78ffopxkl43
    customoption7hx2dkzv45i: Customoption7hx2dkzv45i
    customoption7sn3qngp93x: Customoption7sn3qngp93x
    customoption9503d0ow3fa: Customoption9503d0ow3fa
    customoptionasi7b7wn2mc: Customoptionasi7b7wn2mc
    customoptionaw9gvhayxy8: Customoptionaw9gvhayxy8
    customoptionayi80tu29li: Customoptionayi80tu29li
    customoptioncp8aywgkrtf: Customoptioncp8aywgkrtf
    customoptiondd2up1fw0l: Customoptiondd2up1fw0l
    customoptionfa45cnk7h9g: Customoptionfa45cnk7h9g
    customoptiong3tcs2yd6yl: Customoptiong3tcs2yd6yl
    customoptiongh7m0otx176: Customoptiongh7m0otx176
    customoptionhxtnmzbwsrf: Customoptionhxtnmzbwsrf
    customoptionibpa9hqu8me: Customoptionibpa9hqu8me
    customoptionjki6lr23cy: Customoptionjki6lr23cy
    customoptionkf5c2cprz5i: Customoptionkf5c2cprz5i
    customoptionlhscw4hpg7: Customoptionlhscw4hpg7
    customoptiono9x4trsyenb: Customoptiono9x4trsyenb
    customoptionoxlksh89jub: Customoptionoxlksh89jub
    customoptionp5nvk33s8mb: Customoptionp5nvk33s8mb
    customoptionqvrhzuzbe5: Customoptionqvrhzuzbe5
    customoptionrlt8y37l7gd: Customoptionrlt8y37l7gd
    customoptionrr93mk42be: Customoptionrr93mk42be
    customoptions2nsf87ckkc: Customoptions2nsf87ckkc
    customoptiontl5084rmi5: Customoptiontl5084rmi5
    customoptiontr6zcd4fqzr: Customoptiontr6zcd4fqzr
    customoptiontt4zobhjliq: Customoptiontt4zobhjliq
    customoptionu0im6wh6jnr: Customoptionu0im6wh6jnr
    customoptionuipoqc0yvt: Customoptionuipoqc0yvt
    customoptionusnr6l3a0w: Customoptionusnr6l3a0w
    customoptionv6b6ek6xdm: Customoptionv6b6ek6xdm
    customoptionv7y1d1zot2j: Customoptionv7y1d1zot2j
    customoptionvbcym3mn5yd: Customoptionvbcym3mn5yd
    customoptionvnqqt7lf5z: Customoptionvnqqt7lf5z
    customoptionxft9tngf7: Customoptionxft9tngf7
    customoptiony0z7hwouhk9: Customoptiony0z7hwouhk9
    customoptionyr0cm5g7lyb: Customoptionyr0cm5g7lyb
    i: I
    imagineblack: Imagineblack
    jato416: Jato416
    negru: Negru
    "object-promise": ObjectPromise
    p0475: P0475
    p0688: P0688
    p0c49: P0c49
    p0x02: P0x02
    pbsb: Pbsb
    spc0004: Spc0004
    x80: X80
  }
  
  export interface N475 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N668 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N6387 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N11098 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26230 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N61202 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N69094 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N74317 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26578472 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685797 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27973209 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28610122 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934192 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934275 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29540490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30017411 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30017449 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051808 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051809 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051819 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051832 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051855 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051864 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30052461 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30052516 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30052574 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30343662 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641400 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641516 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30642422 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30645508 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647275 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647278 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649535 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649567 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649884 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650891 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652165 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653176 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30673150 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30770047 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30773360 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776765 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776779 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30778413 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30778740 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30782012 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788274 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788472 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788683 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30789892 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30790189 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30790800 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30805979 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806090 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806193 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814905 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814906 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815206 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823559 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823572 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30824034 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174101 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266587 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266891 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31500190 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31514675 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275021 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278894 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32285113 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305566 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32324042 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341745 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32375773 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32378941 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32543951 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707611 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707616 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717042 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723288 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850466 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850880 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N33113344 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0096 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N070707SaphirschwarzMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N070707SaphirschwarzMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2t2t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N373737SaphirschwarzMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N463f39Jatoba {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C49 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Customoption05s0x5bu04sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0qwphl1mwblq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0wsqmoyps3i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1bke1973v71j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1jf6klter8l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption404wgv7rcy2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4uns5cc3d2x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption78185hxsvcj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption78ffopxkl43 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7hx2dkzv45i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7sn3qngp93x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9503d0ow3fa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionasi7b7wn2mc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaw9gvhayxy8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionayi80tu29li {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncp8aywgkrtf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondd2up1fw0l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfa45cnk7h9g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiong3tcs2yd6yl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongh7m0otx176 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhxtnmzbwsrf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionibpa9hqu8me {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjki6lr23cy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkf5c2cprz5i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlhscw4hpg7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiono9x4trsyenb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionoxlksh89jub {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionp5nvk33s8mb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqvrhzuzbe5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrlt8y37l7gd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrr93mk42be {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptions2nsf87ckkc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontl5084rmi5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontr6zcd4fqzr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontt4zobhjliq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu0im6wh6jnr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuipoqc0yvt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionusnr6l3a0w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv6b6ek6xdm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv7y1d1zot2j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvbcym3mn5yd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvnqqt7lf5z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxft9tngf7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiony0z7hwouhk9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyr0cm5g7lyb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface I {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imagineblack {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jato416 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Negru {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface ObjectPromise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0475 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0688 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c49 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x02 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pbsb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Spc0004 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface X80 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0006 {
    paintSwatch: PaintSwatch6
    mapped: Mapped6
  }
  
  export interface PaintSwatch6 {
    primary: Primary6
  }
  
  export interface Primary6 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped6 {
    "4599": N4599
    "38729": N38729
    "32710641": N32710641
    "191919-saphirschwarz-metallise": N191919SaphirschwarzMetallise
    "bms-d7d05jb": BmsD7d05jb
    customoption0okpt1i7epsp: Customoption0okpt1i7epsp
    p0668: P0668
  }
  
  export interface N4599 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N38729 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32710641 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N191919SaphirschwarzMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmsD7d05jb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0okpt1i7epsp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0668 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0007 {
    paintSwatch: PaintSwatch7
    mapped: Mapped7
  }
  
  export interface PaintSwatch7 {
    primary: Primary7
  }
  
  export interface Primary7 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped7 {
    "381": N381
    "26283": N26283
    "47888": N47888
    b45: B45
    p0b45: P0b45
  }
  
  export interface N381 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26283 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N47888 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B45 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b45 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0008 {
    paintSwatch: PaintSwatch8
    mapped: Mapped8
  }
  
  export interface PaintSwatch8 {
    primary: Primary8
  }
  
  export interface Primary8 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped8 {
    "117770": N117770
    "30806517": N30806517
    "266b88-snapper-rocks-blue": N266b88SnapperRocksBlue
    "bmm-c64cfsrb": BmmC64cfsrb
    "bmm-ecc1csr": BmmEcc1csr
    c16: C16
    c1g: C1g
    jatoc1g: Jatoc1g
    p0c1g: P0c1g
    sgjhgjkhjkkhsd: Sgjhgjkhjkkhsd
  }
  
  export interface N117770 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806517 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N266b88SnapperRocksBlue {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmC64cfsrb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmEcc1csr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C16 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatoc1g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Sgjhgjkhjkkhsd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0009 {
    paintSwatch: PaintSwatch9
    mapped: Mapped9
  }
  
  export interface PaintSwatch9 {
    primary: Primary9
  }
  
  export interface Primary9 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped9 {
    "152807": N152807
    "32293026": N32293026
    a85: A85
    "bmm-ed72earb": BmmEd72earb
    "bmm-ef99farb": BmmEf99farb
    p0c4f: P0c4f
  }
  
  export interface N152807 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32293026 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A85 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmEd72earb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmEf99farb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0010 {
    paintSwatch: PaintSwatch10
    mapped: Mapped10
  }
  
  export interface PaintSwatch10 {
    primary: Primary10
  }
  
  export interface Primary10 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped10 {
    "123938": N123938
    "139892": N139892
    "152712": N152712
    "30052929": N30052929
    "30641394": N30641394
    "30823608": N30823608
    "31199349": N31199349
    "31199367": N31199367
    "31266596": N31266596
    "32271212": N32271212
    "32348105": N32348105
    "32376724": N32376724
    "32707630": N32707630
    "32717055": N32717055
    "32850889": N32850889
    "33106193": N33106193
    b40: B40
    "bmm-06af2sbm": Bmm06af2sbm
    "bmm-86b46sb": Bmm86b46sb
    "bmm-be144bb": BmmBe144bb
    "bmm-fe02dsbim": BmmFe02dsbim
    "bmsp-1a9dcsbim": Bmsp1a9dcsbim
    "bmsp-24baesb": Bmsp24baesb
    c3n: C3n
    customoption59hz814vhl9: Customoption59hz814vhl9
    customoptionc9ow5hy4lo: Customoptionc9ow5hy4lo
    customoptionm6npvahspk: Customoptionm6npvahspk
    customoptionoe3tj1sth: Customoptionoe3tj1sth
    customoptionsfopfgcci1: Customoptionsfopfgcci1
    customoptionv3elew0fpff: Customoptionv3elew0fpff
    p0c38: P0c38
    p0c3n: P0c3n
    p0c6h: P0c6h
  }
  
  export interface N123938 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139892 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152712 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30052929 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641394 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823608 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199349 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199367 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266596 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32271212 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32348105 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32376724 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707630 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717055 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850889 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N33106193 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B40 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm06af2sbm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm86b46sb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBe144bb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmFe02dsbim {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp1a9dcsbim {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp24baesb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C3n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption59hz814vhl9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionc9ow5hy4lo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionm6npvahspk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionoe3tj1sth {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsfopfgcci1 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv3elew0fpff {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c38 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c6h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0014 {
    paintSwatch: PaintSwatch11
    mapped: Mapped11
  }
  
  export interface PaintSwatch11 {
    primary: Primary11
  }
  
  export interface Primary11 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped11 {
    "1z161": N1z161
  }
  
  export interface N1z161 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0014sspc0004tspc0002 {
    paintSwatch: PaintSwatch12
    mapped: Mapped12
  }
  
  export interface PaintSwatch12 {
    primary: Primary12
    secondary: Secondary3
    tertiary: Tertiary
  }
  
  export interface Primary12 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary3 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Tertiary {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped12 {
    p0c01: P0c01
  }
  
  export interface P0c01 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0015 {
    paintSwatch: PaintSwatch13
    mapped: Mapped13
  }
  
  export interface PaintSwatch13 {
    primary: Primary13
  }
  
  export interface Primary13 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped13 {
    "104300": N104300
    "105352": N105352
    "119314": N119314
    "119315": N119315
    b68: B68
    c01: C01
    c1r: C1r
    p0c1r: P0c1r
  }
  
  export interface N104300 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N105352 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119314 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119315 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B68 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C01 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1r {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0c1r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0016 {
    paintSwatch: PaintSwatch14
    mapped: Mapped14
  }
  
  export interface PaintSwatch14 {
    primary: Primary14
  }
  
  export interface Primary14 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped14 {
    "5677": N5677
    "62679": N62679
    "68700": N68700
    "73400": N73400
    "88415": N88415
    "95068": N95068
    "117803": N117803
    "121919": N121919
    "122399": N122399
    "132075": N132075
    "135131": N135131
    "135360": N135360
    "139782": N139782
    "141205": N141205
    "141210": N141210
    "145038": N145038
    "145610": N145610
    "152071": N152071
    "152286": N152286
    "154952": N154952
    "155032": N155032
    "178514": N178514
    "27685844": N27685844
    "29540537": N29540537
    "29736186": N29736186
    "29740268": N29740268
    "30646086": N30646086
    "30647326": N30647326
    "30652200": N30652200
    "30653442": N30653442
    "30655631": N30655631
    "30788255": N30788255
    "30788560": N30788560
    "30791117": N30791117
    "30791299": N30791299
    "30791965": N30791965
    "30791969": N30791969
    "30791973": N30791973
    "30814911": N30814911
    "30814913": N30814913
    "30815210": N30815210
    "30815212": N30815212
    "30869283": N30869283
    "31085833": N31085833
    "31498434": N31498434
    "31498565": N31498565
    "32275072": N32275072
    "32275156": N32275156
    "32275167": N32275167
    "32276848": N32276848
    "32277762": N32277762
    "32278246": N32278246
    "32278593": N32278593
    "32279013": N32279013
    "32305392": N32305392
    "32324061": N32324061
    "32548219": N32548219
    "32707620": N32707620
    "32707623": N32707623
    "32717048": N32717048
    "32850884": N32850884
    "021846-tansanitblau": N021846Tansanitblau
    "112459-m-portimao-blau": N112459MPortimaoBlau
    "12273f-bmw-individual-tansanitblau-ii": N12273fBmwIndividualTansanitblauIi
    "172a4c-tansanitblau-ii-metallic": N172a4cTansanitblauIiMetallic
    "19436b-phytonicblau-metallise": N19436bPhytonicblauMetallise
    a76: A76
    "bmm-0c6dctb": Bmm0c6dctb
    "bmm-18486tb": Bmm18486tb
    "bmm-1f495tb": Bmm1f495tb
    "bmm-29fbftb": Bmm29fbftb
    "bmm-34fc5mpb": Bmm34fc5mpb
    "bmm-3d86dpb": Bmm3d86dpb
    "bmm-76eb8tbi": Bmm76eb8tbi
    "bmm-8fd75pb": Bmm8fd75pb
    "bmm-95c77tb-bi": Bmm95c77tbBi
    "bmm-97d80tb": Bmm97d80tb
    "bmm-a2ae4pb": BmmA2ae4pb
    "bmm-bmab-tb": BmmBmabTb
    "bmm-c4bd3pb": BmmC4bd3pb
    "bmm-c7dbetb": BmmC7dbetb
    "bmm-f98b3mb": BmmF98b3mb
    "bmsp-453fcbiptb": Bmsp453fcbiptb
    "bmsp-4f99cb2ipt": Bmsp4f99cb2ipt
    "bmsp-64c5ebimpt": Bmsp64c5ebimpt
    "bmsp-7a0f8tb": Bmsp7a0f8tb
    "bmsp-84a5etb": Bmsp84a5etb
    "bmsp-a08c5tb": BmspA08c5tb
    "bmsp-b2221tb": BmspB2221tb
    "bmsp-b5b40bimpt": BmspB5b40bimpt
    "bmsp-f9338tbip": BmspF9338tbip
    c10: C10
    customoption1mre87iv84g: Customoption1mre87iv84g
    customoption37: Customoption37
    customoption39ka4nl6735: Customoption39ka4nl6735
    customoption4ll8nv1kgiq: Customoption4ll8nv1kgiq
    customoption4ys4c4yh9j2: Customoption4ys4c4yh9j2
    customoption6cffk3b254v: Customoption6cffk3b254v
    customoption72gmvdqd434: Customoption72gmvdqd434
    customoption7hff0l4rjhq: Customoption7hff0l4rjhq
    customoption7smd1sjl5p: Customoption7smd1sjl5p
    customoption86z0ps9czym: Customoption86z0ps9czym
    customoptioneepp9futk6g: Customoptioneepp9futk6g
    customoptionezk9lek1ltd: Customoptionezk9lek1ltd
    customoptiong3x44m8vvaj: Customoptiong3x44m8vvaj
    customoptioni6z73lzqzhl: Customoptioni6z73lzqzhl
    customoptionjmd2sal12l: Customoptionjmd2sal12l
    customoptionjtprksnu4l9: Customoptionjtprksnu4l9
    customoptionjxlwdqdfppc: Customoptionjxlwdqdfppc
    customoptionk5npsno12rmx: Customoptionk5npsno12rmx
    customoptionkvlg153pkq: Customoptionkvlg153pkq
    customoptionljwcx8bbqnd: Customoptionljwcx8bbqnd
    customoptionm9oh0fti1a: Customoptionm9oh0fti1a
    customoptionmk741ctrbld: Customoptionmk741ctrbld
    customoptionnaqozm0a2f: Customoptionnaqozm0a2f
    customoptionnxrb91blgak: Customoptionnxrb91blgak
    customoptionp8dn64z8x3: Customoptionp8dn64z8x3
    customoptionpac5bomv7n: Customoptionpac5bomv7n
    customoptionqidk51ldstb: Customoptionqidk51ldstb
    customoptionqnkyn5ttaf: Customoptionqnkyn5ttaf
    customoptionris65eom0m: Customoptionris65eom0m
    customoptionrpmq7z0xnvt: Customoptionrpmq7z0xnvt
    customoptionrvgs2rcdm9: Customoptionrvgs2rcdm9
    customoptiont3xzsy9kv4d: Customoptiont3xzsy9kv4d
    customoptiont8aixad0od: Customoptiont8aixad0od
    customoptionua0oii0dffs: Customoptionua0oii0dffs
    customoptionv61oin8zbl: Customoptionv61oin8zbl
    customoptionvn5uua1cvgf: Customoptionvn5uua1cvgf
    customoptionvys9phku83: Customoptionvys9phku83
    customoptionxti6q2nb3je: Customoptionxti6q2nb3je
    customoptionymawx43rseb: Customoptionymawx43rseb
    customoptionyp0lhxn1fsi: Customoptionyp0lhxn1fsi
    customoptionz5peordnyj: Customoptionz5peordnyj
    jatoc31: Jatoc31
    p0b51: P0b51
    p0c10: P0c10
    p0c3z: P0c3z
    p0x10: P0x10
    x10: X10
  }
  
  export interface N5677 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N62679 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N68700 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73400 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N88415 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N95068 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N117803 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N121919 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N122399 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N132075 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135131 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135360 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139782 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N141205 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N141210 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145038 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145610 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152071 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152286 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N154952 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155032 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N178514 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685844 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29540537 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29736186 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29740268 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30646086 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647326 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652200 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653442 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655631 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788255 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788560 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791117 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791299 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791965 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791969 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791973 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814911 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814913 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815210 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815212 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30869283 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31085833 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498434 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498565 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275072 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275156 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275167 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276848 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32277762 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278246 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278593 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32279013 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305392 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32324061 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548219 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707620 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707623 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717048 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850884 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N021846Tansanitblau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N112459MPortimaoBlau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N12273fBmwIndividualTansanitblauIi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N172a4cTansanitblauIiMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N19436bPhytonicblauMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A76 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm0c6dctb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm18486tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm1f495tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm29fbftb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm34fc5mpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3d86dpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm76eb8tbi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm8fd75pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm95c77tbBi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm97d80tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA2ae4pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBmabTb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmC4bd3pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmC7dbetb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF98b3mb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp453fcbiptb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp4f99cb2ipt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp64c5ebimpt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp7a0f8tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp84a5etb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspA08c5tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspB2221tb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspB5b40bimpt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspF9338tbip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C10 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1mre87iv84g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption37 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption39ka4nl6735 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4ll8nv1kgiq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4ys4c4yh9j2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6cffk3b254v {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption72gmvdqd434 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7hff0l4rjhq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7smd1sjl5p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption86z0ps9czym {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioneepp9futk6g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionezk9lek1ltd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiong3x44m8vvaj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioni6z73lzqzhl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjmd2sal12l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjtprksnu4l9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjxlwdqdfppc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionk5npsno12rmx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkvlg153pkq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionljwcx8bbqnd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionm9oh0fti1a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmk741ctrbld {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnaqozm0a2f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnxrb91blgak {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionp8dn64z8x3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpac5bomv7n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqidk51ldstb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqnkyn5ttaf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionris65eom0m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrpmq7z0xnvt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrvgs2rcdm9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiont3xzsy9kv4d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiont8aixad0od {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionua0oii0dffs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv61oin8zbl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvn5uua1cvgf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvys9phku83 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxti6q2nb3je {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionymawx43rseb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyp0lhxn1fsi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionz5peordnyj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatoc31 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b51 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c10 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3z {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0x10 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X10 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0019 {
    paintSwatch: PaintSwatch15
    mapped: Mapped15
  }
  
  export interface PaintSwatch15 {
    primary: Primary15
  }
  
  export interface Primary15 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped15 {
    "88360": N88360
    "96170": N96170
    "100454": N100454
    "139780": N139780
    "490g": N490g
    b06: B06
    p0b53: P0b53
    p0x11: P0x11
    x11: X11
  }
  
  export interface N88360 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N96170 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N100454 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139780 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B06 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b53 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x11 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X11 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0020 {
    paintSwatch: PaintSwatch16
    mapped: Mapped16
  }
  
  export interface PaintSwatch16 {
    primary: Primary16
  }
  
  export interface Primary16 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped16 {
    "4601": N4601
    "157629": N157629
    "bmm-2da15iomg": Bmm2da15iomg
    "bmm-ac281iomg": BmmAc281iomg
    c4g: C4g
    p0c4g: P0c4g
  }
  
  export interface N4601 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N157629 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm2da15iomg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAc281iomg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C4g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0021 {
    paintSwatch: PaintSwatch17
    mapped: Mapped17
  }
  
  export interface PaintSwatch17 {
    primary: Primary17
  }
  
  export interface Primary17 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped17 {
    "84376": N84376
    "158102": N158102
    "161833": N161833
    "176808": N176808
    "30814907": N30814907
    "30815207": N30815207
    "32305575": N32305575
    "32312703": N32312703
    "32341750": N32341750
    "32710649": N32710649
    "32723294": N32723294
    "32850471": N32850471
    "232910-sanremo-green-metallic": N232910SanremoGreenMetallic
    "232910-sanremo-green-metallise": N232910SanremoGreenMetallise
    "bmm-0eafasg": Bmm0eafasg
    "bmm-21786sg": Bmm21786sg
    "bmm-7c878sg": Bmm7c878sg
    "bmm-b861dsg": BmmB861dsg
    "bmm-cf983sg": BmmCf983sg
    "bmm-f92bfsg": BmmF92bfsg
    customoptionsx732iv51r: Customoptionsx732iv51r
    customoptionz2a1dt9lpdd: Customoptionz2a1dt9lpdd
    p0205: P0205
    p0490f: P0490f
    p0a04: P0a04
    p0c4e: P0c4e
  }
  
  export interface N84376 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N158102 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N161833 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N176808 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814907 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815207 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305575 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32312703 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341750 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32710649 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723294 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850471 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N232910SanremoGreenMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N232910SanremoGreenMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm0eafasg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm21786sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7c878sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB861dsg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmCf983sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF92bfsg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsx732iv51r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionz2a1dt9lpdd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0205 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a04 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0022 {
    paintSwatch: PaintSwatch18
    mapped: Mapped18
  }
  
  export interface PaintSwatch18 {
    primary: Primary18
  }
  
  export interface Primary18 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped18 {
    "93856": N93856
    "135437": N135437
    "145037": N145037
    "152285": N152285
    "30649606": N30649606
    "30652201": N30652201
    "5c5650-bmw-individual-champagner-quartz": N5c5650BmwIndividualChampagnerQuartz
    "60574f-champagner-quartz": N60574fChampagnerQuartz
    customoption3dzbc4kp1tu: Customoption3dzbc4kp1tu
    customoption7ecy6gl9ll: Customoption7ecy6gl9ll
    customoptionjn5v1b59g5: Customoptionjn5v1b59g5
    customoptionr78phsf714e: Customoptionr78phsf714e
    customoptiontsn587d3one: Customoptiontsn587d3one
    customoptionv5bzf0lllzs: Customoptionv5bzf0lllzs
    p0c3e: P0c3e
    p0x08: P0x08
    x08: X08
  }
  
  export interface N93856 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135437 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145037 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152285 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649606 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652201 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5c5650BmwIndividualChampagnerQuartz {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N60574fChampagnerQuartz {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3dzbc4kp1tu {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ecy6gl9ll {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjn5v1b59g5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr78phsf714e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontsn587d3one {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv5bzf0lllzs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x08 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X08 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0023 {
    paintSwatch: PaintSwatch19
    mapped: Mapped19
  }
  
  export interface PaintSwatch19 {
    primary: Primary19
  }
  
  export interface Primary19 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped19 {
    customoptionqh24ti1qb7k: Customoptionqh24ti1qb7k
    customoptionwc820f8w1hr: Customoptionwc820f8w1hr
    customoptionwgsq446r2vr: Customoptionwgsq446r2vr
  }
  
  export interface Customoptionqh24ti1qb7k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwc820f8w1hr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwgsq446r2vr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0023sspc0016 {
    paintSwatch: PaintSwatch20
    mapped: Mapped20
  }
  
  export interface PaintSwatch20 {
    secondary: Secondary4
    primary: Primary20
  }
  
  export interface Secondary4 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary20 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped20 {
    "130382": N130382
    b39b94: B39b94
    p0c2v: P0c2v
  }
  
  export interface N130382 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B39b94 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0c2v {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0024 {
    paintSwatch: PaintSwatch21
    mapped: Mapped21
  }
  
  export interface PaintSwatch21 {
    primary: Primary21
  }
  
  export interface Primary21 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped21 {
    "10706": N10706
    "56262": N56262
    "100661": N100661
    pa005: Pa005
  }
  
  export interface N10706 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N56262 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N100661 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa005 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0024sspc0004 {
    paintSwatch: PaintSwatch22
    mapped: Mapped22
  }
  
  export interface PaintSwatch22 {
    primary: Primary22
    secondary: Secondary5
  }
  
  export interface Primary22 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary5 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped22 {
    "163225": N163225
    "163226": N163226
  }
  
  export interface N163225 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N163226 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0025 {
    paintSwatch: PaintSwatch23
    mapped: Mapped23
  }
  
  export interface PaintSwatch23 {
    primary: Primary23
  }
  
  export interface Primary23 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped23 {
    "94900": N94900
    "101109": N101109
    "166208": N166208
    "166448": N166448
    b41: B41
    c09: C09
    customoption9fl4g2cvli: Customoption9fl4g2cvli
    p0490a: P0490a
    p0490d: P0490d
    p0b41: P0b41
    p0c64: P0c64
    p0p7x: P0p7x
    pa03: Pa03
  }
  
  export interface N94900 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N101109 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N166208 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N166448 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B41 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C09 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9fl4g2cvli {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b41 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c64 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p7x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa03 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0026 {
    paintSwatch: PaintSwatch24
    mapped: Mapped24
  }
  
  export interface PaintSwatch24 {
    primary: Primary24
  }
  
  export interface Primary24 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped24 {
    "80336": N80336
    "94919": N94919
    "155438": N155438
    "174425": N174425
    "174548": N174548
    "177453": N177453
    "178458": N178458
    "179306": N179306
    "31196300": N31196300
    "31199778": N31199778
    "32341756": N32341756
    "32548227": N32548227
    "2163207087": N2163207087
    "3e3f3a-frozen-grey-ii": N3e3f3aFrozenGreyIi
    "490b": N490b
    "bmsp-5be29bipfp": Bmsp5be29bipfp
    "bmsp-c9b8afg": BmspC9b8afg
    "bmsp-fd33dfpg": BmspFd33dfpg
    jatop0490a: Jatop0490a
    p0c37: P0c37
    p0c44: P0c44
    p0c55: P0c55
    p0x1f: P0x1f
  }
  
  export interface N80336 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N94919 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155438 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N174425 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N174548 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N177453 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N178458 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N179306 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31196300 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199778 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341756 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548227 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2163207087 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3e3f3aFrozenGreyIi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp5be29bipfp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspC9b8afg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspFd33dfpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatop0490a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c37 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c44 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c55 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x1f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0027 {
    paintSwatch: PaintSwatch25
    mapped: Mapped25
  }
  
  export interface PaintSwatch25 {
    primary: Primary25
  }
  
  export interface Primary25 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped25 {
    "11373": N11373
    "122709": N122709
    "31794727": N31794727
    "31925691": N31925691
    "5e5f59-berninagrau-metallic": N5e5f59BerninagrauMetallic
    c2v: C2v
    customoption0p63dikeu8eo: Customoption0p63dikeu8eo
    customoptioncp5rkh2janw: Customoptioncp5rkh2janw
    p0p6n: P0p6n
  }
  
  export interface N11373 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N122709 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31794727 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31925691 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5e5f59BerninagrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2v {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0p63dikeu8eo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncp5rkh2janw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p6n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0028 {
    paintSwatch: PaintSwatch26
    mapped: Mapped26
  }
  
  export interface PaintSwatch26 {
    primary: Primary26
  }
  
  export interface Primary26 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped26 {
    "157716": N157716
    "177954": N177954
    "28934247": N28934247
    "30049467": N30049467
    "30051863": N30051863
    "30647284": N30647284
    "30652154": N30652154
    "31498603": N31498603
    "31501610": N31501610
    "32268964": N32268964
    "32284480": N32284480
    b39: B39
    "bmm-057b0sg": Bmm057b0sg
    "bmm-b68b4sg": BmmB68b4sg
    "bmm-bmaa-sg": BmmBmaaSg
    "bmm-d8188sg": BmmD8188sg
    "bmm-e3b95mg": BmmE3b95mg
    "bmsp-1a4febipfd": Bmsp1a4febipfd
    c08: C08
    customoption0a065ns7w6sd: Customoption0a065ns7w6sd
    customoption0biqmlm7fhzp: Customoption0biqmlm7fhzp
    customoption0qc9z73dy9pg: Customoption0qc9z73dy9pg
    customoption0ugzt6mozqvc: Customoption0ugzt6mozqvc
    customoption1983l1cl1el: Customoption1983l1cl1el
    customoption1dgxwfagbe8: Customoption1dgxwfagbe8
    customoption1ujhcpdg5e: Customoption1ujhcpdg5e
    customoption214k1cqkj8p: Customoption214k1cqkj8p
    customoption24moa4wou1h: Customoption24moa4wou1h
    customoption25xrziwbejl: Customoption25xrziwbejl
    customoption2kzrzsfwnyj: Customoption2kzrzsfwnyj
    customoption2rrkwet9awo: Customoption2rrkwet9awo
    customoption35: Customoption35
    customoption35aks5fpezw: Customoption35aks5fpezw
    customoption3bwqez86fly: Customoption3bwqez86fly
    customoption3e1ffycl6yd: Customoption3e1ffycl6yd
    customoption41: Customoption41
    customoption4aibols83ci: Customoption4aibols83ci
    customoption4b9la3t2vfu: Customoption4b9la3t2vfu
    customoption4ijsrhbbg95: Customoption4ijsrhbbg95
    customoption4ntg2xjjlqs: Customoption4ntg2xjjlqs
    customoption4uxmyj1svwn: Customoption4uxmyj1svwn
    customoption4yj5103hexs: Customoption4yj5103hexs
    customoption526uurqgbg: Customoption526uurqgbg
    customoption55xd8c4wnji: Customoption55xd8c4wnji
    customoption5hikej1ngb6: Customoption5hikej1ngb6
    customoption5ngb2vxrtjw: Customoption5ngb2vxrtjw
    customoption5q09uasexgn: Customoption5q09uasexgn
    customoption63d11amdmcu: Customoption63d11amdmcu
    customoption64armibnu5: Customoption64armibnu5
    customoption69qqqoyflnl: Customoption69qqqoyflnl
    customoption6cz2qw4l34l: Customoption6cz2qw4l34l
    customoption6oakev4tb8l: Customoption6oakev4tb8l
    customoption6wfcsjrwc2n: Customoption6wfcsjrwc2n
    customoption6zmi9doccdg: Customoption6zmi9doccdg
    customoption7ddknw8ddhs: Customoption7ddknw8ddhs
    customoption7lzim1q2g6u: Customoption7lzim1q2g6u
    customoption7oz4zi02ubx: Customoption7oz4zi02ubx
    customoption84i8thhlbsa: Customoption84i8thhlbsa
    customoption85y205qyfhx: Customoption85y205qyfhx
    customoption86nxeh3h2eb: Customoption86nxeh3h2eb
    customoption8hge3s0gctb: Customoption8hge3s0gctb
    customoption8jep7d6ax6f: Customoption8jep7d6ax6f
    customoption8jw9l5s1233: Customoption8jw9l5s1233
    customoption8n7c577n0zt: Customoption8n7c577n0zt
    customoption8txm7l0dwkb: Customoption8txm7l0dwkb
    customoption9743kk840n6: Customoption9743kk840n6
    customoption98r9aojd0r9: Customoption98r9aojd0r9
    customoption9ezwxrsxs8j: Customoption9ezwxrsxs8j
    customoption9ua5utzy2hs: Customoption9ua5utzy2hs
    customoption9ycng9ndqem: Customoption9ycng9ndqem
    customoptionaic6edw4p47: Customoptionaic6edw4p47
    customoptionaimi6wr772: Customoptionaimi6wr772
    customoptionaj1qkwf8us: Customoptionaj1qkwf8us
    customoptionaj2vvmzx9k: Customoptionaj2vvmzx9k
    customoptionalw2ycsfhv7: Customoptionalw2ycsfhv7
    customoptionamb5qw6o02j: Customoptionamb5qw6o02j
    customoptionbf5l9psl4ms: Customoptionbf5l9psl4ms
    customoptionbpjtwj0zqc9: Customoptionbpjtwj0zqc9
    customoptionbssvimridme: Customoptionbssvimridme
    customoptioncfabrnvmyg: Customoptioncfabrnvmyg
    customoptioncgpy5uclxwt: Customoptioncgpy5uclxwt
    customoptioncvccavccuei: Customoptioncvccavccuei
    customoptioncvpo3se6hs: Customoptioncvpo3se6hs
    customoptiond3ywl4xxj6: Customoptiond3ywl4xxj6
    customoptiondlec7nuguvj: Customoptiondlec7nuguvj
    customoptione89vgeql4ew: Customoptione89vgeql4ew
    customoptioneelhq2n1bcd: Customoptioneelhq2n1bcd
    customoptionernpmseooh9: Customoptionernpmseooh9
    customoptionextlwbdk5ku: Customoptionextlwbdk5ku
    customoptionexvh0y7ds3u: Customoptionexvh0y7ds3u
    customoptionf44r9kwurot: Customoptionf44r9kwurot
    customoptionfdqokqfbdw: Customoptionfdqokqfbdw
    customoptionfe19cig7asv: Customoptionfe19cig7asv
    customoptionfi5yo1xj5dn: Customoptionfi5yo1xj5dn
    customoptiongazwncy7tv8: Customoptiongazwncy7tv8
    customoptiongfand81szka: Customoptiongfand81szka
    customoptionglweh3tsqzl: Customoptionglweh3tsqzl
    customoptiongvcd85olo7: Customoptiongvcd85olo7
    customoptiongxsyhc7s03: Customoptiongxsyhc7s03
    customoptionh110y0ik2u9: Customoptionh110y0ik2u9
    customoptionh8brj5a072: Customoptionh8brj5a072
    customoptionhj5f2n36mx: Customoptionhj5f2n36mx
    customoptionhq8rs3dzi5h: Customoptionhq8rs3dzi5h
    customoptionhs9a78xnmpe: Customoptionhs9a78xnmpe
    customoptionip19l31p6w: Customoptionip19l31p6w
    customoptionit2tro0wfv: Customoptionit2tro0wfv
    customoptionixjpho1wef: Customoptionixjpho1wef
    customoptionj133ddjkmhj: Customoptionj133ddjkmhj
    customoptionj4tzvx6pji: Customoptionj4tzvx6pji
    customoptionjiefmk4y76: Customoptionjiefmk4y76
    customoptionjowft2lgde: Customoptionjowft2lgde
    customoptionkcc61ddhbt: Customoptionkcc61ddhbt
    customoptionksp2wk8at: Customoptionksp2wk8at
    customoptionkvglbr7mus: Customoptionkvglbr7mus
    customoptionl0ovy6ckbnm: Customoptionl0ovy6ckbnm
    customoptionl5p997mf9r: Customoptionl5p997mf9r
    customoptionmam5rveunnl: Customoptionmam5rveunnl
    customoptionmidaz6kecj: Customoptionmidaz6kecj
    customoptionmoxohd2am3q: Customoptionmoxohd2am3q
    customoptionn67sce8o6z: Customoptionn67sce8o6z
    customoptionnqqixmf3wzc: Customoptionnqqixmf3wzc
    customoptiono73iexry5zl: Customoptiono73iexry5zl
    customoptionosfehg9jru: Customoptionosfehg9jru
    customoptionowdhxkl5rjj: Customoptionowdhxkl5rjj
    customoptionpimm60226t: Customoptionpimm60226t
    customoptionprn71rxrpn: Customoptionprn71rxrpn
    customoptionq3nje8qqjui: Customoptionq3nje8qqjui
    customoptionqe3yy0ve4sl: Customoptionqe3yy0ve4sl
    customoptionqq02zrz6ojf: Customoptionqq02zrz6ojf
    customoptionrcb0tetldg: Customoptionrcb0tetldg
    customoptionrjr68lsrzy: Customoptionrjr68lsrzy
    customoptionrkvt9wysogh: Customoptionrkvt9wysogh
    customoptionrxk98m2zzf: Customoptionrxk98m2zzf
    customoptionryba1k9npq: Customoptionryba1k9npq
    customoptionsyhrwlj15a: Customoptionsyhrwlj15a
    customoptiont30mbf5wfht: Customoptiont30mbf5wfht
    customoptiont71qygcdktl: Customoptiont71qygcdktl
    customoptionth5cem2llpk: Customoptionth5cem2llpk
    customoptionubj59jp2xee: Customoptionubj59jp2xee
    customoptionuc0mtlkoh3: Customoptionuc0mtlkoh3
    customoptionumbyyu7kteb: Customoptionumbyyu7kteb
    customoptionuzjhr5mqbv: Customoptionuzjhr5mqbv
    customoptionv02as10pvvb: Customoptionv02as10pvvb
    customoptionv84jst45cjr: Customoptionv84jst45cjr
    customoptionvfmol3thdnk: Customoptionvfmol3thdnk
    customoptionvm508d2hg9: Customoptionvm508d2hg9
    customoptionvqslwq3hmr: Customoptionvqslwq3hmr
    customoptionvvi81t722z: Customoptionvvi81t722z
    customoptionw1ztcdha578: Customoptionw1ztcdha578
    customoptionw58pf01di9: Customoptionw58pf01di9
    customoptionw632b12nf9l: Customoptionw632b12nf9l
    customoptionwa5wc4ap9dn: Customoptionwa5wc4ap9dn
    customoptionwgprmc6gn2k: Customoptionwgprmc6gn2k
    customoptionwi9z6rokyc: Customoptionwi9z6rokyc
    customoptionwko30b2jr9: Customoptionwko30b2jr9
    customoptionwlne9ovm1w: Customoptionwlne9ovm1w
    customoptionwomuvolbd2q: Customoptionwomuvolbd2q
    customoptionwqypheus5jf: Customoptionwqypheus5jf
    customoptionwx69susihxe: Customoptionwx69susihxe
    customoptionx5wbbbeojq: Customoptionx5wbbbeojq
    customoptionx6fwf9lydf7: Customoptionx6fwf9lydf7
    customoptionx8l642ftd7: Customoptionx8l642ftd7
    customoptionxf3gd4ajd28: Customoptionxf3gd4ajd28
    customoptionxv6srnhmep: Customoptionxv6srnhmep
    customoptiony6pc5nj798o: Customoptiony6pc5nj798o
    customoptiony78474bnh3n: Customoptiony78474bnh3n
    customoptionym9xhlk1cnk: Customoptionym9xhlk1cnk
    customoptionyuytbsykogn: Customoptionyuytbsykogn
    customoptionzby7mo8kd7: Customoptionzby7mo8kd7
    customoptionzn9it1f8sqo: Customoptionzn9it1f8sqo
    jatoc3n: Jatoc3n
    p0c08: P0c08
  }
  
  export interface N157716 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N177954 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934247 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30049467 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051863 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647284 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652154 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498603 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501610 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32268964 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32284480 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm057b0sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB68b4sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBmaaSg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmD8188sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmE3b95mg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp1a4febipfd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C08 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0a065ns7w6sd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0biqmlm7fhzp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0qc9z73dy9pg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0ugzt6mozqvc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1983l1cl1el {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1dgxwfagbe8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1ujhcpdg5e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption214k1cqkj8p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption24moa4wou1h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption25xrziwbejl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2kzrzsfwnyj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2rrkwet9awo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption35 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption35aks5fpezw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3bwqez86fly {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3e1ffycl6yd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption41 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4aibols83ci {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4b9la3t2vfu {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4ijsrhbbg95 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4ntg2xjjlqs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4uxmyj1svwn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4yj5103hexs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption526uurqgbg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption55xd8c4wnji {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5hikej1ngb6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5ngb2vxrtjw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5q09uasexgn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption63d11amdmcu {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption64armibnu5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption69qqqoyflnl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6cz2qw4l34l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6oakev4tb8l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6wfcsjrwc2n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6zmi9doccdg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ddknw8ddhs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7lzim1q2g6u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7oz4zi02ubx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption84i8thhlbsa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption85y205qyfhx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption86nxeh3h2eb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8hge3s0gctb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8jep7d6ax6f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8jw9l5s1233 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8n7c577n0zt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8txm7l0dwkb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9743kk840n6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption98r9aojd0r9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9ezwxrsxs8j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9ua5utzy2hs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9ycng9ndqem {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaic6edw4p47 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaimi6wr772 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaj1qkwf8us {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaj2vvmzx9k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionalw2ycsfhv7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionamb5qw6o02j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbf5l9psl4ms {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbpjtwj0zqc9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbssvimridme {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncfabrnvmyg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncgpy5uclxwt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncvccavccuei {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncvpo3se6hs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiond3ywl4xxj6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondlec7nuguvj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptione89vgeql4ew {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioneelhq2n1bcd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionernpmseooh9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionextlwbdk5ku {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionexvh0y7ds3u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf44r9kwurot {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfdqokqfbdw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfe19cig7asv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfi5yo1xj5dn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongazwncy7tv8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongfand81szka {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionglweh3tsqzl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongvcd85olo7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongxsyhc7s03 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionh110y0ik2u9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionh8brj5a072 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhj5f2n36mx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhq8rs3dzi5h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhs9a78xnmpe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionip19l31p6w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionit2tro0wfv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionixjpho1wef {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionj133ddjkmhj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionj4tzvx6pji {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjiefmk4y76 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjowft2lgde {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkcc61ddhbt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionksp2wk8at {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkvglbr7mus {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionl0ovy6ckbnm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionl5p997mf9r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmam5rveunnl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmidaz6kecj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmoxohd2am3q {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionn67sce8o6z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnqqixmf3wzc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiono73iexry5zl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionosfehg9jru {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionowdhxkl5rjj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpimm60226t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionprn71rxrpn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionq3nje8qqjui {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqe3yy0ve4sl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqq02zrz6ojf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrcb0tetldg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrjr68lsrzy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrkvt9wysogh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrxk98m2zzf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionryba1k9npq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsyhrwlj15a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiont30mbf5wfht {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiont71qygcdktl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionth5cem2llpk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionubj59jp2xee {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuc0mtlkoh3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionumbyyu7kteb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuzjhr5mqbv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv02as10pvvb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv84jst45cjr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvfmol3thdnk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvm508d2hg9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvqslwq3hmr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvvi81t722z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw1ztcdha578 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw58pf01di9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw632b12nf9l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwa5wc4ap9dn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwgprmc6gn2k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwi9z6rokyc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwko30b2jr9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwlne9ovm1w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwomuvolbd2q {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwqypheus5jf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwx69susihxe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx5wbbbeojq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx6fwf9lydf7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx8l642ftd7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxf3gd4ajd28 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxv6srnhmep {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiony6pc5nj798o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiony78474bnh3n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionym9xhlk1cnk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyuytbsykogn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzby7mo8kd7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzn9it1f8sqo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatoc3n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c08 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0029 {
    paintSwatch: PaintSwatch27
    mapped: Mapped27
  }
  
  export interface PaintSwatch27 {
    primary: Primary27
  }
  
  export interface Primary27 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped27 {
    "76567": N76567
    "116569": N116569
    "139935": N139935
    "140688": N140688
    "140876": N140876
    "152488": N152488
    "30645531": N30645531
    "30648508": N30648508
    "30649527": N30649527
    "30651478": N30651478
    "31514883": N31514883
    "32341754": N32341754
    "32723299": N32723299
    "32736459": N32736459
    "32736463": N32736463
    "32850474": N32850474
    "32850888": N32850888
    "490h": N490h
    "73787d-bluestone-metallic": N73787dBluestoneMetallic
    "73787d-bluestone-metallise": N73787dBluestoneMetallise
    a52: A52
    "bmm-459ecb": Bmm459ecb
    "bmm-a095bbm": BmmA095bbm
    "bmm-re-sg": BmmReSg
    c2y: C2y
    customoption2zs9aegbggb: Customoption2zs9aegbggb
    p0a52: P0a52
    p0c2y: P0c2y
    p0x1d: P0x1d
    pa006: Pa006
  }
  
  export interface N76567 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N116569 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139935 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140688 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140876 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152488 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30645531 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30648508 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649527 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30651478 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31514883 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341754 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723299 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32736459 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32736463 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850474 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850888 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73787dBluestoneMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73787dBluestoneMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A52 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm459ecb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA095bbm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmReSg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2zs9aegbggb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a52 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c2y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x1d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa006 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0030 {
    paintSwatch: PaintSwatch28
    mapped: Mapped28
  }
  
  export interface PaintSwatch28 {
    primary: Primary28
  }
  
  export interface Primary28 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped28 {
    "140534": N140534
    "3a3a3a-m-brands-hatch-grau-metallic": N3a3a3aMBrandsHatchGrauMetallic
    "3b3b3b-m-brands-hatch-grau": N3b3b3bMBrandsHatchGrau
    "5b5b5b-brands-hatch-grau": N5b5b5bBrandsHatchGrau
    c17: C17
    p0c17: P0c17
  }
  
  export interface N140534 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3a3a3aMBrandsHatchGrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3b3b3bMBrandsHatchGrau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5b5b5bBrandsHatchGrau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C17 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c17 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0031 {
    paintSwatch: PaintSwatch29
    mapped: Mapped29
  }
  
  export interface PaintSwatch29 {
    primary: Primary29
  }
  
  export interface Primary29 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped29 {
    "20558": N20558
    "157630": N157630
    "166310": N166310
    "30649889": N30649889
    "30653433": N30653433
    "30655622": N30655622
    "30787949": N30787949
    "30791273": N30791273
    "30814908": N30814908
    "30815208": N30815208
    "31085808": N31085808
    "7e8789-m-brooklyn-grau": N7e8789MBrooklynGrau
    c4p: C4p
    customoption0eo8611zoey: Customoption0eo8611zoey
    customoption0jz3hi9sww9d: Customoption0jz3hi9sww9d
    customoption1btoqj4cghl: Customoption1btoqj4cghl
    customoption31: Customoption31
    customoption34: Customoption34
    customoption42: Customoption42
    customoption44: Customoption44
    customoption46: Customoption46
    customoption52: Customoption52
    customoption59h1fz1bpri: Customoption59h1fz1bpri
    customoption6veigjlwe2h: Customoption6veigjlwe2h
    customoptionbwgrn4wxdyr: Customoptionbwgrn4wxdyr
    customoptioncnvq1v0wsmt: Customoptioncnvq1v0wsmt
    customoptiond2ib4870saq: Customoptiond2ib4870saq
    customoptiond9sogrrhn5l: Customoptiond9sogrrhn5l
    customoptiondf6br87as6g: Customoptiondf6br87as6g
    customoptiondq9n6gsdoqnf: Customoptiondq9n6gsdoqnf
    customoptione8pq3zjk5fb: Customoptione8pq3zjk5fb
    customoptionexo9pi3e00a: Customoptionexo9pi3e00a
    customoptionf870m6wcetv: Customoptionf870m6wcetv
    customoptionf9y2l1d30yq: Customoptionf9y2l1d30yq
    customoptiongqn0uislpc: Customoptiongqn0uislpc
    customoptionhhs8nq4ymsr: Customoptionhhs8nq4ymsr
    customoptionhhwqgnv3ytg: Customoptionhhwqgnv3ytg
    customoptionhwu7ibo0wha: Customoptionhwu7ibo0wha
    customoptioniz8n0nhqzk: Customoptioniz8n0nhqzk
    customoptionj71tcjsbhe: Customoptionj71tcjsbhe
    customoptionm4letox8t9na: Customoptionm4letox8t9na
    customoptionmkwj0gyk9qm: Customoptionmkwj0gyk9qm
    customoptionn73cejbxl7: Customoptionn73cejbxl7
    customoptiono4tevtohqji: Customoptiono4tevtohqji
    customoptionpll5hav4gz: Customoptionpll5hav4gz
    customoptionrgi1k7zwq7: Customoptionrgi1k7zwq7
    customoptionrpyqyaiwck9: Customoptionrpyqyaiwck9
    customoptionskb12xtwwlo: Customoptionskb12xtwwlo
    customoptiont7slmfqnwii: Customoptiont7slmfqnwii
    customoptiontk0bl3pga4: Customoptiontk0bl3pga4
    customoptiontmg52u2hrbb: Customoptiontmg52u2hrbb
    customoptionuu59hz0swpn: Customoptionuu59hz0swpn
    customoptionw3ug2p2sxko: Customoptionw3ug2p2sxko
    customoptionwjen1uqadrl: Customoptionwjen1uqadrl
    customoptionwjuix86jo2a: Customoptionwjuix86jo2a
    customoptionyld19scdywc: Customoptionyld19scdywc
    customoptionz862r3ibpq: Customoptionz862r3ibpq
    customoptionzfpxvmc9p9f: Customoptionzfpxvmc9p9f
    customoptionzod00r2971k: Customoptionzod00r2971k
    customoptionzs84338xd08: Customoptionzs84338xd08
    p0b39: P0b39
    p0c4p: P0c4p
    p0c4w: P0c4w
  }
  
  export interface N20558 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N157630 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N166310 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649889 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653433 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655622 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30787949 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791273 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814908 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815208 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31085808 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N7e8789MBrooklynGrau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C4p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0eo8611zoey {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0jz3hi9sww9d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1btoqj4cghl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption31 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption34 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption42 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption44 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption46 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption52 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption59h1fz1bpri {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6veigjlwe2h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbwgrn4wxdyr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncnvq1v0wsmt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiond2ib4870saq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiond9sogrrhn5l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondf6br87as6g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondq9n6gsdoqnf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptione8pq3zjk5fb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionexo9pi3e00a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf870m6wcetv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf9y2l1d30yq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongqn0uislpc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhhs8nq4ymsr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhhwqgnv3ytg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhwu7ibo0wha {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioniz8n0nhqzk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionj71tcjsbhe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionm4letox8t9na {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmkwj0gyk9qm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionn73cejbxl7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiono4tevtohqji {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpll5hav4gz {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrgi1k7zwq7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrpyqyaiwck9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionskb12xtwwlo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiont7slmfqnwii {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontk0bl3pga4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontmg52u2hrbb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuu59hz0swpn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw3ug2p2sxko {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwjen1uqadrl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwjuix86jo2a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyld19scdywc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionz862r3ibpq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzfpxvmc9p9f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzod00r2971k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzs84338xd08 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0033 {
    paintSwatch: PaintSwatch30
    mapped: Mapped30
  }
  
  export interface PaintSwatch30 {
    primary: Primary30
  }
  
  export interface Primary30 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped30 {
    "438": N438
    "135007": N135007
    "135438": N135438
    "139779": N139779
    "140689": N140689
    "140979": N140979
    "155190": N155190
    "155439": N155439
    "165484": N165484
    "165589": N165589
    "29740270": N29740270
    "30804567": N30804567
    "30804592": N30804592
    "32558396": N32558396
    "32777221": N32777221
    "bmm-0fa75ar": Bmm0fa75ar
    "bmm-3003bar": Bmm3003bar
    "bmm-335a8ariip": Bmm335a8ariip
    "bmm-9d7depr": Bmm9d7depr
    "bmm-f61edar": BmmF61edar
    "bmsp-1c451ar": Bmsp1c451ar
    "bmsp-1dfceari": Bmsp1dfceari
    "bmsp-3a20eari": Bmsp3a20eari
    "bmsp-89d85ar": Bmsp89d85ar
    "bmsp-d6e81ari": BmspD6e81ari
    "bmsp-e87b9arbip": BmspE87b9arbip
    "bmsp-f2038arip": BmspF2038arip
    "bmsp-f4740bipar": BmspF4740bipar
    "bmsp-f831fari": BmspF831fari
    p0c3c: P0c3c
    p0x1c: P0x1c
  }
  
  export interface N438 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135007 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135438 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139779 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140689 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140979 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155190 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155439 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N165484 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N165589 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29740270 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30804567 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30804592 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32558396 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32777221 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm0fa75ar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3003bar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm335a8ariip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm9d7depr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF61edar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp1c451ar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp1dfceari {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp3a20eari {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp89d85ar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspD6e81ari {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspE87b9arbip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspF2038arip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspF4740bipar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspF831fari {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x1c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0034 {
    paintSwatch: PaintSwatch31
    mapped: Mapped31
  }
  
  export interface PaintSwatch31 {
    primary: Primary31
  }
  
  export interface Primary31 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped31 {
    "4643": N4643
    "30395": N30395
    "40436": N40436
    "61200": N61200
    "72023": N72023
    "80799": N80799
    "83009": N83009
    "106076": N106076
    "130383": N130383
    "133510": N133510
    "163965": N163965
    "30642453": N30642453
    "30655621": N30655621
    "30791963": N30791963
    "30814912": N30814912
    "31085797": N31085797
    "31498411": N31498411
    "31501390": N31501390
    "32275151": N32275151
    "32275152": N32275152
    "32276667": N32276667
    "32278578": N32278578
    "32278987": N32278987
    "32545934": N32545934
    "490j": N490j
    "7d0c00-san-francisco-rot": N7d0c00SanFranciscoRot
    "8a3af": N8a3af
    a75: A75
    a82: A82
    "bmm-04a72mr": Bmm04a72mr
    "bmm-12fe5sfr": Bmm12fe5sfr
    "bmm-181d1fr": Bmm181d1fr
    "bmm-4214barm": Bmm4214barm
    "bmm-78cffsfr": Bmm78cffsfr
    "bmm-7b892ar": Bmm7b892ar
    "bmm-b2g-frx": BmmB2gFrx
    "bmm-b2m-mr": BmmB2mMr
    "bmm-c7691mr": BmmC7691mr
    "bmm-f1dcbmr": BmmF1dcbmr
    c06: C06
    customoptionioih2ex1hpp: Customoptionioih2ex1hpp
    p0a75: P0a75
    p0c06: P0c06
    p0c34: P0c34
    p0c57: P0c57
    p0c6g: P0c6g
    pluto: Pluto
  }
  
  export interface N4643 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30395 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N40436 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N61200 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N72023 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N80799 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N83009 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N106076 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N130383 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N133510 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N163965 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30642453 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655621 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791963 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814912 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31085797 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498411 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501390 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275151 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275152 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276667 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278578 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278987 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32545934 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N7d0c00SanFranciscoRot {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N8a3af {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A75 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A82 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm04a72mr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm12fe5sfr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm181d1fr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4214barm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm78cffsfr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7b892ar {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB2gFrx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB2mMr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmC7691mr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF1dcbmr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C06 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionioih2ex1hpp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a75 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c06 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c34 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c57 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c6g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pluto {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0034sspc0064 {
    paintSwatch: PaintSwatch32
    mapped: Mapped32
  }
  
  export interface PaintSwatch32 {
    primary: Primary32
    secondary: Secondary6
  }
  
  export interface Primary32 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary6 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped32 {
    p0wc57: P0wc57
    p0wc5a: P0wc5a
  }
  
  export interface P0wc57 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0wc5a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0034sspc0119 {
    paintSwatch: PaintSwatch33
    mapped: Mapped33
  }
  
  export interface PaintSwatch33 {
    primary: Primary33
    secondary: Secondary7
  }
  
  export interface Primary33 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary7 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped33 {
    "p0c57:p0c4a": P0c57P0c4a
  }
  
  export interface P0c57P0c4a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0035 {
    paintSwatch: PaintSwatch34
    mapped: Mapped34
  }
  
  export interface PaintSwatch34 {
    primary: Primary34
  }
  
  export interface Primary34 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped34 {
    "93562": N93562
    "96758": N96758
    "114320": N114320
    "140535": N140535
    "672316-motegi-rot-metallic": N672316MotegiRotMetallic
    b50: B50
    "bmm-4fd33tr": Bmm4fd33tr
    "bmm-a04cdtr": BmmA04cdtr
    "bmm-da4e5so": BmmDa4e5so
    c3k: C3k
    p0c1h: P0c1h
    p0c3k: P0c3k
  }
  
  export interface N93562 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N96758 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N114320 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140535 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N672316MotegiRotMetallic {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface B50 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4fd33tr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA04cdtr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmDa4e5so {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C3k {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0c1h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0036 {
    paintSwatch: PaintSwatch35
    mapped: Mapped35
  }
  
  export interface PaintSwatch35 {
    primary: Primary35
  }
  
  export interface Primary35 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped35 {
    "71696": N71696
    "135160": N135160
    "145573": N145573
    "145611": N145611
    "155312": N155312
    "165541": N165541
    "177439": N177439
    "3a1f22-ametrin": N3a1f22Ametrin
    "bmm-01ed7a": Bmm01ed7a
    "bmm-60bd7a": Bmm60bd7a
    "bmm-6af06a": Bmm6af06a
    "bmm-761-a": Bmm761A
    "bmm-7a699a": Bmm7a699a
    "bmm-af97ea": BmmAf97ea
    p0c56: P0c56
    p0x1b: P0x1b
    x1b: X1b
  }
  
  export interface N71696 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135160 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145573 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145611 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155312 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N165541 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N177439 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3a1f22Ametrin {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm01ed7a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm60bd7a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm6af06a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm761A {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7a699a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAf97ea {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c56 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x1b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X1b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0037 {
    paintSwatch: PaintSwatch36
    mapped: Mapped36
  }
  
  export interface PaintSwatch36 {
    primary: Primary36
  }
  
  export interface Primary36 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped36 {
    "90696": N90696
    "110471": N110471
    "119577": N119577
    "119595": N119595
    "119773": N119773
    "139832": N139832
    "144301": N144301
    "1e0c00-terrabraun": N1e0c00Terrabraun
    "2e2423-bmw-individual-almandinbraun": N2e2423BmwIndividualAlmandinbraun
    c25: C25
    c46: C46
    p0c1l: P0c1l
    p0c25: P0c25
    p0c46: P0c46
  }
  
  export interface N90696 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N110471 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119577 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119595 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119773 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139832 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N144301 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N1e0c00Terrabraun {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N2e2423BmwIndividualAlmandinbraun {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface C25 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C46 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface P0c1l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c25 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c46 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0037sspc0199 {
    paintSwatch: PaintSwatch37
    mapped: Mapped37
  }
  
  export interface PaintSwatch37 {
    primary: Primary37
    secondary: Secondary8
  }
  
  export interface Primary37 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary8 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped37 {
    p0mc57: P0mc57
  }
  
  export interface P0mc57 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0039 {
    paintSwatch: PaintSwatch38
    mapped: Mapped38
  }
  
  export interface PaintSwatch38 {
    primary: Primary38
  }
  
  export interface Primary38 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped38 {
    "354": N354
    "62012": N62012
    "87812": N87812
    "119268": N119268
    "30647733": N30647733
    "30649573": N30649573
    "30804332": N30804332
    "354x": N354x
    a83: A83
    "babbc0-glaciersilber": Babbc0Glaciersilber
    "bmm-4a49dgs": Bmm4a49dgs
    customoption0x79nz6dbvtk: Customoption0x79nz6dbvtk
    customoptionhfso1nduetu: Customoptionhfso1nduetu
    customoptioni7e1dnl13y: Customoptioni7e1dnl13y
    customoptionp0zo5euz8z: Customoptionp0zo5euz8z
    customoptiontbsc36smfai: Customoptiontbsc36smfai
    customoptiontygotkc6ffh: Customoptiontygotkc6ffh
    n9: N9
    p0490c: P0490c
    p0a83: P0a83
    p0c33: P0c33
    p0x17: P0x17
    x04: X04
    x17: X17
  }
  
  export interface N354 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N62012 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N87812 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119268 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647733 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649573 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30804332 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N354x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A83 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Babbc0Glaciersilber {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4a49dgs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0x79nz6dbvtk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhfso1nduetu {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioni7e1dnl13y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionp0zo5euz8z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontbsc36smfai {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontygotkc6ffh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a83 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c33 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x17 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X04 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X17 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0040 {
    paintSwatch: PaintSwatch39
    mapped: Mapped39
  }
  
  export interface PaintSwatch39 {
    primary: Primary39
  }
  
  export interface Primary39 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped39 {
    "102566": N102566
  }
  
  export interface N102566 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0040sspc0015 {
    paintSwatch: PaintSwatch40
    mapped: Mapped40
  }
  
  export interface PaintSwatch40 {
    secondary: Secondary9
    primary: Primary40
  }
  
  export interface Secondary9 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary40 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped40 {
    "105412": N105412
  }
  
  export interface N105412 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0041 {
    paintSwatch: PaintSwatch41
    mapped: Mapped41
  }
  
  export interface PaintSwatch41 {
    primary: Primary41
  }
  
  export interface Primary41 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped41 {
    "21": N21
    "23": N23
    "28": N28
    "36": N36
    "37": N37
    "38": N38
    "39": N39
    "40": N40
    "54": N54
    "55": N55
    "64": N64
    "65": N65
    "72": N72
    "73": N73
    "146": N146
    "300": N300
    "400": N400
    "492": N492
    "4597": N4597
    "11646": N11646
    "26229": N26229
    "55047": N55047
    "102572": N102572
    "135881": N135881
    "26365730": N26365730
    "26587419": N26587419
    "26751517": N26751517
    "27685793": N27685793
    "28934187": N28934187
    "28934281": N28934281
    "29173881": N29173881
    "29540494": N29540494
    "30017453": N30017453
    "30049903": N30049903
    "30051807": N30051807
    "30051823": N30051823
    "30051829": N30051829
    "30411481": N30411481
    "30412400": N30412400
    "30640804": N30640804
    "30641370": N30641370
    "30641406": N30641406
    "30642828": N30642828
    "30645512": N30645512
    "30647272": N30647272
    "30648375": N30648375
    "30649487": N30649487
    "30650888": N30650888
    "30651442": N30651442
    "30652163": N30652163
    "30652435": N30652435
    "30653436": N30653436
    "30655625": N30655625
    "30655626": N30655626
    "30776777": N30776777
    "30788679": N30788679
    "30790194": N30790194
    "30791967": N30791967
    "30802056": N30802056
    "30806338": N30806338
    "30806372": N30806372
    "30814904": N30814904
    "30815205": N30815205
    "30815213": N30815213
    "30823803": N30823803
    "30824035": N30824035
    "31174079": N31174079
    "31174099": N31174099
    "31199895": N31199895
    "31498612": N31498612
    "31501685": N31501685
    "31514744": N31514744
    "32269186": N32269186
    "32269305": N32269305
    "32270886": N32270886
    "32271206": N32271206
    "32285111": N32285111
    "32285831": N32285831
    "32287640": N32287640
    "32290334": N32290334
    "32290579": N32290579
    "32305564": N32305564
    "32326673": N32326673
    "32341744": N32341744
    "32612869": N32612869
    "32612871": N32612871
    "32707609": N32707609
    "32707613": N32707613
    "32710637": N32710637
    "32717041": N32717041
    "32723287": N32723287
    "32850465": N32850465
    "32850879": N32850879
    "0pwp": N0pwp
    "2ff1b": N2ff1b
    "300a": N300a
    "300b": N300b
    "300x": N300x
    a96: A96
    "alb-alpine": AlbAlpine
    b575a: B575a
    "bmm-82a3fmw": Bmm82a3fmw
    "bms-0d895aw": Bms0d895aw
    "bms-18fb3aw": Bms18fb3aw
    "bms-2b6acaw": Bms2b6acaw
    "bms-2ff1baw": Bms2ff1baw
    "bms-5385aaw": Bms5385aaw
    "bms-6f909aw": Bms6f909aw
    "bms-87537cw": Bms87537cw
    "bms-b575aaw": BmsB575aaw
    customoption01fqeyz65hvj: Customoption01fqeyz65hvj
    customoption25: Customoption25
    customoption2vascgecakq: Customoption2vascgecakq
    customoption7zwoxvku5w: Customoption7zwoxvku5w
    customoption8l8wh9rn32p: Customoption8l8wh9rn32p
    customoptiona3tx9r32zk9: Customoptiona3tx9r32zk9
    customoptionaaoncam3hub: Customoptionaaoncam3hub
    customoptionc5zmk0910ym: Customoptionc5zmk0910ym
    customoptiongfsdw4j1qw6: Customoptiongfsdw4j1qw6
    customoptionhxtjgdbyqe6: Customoptionhxtjgdbyqe6
    customoptionhyj647ixev6: Customoptionhyj647ixev6
    customoptionii5w7upavf: Customoptionii5w7upavf
    customoptionl8x3z98fmlc: Customoptionl8x3z98fmlc
    customoptionlc73lbueff: Customoptionlc73lbueff
    customoptiononvke586qmp: Customoptiononvke586qmp
    customoptionoqdrejz6fl: Customoptionoqdrejz6fl
    customoptionpl3gad3mrm: Customoptionpl3gad3mrm
    customoptionr6hu2qyjjf: Customoptionr6hu2qyjjf
    customoptionr6nis4siib: Customoptionr6nis4siib
    customoptionrthkpzo83xh: Customoptionrthkpzo83xh
    customoptiontpy8m4rw9n: Customoptiontpy8m4rw9n
    customoptionu184xgt2r8: Customoptionu184xgt2r8
    customoptionusllvocdsuk: Customoptionusllvocdsuk
    customoptionuy3v59b6i7: Customoptionuy3v59b6i7
    customoptionv32jrxe6elt: Customoptionv32jrxe6elt
    customoptionvb4rtgbwbqn: Customoptionvb4rtgbwbqn
    "dcdcdc-alpinweiss-iii": DcdcdcAlpinweissIii
    "ededed-alpinweiss-iii": EdededAlpinweissIii
    "f1f1f1-alpinweiss-iii": F1f1f1AlpinweissIii
    imaginwhite: Imaginwhite
    imaginwihte: Imaginwihte
    p0300: P0300
    p0300b: P0300b
    p0p91: P0p91
    psp0041: Psp0041
    spc0041: Spc0041
  }
  
  export interface N21 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N23 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N37 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N38 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N40 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N54 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N55 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N64 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N65 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N72 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N146 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N300 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N400 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N492 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N4597 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N11646 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26229 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N55047 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N102572 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135881 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26365730 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26587419 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26751517 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685793 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934187 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934281 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29173881 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29540494 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30017453 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30049903 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051807 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051823 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30051829 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30411481 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30412400 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30640804 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641370 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641406 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30642828 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30645512 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647272 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30648375 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649487 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650888 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30651442 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652163 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652435 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653436 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655625 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655626 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776777 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788679 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30790194 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791967 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30802056 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806338 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806372 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814904 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815205 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815213 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823803 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30824035 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174079 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174099 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199895 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498612 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501685 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31514744 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32269186 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32269305 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32270886 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32271206 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32285111 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32285831 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32287640 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290334 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290579 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305564 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32326673 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341744 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612869 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612871 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707609 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707613 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32710637 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717041 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723287 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850465 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850879 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0pwp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2ff1b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N300a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N300b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N300x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A96 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface AlbAlpine {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B575a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm82a3fmw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms0d895aw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms18fb3aw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms2b6acaw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms2ff1baw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms5385aaw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms6f909aw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms87537cw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmsB575aaw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption01fqeyz65hvj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption25 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2vascgecakq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7zwoxvku5w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8l8wh9rn32p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiona3tx9r32zk9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionaaoncam3hub {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionc5zmk0910ym {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongfsdw4j1qw6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhxtjgdbyqe6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhyj647ixev6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionii5w7upavf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionl8x3z98fmlc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlc73lbueff {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiononvke586qmp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionoqdrejz6fl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpl3gad3mrm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr6hu2qyjjf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr6nis4siib {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrthkpzo83xh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontpy8m4rw9n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu184xgt2r8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionusllvocdsuk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuy3v59b6i7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv32jrxe6elt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvb4rtgbwbqn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface DcdcdcAlpinweissIii {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface EdededAlpinweissIii {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface F1f1f1AlpinweissIii {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imaginwhite {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imaginwihte {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0300 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0300b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p91 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Psp0041 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Spc0041 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0041sspc0324tspc0092 {
    paintDescription: string
    nativePaintDescriptions: string
    orderable: boolean
    paintSwatch: PaintSwatch42
  }
  
  export interface PaintSwatch42 {
    primary: Primary42
    secondary: Secondary10
    tertiary: Tertiary2
  }
  
  export interface Primary42 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary10 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Tertiary2 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Pspc0045 {
    paintSwatch: PaintSwatch43
    mapped: Mapped42
  }
  
  export interface PaintSwatch43 {
    primary: Primary43
  }
  
  export interface Primary43 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped42 {
    "121631": N121631
    "bmm-64fcegg": Bmm64fcegg
    "bmm-f63a6gg": BmmF63a6gg
    c4y: C4y
    p0c1p: P0c1p
  }
  
  export interface N121631 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm64fcegg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF63a6gg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C4y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0045sspc0026 {
    paintSwatch: PaintSwatch44
    mapped: Mapped43
  }
  
  export interface PaintSwatch44 {
    primary: Primary44
    secondary: Secondary11
  }
  
  export interface Primary44 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary11 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped43 {
    p0c4y: P0c4y
  }
  
  export interface P0c4y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0045sspc0064 {
    paintSwatch: PaintSwatch45
    mapped: Mapped44
  }
  
  export interface PaintSwatch45 {
    secondary: Secondary12
    primary: Primary45
  }
  
  export interface Secondary12 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary45 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped44 {
    "157330": N157330
  }
  
  export interface N157330 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0046 {
    paintSwatch: PaintSwatch46
    mapped: Mapped45
  }
  
  export interface PaintSwatch46 {
    primary: Primary46
  }
  
  export interface Primary46 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped45 {
    "157631": N157631
    "166334": N166334
    "bmm-fff65spy": BmmFff65spy
    "bms-66f87spy": Bms66f87spy
    "d4d623-m-sao-paulo-gelb": D4d623MSaoPauloGelb
    p0c4h: P0c4h
  }
  
  export interface N157631 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N166334 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmFff65spy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bms66f87spy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface D4d623MSaoPauloGelb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0051 {
    paintSwatch: PaintSwatch47
    mapped: Mapped46
  }
  
  export interface PaintSwatch47 {
    primary: Primary47
  }
  
  export interface Primary47 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped46 {
    "69261": N69261
    "101882": N101882
    a17: A17
    p0x13: P0x13
    x13: X13
  }
  
  export interface N69261 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N101882 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A17 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x13 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X13 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0052 {
    paintSwatch: PaintSwatch48
    mapped: Mapped47
  }
  
  export interface PaintSwatch48 {
    primary: Primary48
  }
  
  export interface Primary48 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped47 {
    "896": N896
    "17976": N17976
    "41309": N41309
    "67948": N67948
    "71506": N71506
    "490n": N490n
    a29: A29
    "test-motork": TestMotork
    x01: X01
  }
  
  export interface N896 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N17976 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N41309 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N67948 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N71506 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A29 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface TestMotork {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X01 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0055 {
    paintSwatch: PaintSwatch49
    mapped: Mapped48
  }
  
  export interface PaintSwatch49 {
    primary: Primary49
  }
  
  export interface Primary49 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped48 {
    "83017": N83017
    "123939": N123939
    "140690": N140690
    "141211": N141211
    "146502": N146502
    "152808": N152808
    "157286": N157286
    "178513": N178513
    "30652576": N30652576
    "30655630": N30655630
    "30789085": N30789085
    "30814910": N30814910
    "30815209": N30815209
    "31500148": N31500148
    "31514786": N31514786
    "32276847": N32276847
    "32278591": N32278591
    "383e3e-bmw-individual-dravitgrau-metallic": N383e3eBmwIndividualDravitgrauMetallic
    "454b45bmwindividualdravitgrau": N454b45bmwindividualdravitgrau
    "535957-dravitgrau-metallic": N535957DravitgrauMetallic
    a81: A81
    "bmm-008e4dgm": Bmm008e4dgm
    "bmm-449a4dg-bi": Bmm449a4dgBi
    "bmsp-34afedg": Bmsp34afedg
    "bmsp-74961bipdg": Bmsp74961bipdg
    "bmsp-91724dg": Bmsp91724dg
    "bmsp-a7e52b2ipd": BmspA7e52b2ipd
    customoption29b01l0c3c: Customoption29b01l0c3c
    customoption7j9cn04j034: Customoption7j9cn04j034
    customoption9fkaobe09xs: Customoption9fkaobe09xs
    customoptionassj71khm34: Customoptionassj71khm34
    customoptiongz4h56yzbn: Customoptiongz4h56yzbn
    customoptionqg2rpj7civ: Customoptionqg2rpj7civ
    customoptionxg9rp7y3dgn: Customoptionxg9rp7y3dgn
    p0c36: P0c36
    p0mc36: P0mc36
  }
  
  export interface N83017 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N123939 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140690 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N141211 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N146502 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N152808 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N157286 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N178513 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652576 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655630 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30789085 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814910 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815209 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31500148 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31514786 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276847 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278591 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N383e3eBmwIndividualDravitgrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N454b45bmwindividualdravitgrau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N535957DravitgrauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A81 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm008e4dgm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm449a4dgBi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp34afedg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp74961bipdg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp91724dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspA7e52b2ipd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption29b01l0c3c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7j9cn04j034 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9fkaobe09xs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionassj71khm34 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongz4h56yzbn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqg2rpj7civ {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxg9rp7y3dgn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0mc36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0056 {
    paintSwatch: PaintSwatch50
    mapped: Mapped49
  }
  
  export interface PaintSwatch50 {
    primary: Primary50
  }
  
  export interface Primary50 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped49 {
    "93855": N93855
    p0x18: P0x18
    pa001: Pa001
    x07: X07
  }
  
  export interface N93855 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x18 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa001 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X07 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0059 {
    paintSwatch: PaintSwatch51
    mapped: Mapped50
  }
  
  export interface PaintSwatch51 {
    primary: Primary51
  }
  
  export interface Primary51 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped50 {
    "40440": N40440
    "117835": N117835
    a61: A61
    p0c32: P0c32
  }
  
  export interface N40440 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N117835 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A61 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c32 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0064 {
    paintSwatch: PaintSwatch52
    mapped: Mapped51
  }
  
  export interface PaintSwatch52 {
    primary: Primary52
  }
  
  export interface Primary52 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped51 {
    "100": N100
    "191": N191
    "218": N218
    "408": N408
    "491": N491
    "601": N601
    "696": N696
    "35732": N35732
    "43305": N43305
    "68370": N68370
    "69621": N69621
    "71700": N71700
    "80283": N80283
    "80800": N80800
    "86746": N86746
    "95703": N95703
    "95704": N95704
    "105604": N105604
    "111740": N111740
    "139833": N139833
    "170727": N170727
    "26581485": N26581485
    "27685932": N27685932
    "28610083": N28610083
    "28667481": N28667481
    "29540425": N29540425
    "30017334": N30017334
    "30049886": N30049886
    "30412404": N30412404
    "30641210": N30641210
    "30641351": N30641351
    "30647729": N30647729
    "30648710": N30648710
    "30650583": N30650583
    "30650895": N30650895
    "30651451": N30651451
    "30652149": N30652149
    "30652167": N30652167
    "30653440": N30653440
    "30654590": N30654590
    "30655629": N30655629
    "30655634": N30655634
    "30673158": N30673158
    "30788385": N30788385
    "30789746": N30789746
    "30791971": N30791971
    "30802058": N30802058
    "30806341": N30806341
    "30823811": N30823811
    "31085866": N31085866
    "31199315": N31199315
    "31266592": N31266592
    "31498475": N31498475
    "31500131": N31500131
    "31500322": N31500322
    "31501605": N31501605
    "31501668": N31501668
    "32269187": N32269187
    "32270811": N32270811
    "32271370": N32271370
    "32275016": N32275016
    "32275087": N32275087
    "32275163": N32275163
    "32275700": N32275700
    "32276840": N32276840
    "32276861": N32276861
    "32276962": N32276962
    "32277748": N32277748
    "32277794": N32277794
    "32277851": N32277851
    "32278223": N32278223
    "32278552": N32278552
    "32278589": N32278589
    "32278597": N32278597
    "32278946": N32278946
    "32279007": N32279007
    "32279019": N32279019
    "32285114": N32285114
    "32287642": N32287642
    "32305567": N32305567
    "32324044": N32324044
    "32324056": N32324056
    "32341746": N32341746
    "32375755": N32375755
    "32376752": N32376752
    "32377186": N32377186
    "32545926": N32545926
    "32546630": N32546630
    "32548196": N32548196
    "32612873": N32612873
    "32707614": N32707614
    "32707617": N32707617
    "32717043": N32717043
    "32723289": N32723289
    "32777204": N32777204
    "32850467": N32850467
    "32850881": N32850881
    "33008977": N33008977
    "33113358": N33113358
    "423823685": N423823685
    "2163138073": N2163138073
    "0e0e": N0e0e
    "2r": N2r
    "2t": N2t
    "5bobject-promise-5d": N5bobjectPromise5d
    "696u": N696u
    a2a2: A2a2
    b9: B9
    black: Black
    "bmm-108b2bs": Bmm108b2bs
    "bmm-23a46bs": Bmm23a46bs
    "bmm-4ffd4bs": Bmm4ffd4bs
    "bmm-66741bs": Bmm66741bs
    "bmm-711c2bs": Bmm711c2bs
    "bmm-829a9bs": Bmm829a9bs
    "bmm-89f2bbs": Bmm89f2bbs
    "bmm-8ec4cbs": Bmm8ec4cbs
    "bmm-94237bs": Bmm94237bs
    "bmm-aaa1ebs": BmmAaa1ebs
    "bmm-atr2-bs": BmmAtr2Bs
    "bmm-b2a-bs": BmmB2aBs
    "bmm-ba831bs": BmmBa831bs
    "bms-ab837jb": BmsAb837jb
    "bms-b2k-jb": BmsB2kJb
    "bms-c886ejb": BmsC886ejb
    "bmsp-7ef54abip": Bmsp7ef54abip
    "bmsp-cffa8b2ipb": BmspCffa8b2ipb
    c2w: C2w
    carpaint61202: Carpaint61202
    customoption01w3e18u2ane: Customoption01w3e18u2ane
    customoption052w0uie0emp: Customoption052w0uie0emp
    customoption05t4zpmiemkg: Customoption05t4zpmiemkg
    customoption0mes05djm8yb: Customoption0mes05djm8yb
    customoption0qfxjf9cf5yl: Customoption0qfxjf9cf5yl
    customoption0rljishif0o: Customoption0rljishif0o
    customoption0xdejxcl23o: Customoption0xdejxcl23o
    customoption10dzl8in29i: Customoption10dzl8in29i
    customoption10w2zckc21ik: Customoption10w2zckc21ik
    customoption15h5y6s2crq: Customoption15h5y6s2crq
    customoption1c00ow9idc8: Customoption1c00ow9idc8
    customoption1et8ywt7led: Customoption1et8ywt7led
    customoption1iafe6i0zjo: Customoption1iafe6i0zjo
    customoption1obvzp5t1gw: Customoption1obvzp5t1gw
    customoption1svmqzn1xh1: Customoption1svmqzn1xh1
    customoption1yde8trcff2: Customoption1yde8trcff2
    customoption24t0y6vjo6w: Customoption24t0y6vjo6w
    customoption26xzdraxtk7: Customoption26xzdraxtk7
    customoption2cvsfkv3hem: Customoption2cvsfkv3hem
    customoption2evf933owfp: Customoption2evf933owfp
    customoption2lo6057hdjd: Customoption2lo6057hdjd
    customoption2m9jglu1nrn: Customoption2m9jglu1nrn
    customoption2ri7mlamwhk: Customoption2ri7mlamwhk
    customoption2to3pjww6gb: Customoption2to3pjww6gb
    customoption2uxlkr4mwhd: Customoption2uxlkr4mwhd
    customoption30xukqcigyb: Customoption30xukqcigyb
    customoption37btdaluzwl: Customoption37btdaluzwl
    customoption37twdtyudbm: Customoption37twdtyudbm
    customoption38: Customoption38
    customoption3c6a5qa02m: Customoption3c6a5qa02m
    customoption3ern81k2n8d: Customoption3ern81k2n8d
    customoption3l38szkeau6: Customoption3l38szkeau6
    customoption3x0irg3amrg: Customoption3x0irg3amrg
    customoption3xreyzkqf5: Customoption3xreyzkqf5
    customoption41nz87i2dz9: Customoption41nz87i2dz9
    customoption47ki6dx07tv: Customoption47ki6dx07tv
    customoption48: Customoption48
    customoption4foem5koyo4: Customoption4foem5koyo4
    customoption4qvjy2unpc2: Customoption4qvjy2unpc2
    customoption54xka951jk5: Customoption54xka951jk5
    customoption5duekuto6c4: Customoption5duekuto6c4
    customoption5v3n7kkbu87: Customoption5v3n7kkbu87
    customoption61qfgn3o78c: Customoption61qfgn3o78c
    customoption65okpfb37j3: Customoption65okpfb37j3
    customoption68drjndw3xt: Customoption68drjndw3xt
    customoption6myre31g61n: Customoption6myre31g61n
    customoption6ra6v32rryv: Customoption6ra6v32rryv
    customoption6zrcnobp3p5: Customoption6zrcnobp3p5
    customoption719peiroggu: Customoption719peiroggu
    customoption78o8m0cv7fh: Customoption78o8m0cv7fh
    customoption7ft6dclybam: Customoption7ft6dclybam
    customoption7lm2pdeh2us: Customoption7lm2pdeh2us
    customoption7ow00l2c5bj: Customoption7ow00l2c5bj
    customoption7q1k6iymcd9: Customoption7q1k6iymcd9
    customoption7xkfuy42bj4: Customoption7xkfuy42bj4
    customoption891ixli19op: Customoption891ixli19op
    customoption8dnk9kkxloc: Customoption8dnk9kkxloc
    customoption8ejggxfht8e: Customoption8ejggxfht8e
    customoption8ejuq1wxnec: Customoption8ejuq1wxnec
    customoption8fpegljzqsb: Customoption8fpegljzqsb
    customoption8nbcknw2pyk: Customoption8nbcknw2pyk
    customoption8oxo4gr5fe: Customoption8oxo4gr5fe
    customoption8x9e7kpzcwb: Customoption8x9e7kpzcwb
    customoption8ymxxff2ksi: Customoption8ymxxff2ksi
    customoption90yda5sr3zj: Customoption90yda5sr3zj
    customoption9ld8w8mdggp: Customoption9ld8w8mdggp
    customoption9rlcs7gjgmd: Customoption9rlcs7gjgmd
    customoptiona37n6rgvdyt: Customoptiona37n6rgvdyt
    customoptiona8ta226s7d: Customoptiona8ta226s7d
    customoptionacv4ksyd48r: Customoptionacv4ksyd48r
    customoptionadins486ytt: Customoptionadins486ytt
    customoptionadoio2iqtmk: Customoptionadoio2iqtmk
    customoptionayt1kmc6kym: Customoptionayt1kmc6kym
    customoptionb4u2vhh5x8: Customoptionb4u2vhh5x8
    customoptionb8p0bllzbh9: Customoptionb8p0bllzbh9
    customoptionbid7wljad5a: Customoptionbid7wljad5a
    customoptionbp8wcuufkjf: Customoptionbp8wcuufkjf
    customoptionbspy9dtbjji: Customoptionbspy9dtbjji
    customoptionc37vi8ajh5o: Customoptionc37vi8ajh5o
    customoptionc4m3niipidp: Customoptionc4m3niipidp
    customoptionceq075522x8: Customoptionceq075522x8
    customoptioncflqxf0ujt: Customoptioncflqxf0ujt
    customoptionckea105imhs: Customoptionckea105imhs
    customoptioncr57ikxchro: Customoptioncr57ikxchro
    customoptionctqz6iw2vs: Customoptionctqz6iw2vs
    customoptioncz2sf0xdgs: Customoptioncz2sf0xdgs
    customoptionddvsu64ssfa: Customoptionddvsu64ssfa
    customoptiondfj2mr9gq8q: Customoptiondfj2mr9gq8q
    customoptiondm0u2dm5hg: Customoptiondm0u2dm5hg
    customoptione0bxi0ia8uq: Customoptione0bxi0ia8uq
    customoptione7k261qcyy: Customoptione7k261qcyy
    customoptionengweiiu3r: Customoptionengweiiu3r
    customoptionetk4gldp7nh: Customoptionetk4gldp7nh
    customoptionetlw2wb0nyc: Customoptionetlw2wb0nyc
    customoptionf5x61u4vt99: Customoptionf5x61u4vt99
    customoptionf7haihefzdi: Customoptionf7haihefzdi
    customoptionfb8jixltiy: Customoptionfb8jixltiy
    customoptionfgqcs8z9hp: Customoptionfgqcs8z9hp
    customoptionfkydrptw7tk: Customoptionfkydrptw7tk
    customoptionfsaaqrbjxuk: Customoptionfsaaqrbjxuk
    customoptiong751eie5t5f: Customoptiong751eie5t5f
    customoptiongairuerb5zj: Customoptiongairuerb5zj
    customoptiongfrnrc22o46: Customoptiongfrnrc22o46
    customoptionghp5jlihang: Customoptionghp5jlihang
    customoptionglg6vy2502: Customoptionglg6vy2502
    customoptiongscnjf6ro69: Customoptiongscnjf6ro69
    customoptionh9aehklfk6b: Customoptionh9aehklfk6b
    customoptionhagc0k33kko: Customoptionhagc0k33kko
    customoptionhf8rd3mr1jc: Customoptionhf8rd3mr1jc
    customoptionhik309pwz3: Customoptionhik309pwz3
    customoptionhowzg33mh6s: Customoptionhowzg33mh6s
    customoptionhqgt4svxha6: Customoptionhqgt4svxha6
    customoptionhxjhqsk6iow: Customoptionhxjhqsk6iow
    customoptionhyk9n3yp0ft: Customoptionhyk9n3yp0ft
    customoptioni6pc6m4zlwj: Customoptioni6pc6m4zlwj
    customoptioniowql8g5yp: Customoptioniowql8g5yp
    customoptioniu30ij716vm: Customoptioniu30ij716vm
    customoptionivdpz89qh1: Customoptionivdpz89qh1
    customoptionjdxvurr00pb: Customoptionjdxvurr00pb
    customoptionjz1jwevdxi8: Customoptionjz1jwevdxi8
    customoptionk34pivnwzvk: Customoptionk34pivnwzvk
    customoptionkbi9rdl2a5f: Customoptionkbi9rdl2a5f
    customoptionki2wlphwo29: Customoptionki2wlphwo29
    customoptionkjz6w0bnwej: Customoptionkjz6w0bnwej
    customoptionkk6sfpqv839: Customoptionkk6sfpqv839
    customoptionkpk9zcv6cr: Customoptionkpk9zcv6cr
    customoptionkqs0tg4m32: Customoptionkqs0tg4m32
    customoptionkxo5ioyj62g: Customoptionkxo5ioyj62g
    customoptionkz568mdcqtf: Customoptionkz568mdcqtf
    customoptionlddhg95pimq: Customoptionlddhg95pimq
    customoptionlmlr188123: Customoptionlmlr188123
    customoptionlpw65n6sf8: Customoptionlpw65n6sf8
    customoptionlrlbe78cioc: Customoptionlrlbe78cioc
    customoptionlshu9d8iqg9: Customoptionlshu9d8iqg9
    customoptionmb73cgfb4re: Customoptionmb73cgfb4re
    customoptionmf68s6iv2ea: Customoptionmf68s6iv2ea
    customoptionmpn14hjwr9o: Customoptionmpn14hjwr9o
    customoptionmsquhfvlj9: Customoptionmsquhfvlj9
    customoptionmsqxs5tvr0k: Customoptionmsqxs5tvr0k
    customoptionmxdyltpkgv: Customoptionmxdyltpkgv
    customoptionn4ex5htzho: Customoptionn4ex5htzho
    customoptionna30je2r8r: Customoptionna30je2r8r
    customoptionnk1ic3u28se: Customoptionnk1ic3u28se
    customoptionnklmx6osvco: Customoptionnklmx6osvco
    customoptionnvd81xg9olp: Customoptionnvd81xg9olp
    customoptionomsoabk8of: Customoptionomsoabk8of
    customoptionouojmkxpxb: Customoptionouojmkxpxb
    customoptionp2fndghcqv: Customoptionp2fndghcqv
    customoptionp2har2zpj3: Customoptionp2har2zpj3
    customoptionpd9cli9309i: Customoptionpd9cli9309i
    customoptionpw6k2p43fcc: Customoptionpw6k2p43fcc
    customoptionq2qoy3ahpl: Customoptionq2qoy3ahpl
    customoptionq4ysmoysb5e: Customoptionq4ysmoysb5e
    customoptionq6pzkeoznz: Customoptionq6pzkeoznz
    customoptionqbtpit669tg: Customoptionqbtpit669tg
    customoptionqd61n686fb: Customoptionqd61n686fb
    customoptionqmynh28ang: Customoptionqmynh28ang
    customoptionqnkhkio3yrq: Customoptionqnkhkio3yrq
    customoptionqnsoom2r9u: Customoptionqnsoom2r9u
    customoptionqt6u194m9i: Customoptionqt6u194m9i
    customoptionr5t8yse983h: Customoptionr5t8yse983h
    customoptionr7p1tx5cwn: Customoptionr7p1tx5cwn
    customoptionrgfwzxj4qfa: Customoptionrgfwzxj4qfa
    customoptionrii4zxg1wvf: Customoptionrii4zxg1wvf
    customoptionrncb9zi92sb: Customoptionrncb9zi92sb
    customoptionro1s8x2nshc: Customoptionro1s8x2nshc
    customoptionrtd0k26n1e: Customoptionrtd0k26n1e
    customoptions4my53vg92c: Customoptions4my53vg92c
    customoptions6x8ocx74j: Customoptions6x8ocx74j
    customoptions8rhyo0hobq: Customoptions8rhyo0hobq
    customoptionsc607l851p: Customoptionsc607l851p
    customoptionsrf5tc0jcq: Customoptionsrf5tc0jcq
    customoptionswv8ekwpgh: Customoptionswv8ekwpgh
    customoptiontgn22s3k0s: Customoptiontgn22s3k0s
    customoptiontkygn5tewbf: Customoptiontkygn5tewbf
    customoptiontyoxfrb31g: Customoptiontyoxfrb31g
    customoptionu1tqoxig83g: Customoptionu1tqoxig83g
    customoptionu36sqzg25v: Customoptionu36sqzg25v
    customoptionu4twy46e75m: Customoptionu4twy46e75m
    customoptionu8jme54r59: Customoptionu8jme54r59
    customoptionub4f4c3n4t: Customoptionub4f4c3n4t
    customoptionus040jnf1kb: Customoptionus040jnf1kb
    customoptionuv3fa6v8asp: Customoptionuv3fa6v8asp
    customoptionv6cza2cy5vg: Customoptionv6cza2cy5vg
    customoptionv6hdylt78d: Customoptionv6hdylt78d
    customoptionv7o7rgcsgce: Customoptionv7o7rgcsgce
    customoptionvc443d8geva: Customoptionvc443d8geva
    customoptionvcl3hvvwf1p: Customoptionvcl3hvvwf1p
    customoptionvlvkroggxd: Customoptionvlvkroggxd
    customoptionvsfj2s805m: Customoptionvsfj2s805m
    customoptionvsuta9o137b: Customoptionvsuta9o137b
    customoptionw2gu03xdav: Customoptionw2gu03xdav
    customoptionw84kmnw3e3: Customoptionw84kmnw3e3
    customoptionwarovi0ke8g: Customoptionwarovi0ke8g
    customoptionwbv29zjvhbf: Customoptionwbv29zjvhbf
    customoptionx1ew2v19fap: Customoptionx1ew2v19fap
    customoptionx4hq7flw1uq: Customoptionx4hq7flw1uq
    customoptionx7gx4repani: Customoptionx7gx4repani
    customoptionxrua4n1cni: Customoptionxrua4n1cni
    customoptiony0yub2flu5: Customoptiony0yub2flu5
    customoptiony35bmrgqrfn: Customoptiony35bmrgqrfn
    customoptionyf2ka0z8ie9r: Customoptionyf2ka0z8ie9r
    customoptionyik45s0epy9: Customoptionyik45s0epy9
    customoptionyjvw6qie9h: Customoptionyjvw6qie9h
    customoptionyr9y3vjyto: Customoptionyr9y3vjyto
    customoptionys5xs80ust: Customoptionys5xs80ust
    customoptionyubn91vi2vm: Customoptionyubn91vi2vm
    customoptionyv3y9tbosb: Customoptionyv3y9tbosb
    customoptionyxjrptc724n: Customoptionyxjrptc724n
    customoptionzj8zh2uuty: Customoptionzj8zh2uuty
    customoptionzqqcvuelmi9: Customoptionzqqcvuelmi9
    customoptionzvn7ihorr98: Customoptionzvn7ihorr98
    customoptionzxx3krmw3yn: Customoptionzxx3krmw3yn
    customoptionzypnl1svfg: Customoptionzypnl1svfg
    imagenblack: Imagenblack
    imaginblack: Imaginblack
    jato475: Jato475
    null: Null
    p0476: P0476
    p0c3y: P0c3y
    p0w490: P0w490
    pippo: Pippo
    psps0004: Psps0004
  }
  
  export interface N100 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N191 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N218 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N408 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N491 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N601 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N696 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N35732 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N43305 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N68370 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N69621 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N71700 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N80283 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N80800 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N86746 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N95703 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N95704 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N105604 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N111740 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139833 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N170727 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26581485 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685932 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28610083 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28667481 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29540425 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30017334 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30049886 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30412404 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641210 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641351 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647729 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30648710 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650583 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650895 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30651451 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652149 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652167 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653440 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30654590 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655629 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655634 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30673158 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30788385 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30789746 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791971 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30802058 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806341 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823811 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31085866 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199315 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266592 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498475 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31500131 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31500322 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501605 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501668 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32269187 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32270811 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32271370 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275016 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275087 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275163 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275700 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276840 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276861 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276962 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32277748 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32277794 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32277851 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278223 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278552 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278589 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278597 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278946 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32279007 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32279019 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32285114 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32287642 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305567 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32324044 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32324056 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341746 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32375755 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32376752 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32377186 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32545926 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32546630 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548196 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612873 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707614 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707617 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717043 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723289 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32777204 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850467 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850881 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N33008977 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N33113358 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N423823685 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2163138073 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0e0e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5bobjectPromise5d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N696u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A2a2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Black {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm108b2bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm23a46bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4ffd4bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm66741bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm711c2bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm829a9bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm89f2bbs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm8ec4cbs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm94237bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAaa1ebs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAtr2Bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB2aBs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBa831bs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmsAb837jb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmsB2kJb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmsC886ejb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp7ef54abip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspCffa8b2ipb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Carpaint61202 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption01w3e18u2ane {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption052w0uie0emp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption05t4zpmiemkg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0mes05djm8yb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0qfxjf9cf5yl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0rljishif0o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0xdejxcl23o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption10dzl8in29i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption10w2zckc21ik {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption15h5y6s2crq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1c00ow9idc8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1et8ywt7led {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1iafe6i0zjo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1obvzp5t1gw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1svmqzn1xh1 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1yde8trcff2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption24t0y6vjo6w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption26xzdraxtk7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2cvsfkv3hem {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2evf933owfp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2lo6057hdjd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2m9jglu1nrn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2ri7mlamwhk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2to3pjww6gb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2uxlkr4mwhd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption30xukqcigyb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption37btdaluzwl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption37twdtyudbm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption38 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3c6a5qa02m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3ern81k2n8d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3l38szkeau6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3x0irg3amrg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3xreyzkqf5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption41nz87i2dz9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption47ki6dx07tv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption48 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4foem5koyo4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4qvjy2unpc2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption54xka951jk5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5duekuto6c4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5v3n7kkbu87 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption61qfgn3o78c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption65okpfb37j3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption68drjndw3xt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6myre31g61n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6ra6v32rryv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6zrcnobp3p5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption719peiroggu {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption78o8m0cv7fh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ft6dclybam {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7lm2pdeh2us {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ow00l2c5bj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7q1k6iymcd9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7xkfuy42bj4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption891ixli19op {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8dnk9kkxloc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8ejggxfht8e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8ejuq1wxnec {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8fpegljzqsb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8nbcknw2pyk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8oxo4gr5fe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8x9e7kpzcwb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8ymxxff2ksi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption90yda5sr3zj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9ld8w8mdggp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9rlcs7gjgmd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiona37n6rgvdyt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiona8ta226s7d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionacv4ksyd48r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionadins486ytt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionadoio2iqtmk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionayt1kmc6kym {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionb4u2vhh5x8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionb8p0bllzbh9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbid7wljad5a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbp8wcuufkjf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbspy9dtbjji {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionc37vi8ajh5o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionc4m3niipidp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionceq075522x8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncflqxf0ujt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionckea105imhs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncr57ikxchro {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionctqz6iw2vs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioncz2sf0xdgs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionddvsu64ssfa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondfj2mr9gq8q {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondm0u2dm5hg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptione0bxi0ia8uq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptione7k261qcyy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionengweiiu3r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionetk4gldp7nh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionetlw2wb0nyc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf5x61u4vt99 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf7haihefzdi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfb8jixltiy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfgqcs8z9hp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfkydrptw7tk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfsaaqrbjxuk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiong751eie5t5f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongairuerb5zj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongfrnrc22o46 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionghp5jlihang {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionglg6vy2502 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongscnjf6ro69 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionh9aehklfk6b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhagc0k33kko {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhf8rd3mr1jc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhik309pwz3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhowzg33mh6s {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhqgt4svxha6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhxjhqsk6iow {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhyk9n3yp0ft {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioni6pc6m4zlwj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioniowql8g5yp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioniu30ij716vm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionivdpz89qh1 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjdxvurr00pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjz1jwevdxi8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionk34pivnwzvk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkbi9rdl2a5f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionki2wlphwo29 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkjz6w0bnwej {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkk6sfpqv839 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkpk9zcv6cr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkqs0tg4m32 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkxo5ioyj62g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkz568mdcqtf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlddhg95pimq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlmlr188123 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlpw65n6sf8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlrlbe78cioc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlshu9d8iqg9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmb73cgfb4re {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmf68s6iv2ea {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmpn14hjwr9o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmsquhfvlj9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmsqxs5tvr0k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmxdyltpkgv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionn4ex5htzho {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionna30je2r8r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnk1ic3u28se {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnklmx6osvco {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnvd81xg9olp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionomsoabk8of {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionouojmkxpxb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionp2fndghcqv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionp2har2zpj3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpd9cli9309i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpw6k2p43fcc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionq2qoy3ahpl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionq4ysmoysb5e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionq6pzkeoznz {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqbtpit669tg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqd61n686fb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqmynh28ang {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqnkhkio3yrq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqnsoom2r9u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqt6u194m9i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr5t8yse983h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr7p1tx5cwn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrgfwzxj4qfa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrii4zxg1wvf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrncb9zi92sb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionro1s8x2nshc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrtd0k26n1e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptions4my53vg92c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptions6x8ocx74j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptions8rhyo0hobq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsc607l851p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsrf5tc0jcq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionswv8ekwpgh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontgn22s3k0s {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontkygn5tewbf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontyoxfrb31g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu1tqoxig83g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu36sqzg25v {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu4twy46e75m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu8jme54r59 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionub4f4c3n4t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionus040jnf1kb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuv3fa6v8asp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv6cza2cy5vg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv6hdylt78d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionv7o7rgcsgce {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvc443d8geva {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvcl3hvvwf1p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvlvkroggxd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvsfj2s805m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvsuta9o137b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw2gu03xdav {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw84kmnw3e3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwarovi0ke8g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwbv29zjvhbf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx1ew2v19fap {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx4hq7flw1uq {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx7gx4repani {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxrua4n1cni {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiony0yub2flu5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiony35bmrgqrfn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyf2ka0z8ie9r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyik45s0epy9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyjvw6qie9h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyr9y3vjyto {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionys5xs80ust {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyubn91vi2vm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyv3y9tbosb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyxjrptc724n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzj8zh2uuty {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzqqcvuelmi9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzvn7ihorr98 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzxx3krmw3yn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionzypnl1svfg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imagenblack {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imaginblack {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jato475 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Null {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0476 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0w490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pippo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Psps0004 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0064sspc0016 {
    paintSwatch: PaintSwatch53
    mapped: Mapped52
  }
  
  export interface PaintSwatch53 {
    primary: Primary53
    secondary: Secondary13
  }
  
  export interface Primary53 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary13 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped52 {
    "130381": N130381
    p0c2w: P0c2w
    s0c2w: S0c2w
  }
  
  export interface N130381 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c2w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface S0c2w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0064sspc0026 {
    paintSwatch: PaintSwatch54
    mapped: Mapped53
  }
  
  export interface PaintSwatch54 {
    primary: Primary54
    secondary: Secondary14
  }
  
  export interface Primary54 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary14 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped53 {
    p0c6c: P0c6c
  }
  
  export interface P0c6c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0064sspc0067 {
    paintSwatch: PaintSwatch55
    mapped: Mapped54
  }
  
  export interface PaintSwatch55 {
    primary: Primary55
    secondary: Secondary15
  }
  
  export interface Primary55 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary15 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped54 {
    "157362": N157362
  }
  
  export interface N157362 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0065 {
    paintSwatch: PaintSwatch56
    mapped: Mapped55
  }
  
  export interface PaintSwatch56 {
    primary: Primary56
  }
  
  export interface Primary56 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped55 {
    "29178": N29178
    a51: A51
    b05: B05
  }
  
  export interface N29178 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A51 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B05 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0066 {
    paintSwatch: PaintSwatch57
    mapped: Mapped56
  }
  
  export interface PaintSwatch57 {
    primary: Primary57
  }
  
  export interface Primary57 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped56 {
    "482": N482
    "85514": N85514
    b07: B07
  }
  
  export interface N482 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N85514 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B07 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0069 {
    paintSwatch: PaintSwatch58
    mapped: Mapped57
  }
  
  export interface PaintSwatch58 {
    primary: Primary58
  }
  
  export interface Primary58 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped57 {
    "69168": N69168
  }
  
  export interface N69168 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0080 {
    paintSwatch: PaintSwatch59
    mapped: Mapped58
  }
  
  export interface PaintSwatch59 {
    primary: Primary59
  }
  
  export interface Primary59 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped58 {
    "155191": N155191
  }
  
  export interface N155191 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0083 {
    paintSwatch: PaintSwatch60
    mapped: Mapped59
  }
  
  export interface PaintSwatch60 {
    primary: Primary60
  }
  
  export interface Primary60 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped59 {
    "177438": N177438
  }
  
  export interface N177438 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0083sspc0026 {
    paintSwatch: PaintSwatch61
    mapped: Mapped60
  }
  
  export interface PaintSwatch61 {
    secondary: Secondary16
    primary: Primary61
  }
  
  export interface Secondary16 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary61 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped60 {
    "122438": N122438
  }
  
  export interface N122438 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0092 {
    paintSwatch: PaintSwatch62
    mapped: Mapped61
  }
  
  export interface PaintSwatch62 {
    primary: Primary62
  }
  
  export interface Primary62 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped61 {
    "b02a1d-m-toronto-rot-metallic": B02a1dMTorontoRotMetallic
    "b02a1d-m-toronto-rot-metallise": B02a1dMTorontoRotMetallise
    "j-01": J01
  }
  
  export interface B02a1dMTorontoRotMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B02a1dMTorontoRotMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface J01 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0096 {
    paintSwatch: PaintSwatch63
    mapped: Mapped62
  }
  
  export interface PaintSwatch63 {
    primary: Primary63
  }
  
  export interface Primary63 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped62 {
    "aaabae-glaciersilber-metallic": AaabaeGlaciersilberMetallic
    "aaabae-glaciersilber-metallise": AaabaeGlaciersilberMetallise
    customoption06pfgm4ujh9r: Customoption06pfgm4ujh9r
    customoption9dbx8khk5mg: Customoption9dbx8khk5mg
    customoption9jfa3enrzul: Customoption9jfa3enrzul
    customoptiondtejlglhi8b: Customoptiondtejlglhi8b
    customoptionobaih9xiixs: Customoptionobaih9xiixs
    "d6d8da-glaciersilber-metallise": D6d8daGlaciersilberMetallise
    imagingrey: Imagingrey
    spc0096: Spc0096
  }
  
  export interface AaabaeGlaciersilberMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface AaabaeGlaciersilberMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption06pfgm4ujh9r {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9dbx8khk5mg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9jfa3enrzul {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondtejlglhi8b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionobaih9xiixs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface D6d8daGlaciersilberMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imagingrey {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Spc0096 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0097 {
    paintSwatch: PaintSwatch64
    mapped: Mapped63
  }
  
  export interface PaintSwatch64 {
    primary: Primary64
  }
  
  export interface Primary64 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped63 {
    "30818244": N30818244
    "bmm-4e5a4bg": Bmm4e5a4bg
    customoptionyl0fgz4f8c: Customoptionyl0fgz4f8c
  }
  
  export interface N30818244 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4e5a4bg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyl0fgz4f8c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0101 {
    paintSwatch: PaintSwatch65
    mapped: Mapped64
  }
  
  export interface PaintSwatch65 {
    primary: Primary65
  }
  
  export interface Primary65 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped64 {
    "369": N369
    "30775430": N30775430
    "2163138070": N2163138070
    b4b4: B4b4
    blanco: Blanco
    customoptionet9x738qq7a: Customoptionet9x738qq7a
    customoptionwura1wd9w7n: Customoptionwura1wd9w7n
    teros: Teros
  }
  
  export interface N369 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30775430 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2163138070 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B4b4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Blanco {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionet9x738qq7a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwura1wd9w7n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Teros {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0103 {
    paintSwatch: PaintSwatch66
    mapped: Mapped65
  }
  
  export interface PaintSwatch66 {
    primary: Primary66
  }
  
  export interface Primary66 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped65 {
    "42055": N42055
    "26365736": N26365736
    "26366760": N26366760
    "28610079": N28610079
    "29176238": N29176238
    "29540416": N29540416
    "29740266": N29740266
    "30411388": N30411388
    "30649891": N30649891
    "30650902": N30650902
    "30791968": N30791968
    "30806374": N30806374
    "30814914": N30814914
    "31174083": N31174083
    "31199332": N31199332
    "31498618": N31498618
    "31501381": N31501381
    "32275012": N32275012
    "32278586": N32278586
    "32305569": N32305569
    "32341747": N32341747
    "32546638": N32546638
    "32707615": N32707615
    "32707619": N32707619
    "32850468": N32850468
    "32850882": N32850882
    "bmm-5bf1cmw": Bmm5bf1cmw
    "bmm-6e12fmw": Bmm6e12fmw
    "bmm-7afd5mw": Bmm7afd5mw
    "bmm-9efe4mw": Bmm9efe4mw
    "bmm-a50a0mw": BmmA50a0mw
    "bmm-atr3-mw": BmmAtr3Mw
    "bmm-b2c-mw": BmmB2cMw
    "bmm-dc603mw": BmmDc603mw
    "bmm-f50cbmw": BmmF50cbmw
    "bmm-fa42bmw": BmmFa42bmw
    custom: Custom
    customoption05i36kgx4w0i: Customoption05i36kgx4w0i
    customoption07jnza5lmjyy: Customoption07jnza5lmjyy
    customoption0j7djlsaftmv: Customoption0j7djlsaftmv
    customoption26u8tlnm4wr: Customoption26u8tlnm4wr
    customoption4xiccbsqph2: Customoption4xiccbsqph2
    customoption59hipqve6ib: Customoption59hipqve6ib
    customoption5i54fmq1qdj: Customoption5i54fmq1qdj
    customoption70ortfko1oa: Customoption70ortfko1oa
    customoption71rx9ftsqxj: Customoption71rx9ftsqxj
    customoption8ag7nz5ah5: Customoption8ag7nz5ah5
    customoption8fdemldfg8d: Customoption8fdemldfg8d
    customoption8fpkiavgxys: Customoption8fpkiavgxys
    customoption8jtimwj4isb: Customoption8jtimwj4isb
    customoptionajr65m94ytd: Customoptionajr65m94ytd
    customoptionculctck2mzs: Customoptionculctck2mzs
    customoptiondcwnu8ycmep: Customoptiondcwnu8ycmep
    customoptionf77tt406vt: Customoptionf77tt406vt
    customoptiongds735xyti: Customoptiongds735xyti
    customoptionhddycrx7bvh: Customoptionhddycrx7bvh
    customoptioni586jhymyx: Customoptioni586jhymyx
    customoptioniqdlan5n1zs: Customoptioniqdlan5n1zs
    customoptionjbuenivdz8: Customoptionjbuenivdz8
    customoptionjzlxid036dm: Customoptionjzlxid036dm
    customoptionk6zv0z5u75s: Customoptionk6zv0z5u75s
    customoptionkfbh1s261lp: Customoptionkfbh1s261lp
    customoptionluoqufmabv: Customoptionluoqufmabv
    customoptionlvs3j41akni: Customoptionlvs3j41akni
    customoptionmzbz0mdbuoo: Customoptionmzbz0mdbuoo
    customoptionoe62ssgo64: Customoptionoe62ssgo64
    customoptionoh99nidu3qt: Customoptionoh99nidu3qt
    customoptionox6x5v401u: Customoptionox6x5v401u
    customoptionpcvk1tbd7jn: Customoptionpcvk1tbd7jn
    customoptionpnswa6m9pw: Customoptionpnswa6m9pw
    customoptionssmw7npjir: Customoptionssmw7npjir
    customoptionu3ra64jcwx7: Customoptionu3ra64jcwx7
    customoptionuwc317lrro: Customoptionuwc317lrro
    customoptionwjaknfn8q4: Customoptionwjaknfn8q4
    customoptionx1z00f5foir: Customoptionx1z00f5foir
    customoptionxfv5q3la39: Customoptionxfv5q3la39
    customoptionz1pk7djxr4d: Customoptionz1pk7djxr4d
    "d4d4d4-mineralweiss": D4d4d4Mineralweiss
    "e6e6e6-mineralweiss-metallic": E6e6e6MineralweissMetallic
    "e6e6e6-mineralweiss-metallise": E6e6e6MineralweissMetallise
    f50cb: F50cb
    imaginewhite: Imaginewhite
    jatoa96: Jatoa96
    jatomet: Jatomet
  }
  
  export interface N42055 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26365736 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26366760 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28610079 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29176238 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29540416 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29740266 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30411388 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649891 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650902 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30791968 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806374 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814914 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174083 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199332 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31498618 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31501381 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275012 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278586 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305569 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341747 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32546638 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707615 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707619 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface N32850468 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850882 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm5bf1cmw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm6e12fmw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7afd5mw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm9efe4mw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA50a0mw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAtr3Mw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB2cMw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmDc603mw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF50cbmw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmFa42bmw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Custom {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption05i36kgx4w0i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption07jnza5lmjyy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0j7djlsaftmv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption26u8tlnm4wr {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4xiccbsqph2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption59hipqve6ib {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5i54fmq1qdj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption70ortfko1oa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption71rx9ftsqxj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8ag7nz5ah5 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8fdemldfg8d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8fpkiavgxys {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8jtimwj4isb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionajr65m94ytd {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionculctck2mzs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondcwnu8ycmep {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf77tt406vt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongds735xyti {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhddycrx7bvh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioni586jhymyx {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioniqdlan5n1zs {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjbuenivdz8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjzlxid036dm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionk6zv0z5u75s {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkfbh1s261lp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionluoqufmabv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlvs3j41akni {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmzbz0mdbuoo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionoe62ssgo64 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionoh99nidu3qt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionox6x5v401u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpcvk1tbd7jn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionpnswa6m9pw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionssmw7npjir {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu3ra64jcwx7 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionuwc317lrro {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwjaknfn8q4 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionx1z00f5foir {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionxfv5q3la39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionz1pk7djxr4d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface D4d4d4Mineralweiss {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface E6e6e6MineralweissMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface E6e6e6MineralweissMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface F50cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Imaginewhite {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatoa96 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatomet {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0103sspc0015 {
    paintSwatch: PaintSwatch67
    mapped: Mapped66
  }
  
  export interface PaintSwatch67 {
    primary: Primary67
    secondary: Secondary17
  }
  
  export interface Primary67 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary17 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped66 {
    "105415": N105415
    "26373454": N26373454
    b97: B97
    customoption8x5y6tn16b9: Customoption8x5y6tn16b9
  }
  
  export interface N105415 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26373454 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B97 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8x5y6tn16b9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0103sspc0016 {
    paintSwatch: PaintSwatch68
    mapped: Mapped67
  }
  
  export interface PaintSwatch68 {
    primary: Primary68
    secondary: Secondary18
  }
  
  export interface Primary68 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary18 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped67 {
    "130437": N130437
    p0b85: P0b85
  }
  
  export interface N130437 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b85 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0103sspc0026 {
    paintSwatch: PaintSwatch69
    mapped: Mapped68
  }
  
  export interface PaintSwatch69 {
    primary: Primary69
    secondary: Secondary19
  }
  
  export interface Primary69 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary19 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped68 {
    "105414": N105414
  }
  
  export interface N105414 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0106 {
    paintSwatch: PaintSwatch70
    mapped: Mapped69
  }
  
  export interface PaintSwatch70 {
    primary: Primary70
  }
  
  export interface Primary70 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped69 {
    "bmm-1830drb": Bmm1830drb
  }
  
  export interface Bmm1830drb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0108 {
    paintSwatch: PaintSwatch71
    mapped: Mapped70
  }
  
  export interface PaintSwatch71 {
    primary: Primary71
  }
  
  export interface Primary71 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped70 {
    p0p6k: P0p6k
  }
  
  export interface P0p6k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0111 {
    paintSwatch: PaintSwatch72
    mapped: Mapped71
  }
  
  export interface PaintSwatch72 {
    primary: Primary72
  }
  
  export interface Primary72 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped71 {
    customoption7wnij7hgfns: Customoption7wnij7hgfns
  }
  
  export interface Customoption7wnij7hgfns {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0119 {
    paintSwatch: PaintSwatch73
    mapped: Mapped72
  }
  
  export interface PaintSwatch73 {
    primary: Primary73
  }
  
  export interface Primary73 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped72 {
    "141212": N141212
    "141240": N141240
    "154953": N154953
    "165588": N165588
    "30653444": N30653444
    "30655633": N30655633
    "31085858": N31085858
    "32612896": N32612896
    "bmm-a51f6og": BmmA51f6og
    "bmsp-8ee13bipog": Bmsp8ee13bipog
    c4a: C4a
    customoption4kon4v5x98j: Customoption4kon4v5x98j
    customoptionh4r3u3l20u: Customoptionh4r3u3l20u
    customoptionrmzjng1u4g: Customoptionrmzjng1u4g
    customoptionwaeibpsn4o: Customoptionwaeibpsn4o
    p0c4a: P0c4a
    p0m490: P0m490
  }
  
  export interface N141212 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N141240 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N154953 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N165588 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30653444 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655633 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31085858 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612896 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA51f6og {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp8ee13bipog {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C4a {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Customoption4kon4v5x98j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionh4r3u3l20u {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrmzjng1u4g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionwaeibpsn4o {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0m490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0119sspc0064 {
    paintSwatch: PaintSwatch74
    mapped: Mapped73
  }
  
  export interface PaintSwatch74 {
    primary: Primary74
    secondary: Secondary20
  }
  
  export interface Primary74 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary20 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped73 {
    "177955": N177955
    "32204085": N32204085
    p0wc4a: P0wc4a
  }
  
  export interface N177955 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32204085 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0wc4a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0120 {
    paintSwatch: PaintSwatch75
    mapped: Mapped74
  }
  
  export interface PaintSwatch75 {
    primary: Primary75
  }
  
  export interface Primary75 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped74 {
    "107931": N107931
    "136087": N136087
    "140259": N140259
    "bmm-a0c6bdg": BmmA0c6bdg
    "bmm-a3247dg": BmmA3247dg
    c28: C28
    p0c28: P0c28
    p0p67: P0p67
    p67: P67
    p71: P71
    pa002: Pa002
  }
  
  export interface N107931 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N136087 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N140259 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA0c6bdg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA3247dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C28 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c28 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p67 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P67 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P71 {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Pa002 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0124 {
    paintSwatch: PaintSwatch76
    mapped: Mapped75
  }
  
  export interface PaintSwatch76 {
    primary: Primary76
  }
  
  export interface Primary76 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped75 {
    "32710633": N32710633
    "bmm-0ed6bfpb": Bmm0ed6bfpb
    "bmsp-3b976bipfp": Bmsp3b976bipfp
    "bmsp-71f1dfpb": Bmsp71f1dfpb
  }
  
  export interface N32710633 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm0ed6bfpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp3b976bipfp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp71f1dfpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0129 {
    paintSwatch: PaintSwatch77
    mapped: Mapped76
  }
  
  export interface PaintSwatch77 {
    primary: Primary77
  }
  
  export interface Primary77 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped76 {
    "bmm-bmad-pb": BmmBmadPb
    "bmsp-rh-pbbip": BmspRhPbbip
  }
  
  export interface BmmBmadPb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspRhPbbip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0130 {
    paintSwatch: PaintSwatch78
    mapped: Mapped77
  }
  
  export interface PaintSwatch78 {
    primary: Primary78
  }
  
  export interface Primary78 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped77 {
    jatoc4e: Jatoc4e
  }
  
  export interface Jatoc4e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0138 {
    paintSwatch: PaintSwatch79
    mapped: Mapped78
  }
  
  export interface PaintSwatch79 {
    primary: Primary79
  }
  
  export interface Primary79 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped78 {
    "134": N134
    "4598": N4598
    "21395": N21395
    "99520": N99520
    "2163138069": N2163138069
  }
  
  export interface N134 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N4598 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N21395 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N99520 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2163138069 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0138sspc0064 {
    paintSwatch: PaintSwatch80
    mapped: Mapped79
  }
  
  export interface PaintSwatch80 {
    primary: Primary80
    secondary: Secondary21
  }
  
  export interface Primary80 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary21 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped79 {
    "405": N405
  }
  
  export interface N405 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0142 {
    paintSwatch: PaintSwatch81
    mapped: Mapped80
  }
  
  export interface PaintSwatch81 {
    primary: Primary81
  }
  
  export interface Primary81 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped80 {
    "84711": N84711
    "123217": N123217
    "bmsp-rf-psbip": BmspRfPsbip
    silver: Silver
  }
  
  export interface N84711 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N123217 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspRfPsbip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Silver {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0145 {
    paintSwatch: PaintSwatch82
    mapped: Mapped81
  }
  
  export interface PaintSwatch82 {
    primary: Primary82
  }
  
  export interface Primary82 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped81 {
    "151328": N151328
    "32290427": N32290427
    "32290894": N32290894
    "bmm-7dfb3mbg": Bmm7dfb3mbg
    "bmm-d2b4embg": BmmD2b4embg
  }
  
  export interface N151328 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290427 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290894 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7dfb3mbg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmD2b4embg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0161 {
    paintSwatch: PaintSwatch83
    mapped: Mapped82
  }
  
  export interface PaintSwatch83 {
    primary: Primary83
  }
  
  export interface Primary83 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped82 {
    "97604": N97604
    p0x12: P0x12
    x12: X12
  }
  
  export interface N97604 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x12 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X12 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0164 {
    paintSwatch: PaintSwatch84
    mapped: Mapped83
  }
  
  export interface PaintSwatch84 {
    primary: Primary84
  }
  
  export interface Primary84 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped83 {
    "76243": N76243
    "107930": N107930
    "117992": N117992
    "141672": N141672
    "30049580": N30049580
    "30641381": N30641381
    "32546646": N32546646
    "32548207": N32548207
    "012754-misano-blau": N012754MisanoBlau
    "05264f-sonic-speed-blue": N05264fSonicSpeedBlue
    "102b59-sonic-speed-blue": N102b59SonicSpeedBlue
    "bmm-6033dmb": Bmm6033dmb
    "bmm-6a98fssb": Bmm6a98fssb
    "bmm-ba9ebmb": BmmBa9ebmb
    "bmm-d58e0mb": BmmD58e0mb
    c1d: C1d
    jatometa: Jatometa
    p0c1a: P0c1a
    p0c1d: P0c1d
  }
  
  export interface N76243 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N107930 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N117992 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N141672 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30049580 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641381 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32546646 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548207 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N012754MisanoBlau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N05264fSonicSpeedBlue {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N102b59SonicSpeedBlue {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm6033dmb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm6a98fssb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBa9ebmb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmD58e0mb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatometa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0165 {
    paintSwatch: PaintSwatch85
    mapped: Mapped84
  }
  
  export interface PaintSwatch85 {
    primary: Primary85
  }
  
  export interface Primary85 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped84 {
    "30411790": N30411790
    "30652202": N30652202
    "30776773": N30776773
    "30804341": N30804341
    "32272730": N32272730
    "32276856": N32276856
    "32278266": N32278266
    "32278588": N32278588
    "32285148": N32285148
    "32305571": N32305571
    "32324058": N32324058
    "32341748": N32341748
    "32558394": N32558394
    "32612879": N32612879
    "32707618": N32707618
    "32707621": N32707621
    "32717046": N32717046
    "32719312": N32719312
    "32729296": N32729296
    "32777214": N32777214
    "32850883": N32850883
    "bmm-33b1dpb": Bmm33b1dpb
    "bmm-3b645pb": Bmm3b645pb
    "bmm-417f9pb": Bmm417f9pb
    "bmm-60633pb": Bmm60633pb
    "bmm-641bfpb": Bmm641bfpb
    "bmm-8882epb": Bmm8882epb
    "bmm-8d2cepb": Bmm8d2cepb
    "bmm-94a1epb": Bmm94a1epb
    "bmm-ae7dapb": BmmAe7dapb
    "bmm-d524apb": BmmD524apb
    "bmm-dce8fpb": BmmDce8fpb
    "bmm-e2402pb": BmmE2402pb
    "bmm-f13a6pb": BmmF13a6pb
    customoption177vjy4gg5f: Customoption177vjy4gg5f
    customoption1pazx5lcp7c: Customoption1pazx5lcp7c
    customoption72yuad8de3c: Customoption72yuad8de3c
    customoption7r15263xkdk: Customoption7r15263xkdk
    customoptiona8zf0vixz39: Customoptiona8zf0vixz39
    customoptionhg4s5q2gdub: Customoptionhg4s5q2gdub
    customoptionlxf02itxm6f: Customoptionlxf02itxm6f
    customoptiono6iebcqkc3: Customoptiono6iebcqkc3
    customoptionqudpxoerbmo: Customoptionqudpxoerbmo
  }
  
  export interface N30411790 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652202 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776773 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30804341 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32272730 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276856 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278266 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278588 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32285148 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32305571 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32324058 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32341748 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32558394 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612879 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707618 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707621 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717046 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32719312 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32729296 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32777214 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850883 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm33b1dpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3b645pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm417f9pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm60633pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm641bfpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm8882epb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm8d2cepb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm94a1epb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAe7dapb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmD524apb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmDce8fpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmE2402pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF13a6pb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption177vjy4gg5f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1pazx5lcp7c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption72yuad8de3c {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7r15263xkdk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiona8zf0vixz39 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionhg4s5q2gdub {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlxf02itxm6f {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiono6iebcqkc3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionqudpxoerbmo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0174 {
    paintSwatch: PaintSwatch86
    mapped: Mapped85
  }
  
  export interface PaintSwatch86 {
    primary: Primary86
  }
  
  export interface Primary86 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped85 {
    "5883": N5883
    "121028": N121028
    "123899": N123899
    "6d675c-jucarobeige": N6d675cJucarobeige
    "8d877b-bmw-individual-sonnenstein": N8d877bBmwIndividualSonnenstein
    "8d877bbmwindividualsonnestein": N8d877bbmwindividualsonnestein
    "a1998c-bmw-individual-sonnenstein-metallic": A1998cBmwIndividualSonnensteinMetallic
    "bmm-3b73es": Bmm3b73es
    "bmm-5b47es": Bmm5b47es
    customoptionfyzogcb9vm: Customoptionfyzogcb9vm
    customoptionndkwmxt3q0p: Customoptionndkwmxt3q0p
    p0c1n: P0c1n
  }
  
  export interface N5883 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N121028 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N123899 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N6d675cJucarobeige {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N8d877bBmwIndividualSonnenstein {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N8d877bbmwindividualsonnestein {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A1998cBmwIndividualSonnensteinMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3b73es {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm5b47es {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfyzogcb9vm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionndkwmxt3q0p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0174sspc0004tspc0015 {
    paintSwatch: PaintSwatch87
    mapped: Mapped86
  }
  
  export interface PaintSwatch87 {
    primary: Primary87
    secondary: Secondary22
    tertiary: Tertiary3
  }
  
  export interface Primary87 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary22 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Tertiary3 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped86 {
    b81: B81
  }
  
  export interface B81 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0176 {
    paintSwatch: PaintSwatch88
    mapped: Mapped87
  }
  
  export interface PaintSwatch88 {
    primary: Primary88
  }
  
  export interface Primary88 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped87 {
    "114307": N114307
    c2p: C2p
  }
  
  export interface N114307 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0180 {
    paintSwatch: PaintSwatch89
    mapped: Mapped88
  }
  
  export interface PaintSwatch89 {
    primary: Primary89
  }
  
  export interface Primary89 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped88 {
    p0c16: P0c16
  }
  
  export interface P0c16 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0185 {
    paintSwatch: PaintSwatch90
    mapped: Mapped89
  }
  
  export interface PaintSwatch90 {
    primary: Primary90
  }
  
  export interface Primary90 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped89 {
    "49375": N49375
    "71509": N71509
    "84377": N84377
    "84933": N84933
    "120897": N120897
    "129106": N129106
    "130385": N130385
    "166309": N166309
    "28610026": N28610026
    "30412415": N30412415
    "30641274": N30641274
    "30641415": N30641415
    "30655623": N30655623
    "30655627": N30655627
    "31135288": N31135288
    "31199393": N31199393
    "31266594": N31266594
    "32275060": N32275060
    "32276846": N32276846
    "32278582": N32278582
    "32279002": N32279002
    "32279386": N32279386
    "32723292": N32723292
    "011b4e-marina-bay-blau": N011b4eMarinaBayBlau
    "0185": N0185
    "0f1727-imperialblau-brillianteffekt": N0f1727ImperialblauBrillianteffekt
    "191e2a-imperialblau-brillianteffekt": N191e2aImperialblauBrillianteffekt
    "1c2e70-m-marina-bay-blau-metallic": N1c2e70MMarinaBayBlauMetallic
    "bmm-4e434mbb": Bmm4e434mbb
    "bmm-64635mbb": Bmm64635mbb
    "bmm-925ddmpb": Bmm925ddmpb
    "bmm-a6fbbmbb": BmmA6fbbmbb
    "bmm-f3385ib": BmmF3385ib
    c1k: C1k
    c1w: C1w
    c31: C31
    customoption824prj3s864: Customoption824prj3s864
    customoptionbsldj873cwm: Customoptionbsldj873cwm
    customoptiondw3tzhu9gl8: Customoptiondw3tzhu9gl8
    customoptionek2z3vda7lkk: Customoptionek2z3vda7lkk
    customoptionezgi0ycj99i: Customoptionezgi0ycj99i
    customoptionmdkar2psl5m: Customoptionmdkar2psl5m
    customoptionyo2oz08ifvo: Customoptionyo2oz08ifvo
    p0a89: P0a89
    p0c1k: P0c1k
    p0c1w: P0c1w
    p0c31: P0c31
    p0cx1e: P0cx1e
    pn4jh: Pn4jh
    x1e: X1e
  }
  
  export interface N49375 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N71509 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N84377 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N84933 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N120897 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N129106 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N130385 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N166309 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28610026 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30412415 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641274 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30641415 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655623 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30655627 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31135288 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199393 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266594 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32275060 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32276846 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278582 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32279002 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32279386 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32723292 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N011b4eMarinaBayBlau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0185 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N0f1727ImperialblauBrillianteffekt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N191e2aImperialblauBrillianteffekt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N1c2e70MMarinaBayBlauMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4e434mbb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm64635mbb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm925ddmpb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA6fbbmbb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF3385ib {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1w {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface C31 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption824prj3s864 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionbsldj873cwm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondw3tzhu9gl8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionek2z3vda7lkk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionezgi0ycj99i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmdkar2psl5m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionyo2oz08ifvo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a89 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1w {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c31 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0cx1e {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface Pn4jh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X1e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0185sspc0002 {
    paintSwatch: PaintSwatch91
    mapped: Mapped90
  }
  
  export interface PaintSwatch91 {
    primary: Primary91
    secondary: Secondary23
  }
  
  export interface Primary91 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary23 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped90 {
    "0b111d-imperialblau-avec-accent-frozen-grey-metallic": N0b111dImperialblauAvecAccentFrozenGreyMetallic
  }
  
  export interface N0b111dImperialblauAvecAccentFrozenGreyMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0194 {
    paintSwatch: PaintSwatch92
    mapped: Mapped91
  }
  
  export interface PaintSwatch92 {
    primary: Primary92
  }
  
  export interface Primary92 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped91 {
    "106109": N106109
    "110292": N110292
    "119774": N119774
    "5f5740-sparkling-storm-brillianteffekt": N5f5740SparklingStormBrillianteffekt
    p0c07: P0c07
  }
  
  export interface N106109 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N110292 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N119774 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5f5740SparklingStormBrillianteffekt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c07 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0196 {
    paintSwatch: PaintSwatch93
    mapped: Mapped92
  }
  
  export interface PaintSwatch93 {
    primary: Primary93
  }
  
  export interface Primary93 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped92 {
    "26252": N26252
    met2: Met2
  }
  
  export interface N26252 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Met2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0197 {
    paintSwatch: PaintSwatch94
    mapped: Mapped93
  }
  
  export interface PaintSwatch94 {
    primary: Primary94
  }
  
  export interface Primary94 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped93 {
    "60541": N60541
    "61006": N61006
    "73100": N73100
    "84932": N84932
    "88490": N88490
    "94684": N94684
    "101834": N101834
    "105411": N105411
    "110344": N110344
    "135880": N135880
    "27685863": N27685863
    "27685947": N27685947
    "29740267": N29740267
    "30652931": N30652931
    "30776769": N30776769
    "30776783": N30776783
    "30798791": N30798791
    "32283264": N32283264
    "32558393": N32558393
    "32612872": N32612872
    "32777210": N32777210
    "1e2126-arktikgrau-brillanteffekt-metallic": N1e2126ArktikgrauBrillanteffektMetallic
    "3d3f42-sophistograu-brillianteffekt-metallise": N3d3f42SophistograuBrillianteffektMetallise
    "404040-sophistograu-brillianteffekt-metallic": N404040SophistograuBrillianteffektMetallic
    a68: A68
    a90: A90
    b90: B90
    "bmm-09c84sg": Bmm09c84sg
    "bmm-de5absg": BmmDe5absg
    c22: C22
    c2c2: C2c2
    ce3: Ce3
    customoption0qksncqowr1h: Customoption0qksncqowr1h
    customoption1xhzu3zybpw: Customoption1xhzu3zybpw
    customoption2wo9c1ssfpn: Customoption2wo9c1ssfpn
    customoption32: Customoption32
    customoption33: Customoption33
    customoption3kb152v3mrw: Customoption3kb152v3mrw
    customoption4e67tari37s: Customoption4e67tari37s
    customoption5h73aqukb6: Customoption5h73aqukb6
    customoption6viejom96en: Customoption6viejom96en
    customoptionc83jtugzp: Customoptionc83jtugzp
    customoptionfkc9k07ieot: Customoptionfkc9k07ieot
    customoptionha4n13i6xks: Customoptionha4n13i6xks
    customoptionioieqi2ome: Customoptionioieqi2ome
    customoptionixf1zo1c26h: Customoptionixf1zo1c26h
    customoptionjdwzqhix9if: Customoptionjdwzqhix9if
    customoptionkmsikqvtoxlt: Customoptionkmsikqvtoxlt
    customoptiono5xb88tied9: Customoptiono5xb88tied9
    customoptionr7v15u64qh: Customoptionr7v15u64qh
    customoptionsarmfiqn4gh: Customoptionsarmfiqn4gh
    customoptionsrhsnshavjf: Customoptionsrhsnshavjf
    customoptiontp5wkd0c01: Customoptiontp5wkd0c01
    customoptionu7tjdpvdz3: Customoptionu7tjdpvdz3
    customoptionujqrlu42kn: Customoptionujqrlu42kn
    customoptionw76ejdue81: Customoptionw76ejdue81
    graypluskalisto: Graypluskalisto
    p0a90: P0a90
    p0c22: P0c22
    p0c27: P0c27
  }
  
  export interface N60541 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N61006 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73100 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N84932 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N88490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N94684 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N101834 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N105411 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N110344 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135880 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685863 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N27685947 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29740267 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652931 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776769 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30776783 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30798791 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32283264 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32558393 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32612872 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32777210 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N1e2126ArktikgrauBrillanteffektMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3d3f42SophistograuBrillianteffektMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N404040SophistograuBrillianteffektMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A68 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A90 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B90 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm09c84sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmDe5absg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C22 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C2c2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Ce3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0qksncqowr1h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption1xhzu3zybpw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2wo9c1ssfpn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption32 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption33 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption3kb152v3mrw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption4e67tari37s {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption5h73aqukb6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6viejom96en {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionc83jtugzp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionfkc9k07ieot {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionha4n13i6xks {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionioieqi2ome {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionixf1zo1c26h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjdwzqhix9if {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionkmsikqvtoxlt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiono5xb88tied9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionr7v15u64qh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsarmfiqn4gh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionsrhsnshavjf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontp5wkd0c01 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionu7tjdpvdz3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionujqrlu42kn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionw76ejdue81 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Graypluskalisto {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a90 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c22 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c27 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0197sspc0014 {
    paintSwatch: PaintSwatch95
    mapped: Mapped94
  }
  
  export interface PaintSwatch95 {
    primary: Primary95
    secondary: Secondary24
  }
  
  export interface Primary95 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary24 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped94 {
    c23: C23
  }
  
  export interface C23 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0197sspc0015 {
    paintSwatch: PaintSwatch96
    mapped: Mapped95
  }
  
  export interface PaintSwatch96 {
    primary: Primary96
    secondary: Secondary25
  }
  
  export interface Primary96 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary25 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped95 {
    p0c23: P0c23
  }
  
  export interface P0c23 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0197sspc0026 {
    paintSwatch: PaintSwatch97
    mapped: Mapped96
  }
  
  export interface PaintSwatch97 {
    primary: Primary97
    secondary: Secondary26
  }
  
  export interface Primary97 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary26 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped96 {
    "105410": N105410
  }
  
  export interface N105410 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0198 {
    paintSwatch: PaintSwatch98
    mapped: Mapped97
  }
  
  export interface PaintSwatch98 {
    primary: Primary98
  }
  
  export interface Primary98 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped97 {
    "161549": N161549
    "30806383": N30806383
    "30806846": N30806846
    "30814909": N30814909
    "30823716": N30823716
    "31196236": N31196236
    "31199338": N31199338
    "31266590": N31266590
    "31983317": N31983317
    "32290362": N32290362
    "32290429": N32290429
    "32290584": N32290584
    "32290602": N32290602
    "32290619": N32290619
    "32290915": N32290915
    "32290936": N32290936
    "32292941": N32292941
    "32375797": N32375797
    "32544076": N32544076
    "32546642": N32546642
    "32548204": N32548204
    "32850475": N32850475
    "2163207088": N2163207088
    "4f5454-skyscraper-grau": N4f5454SkyscraperGrau
    "bmm-1aee6dg": Bmm1aee6dg
    "bmm-20037dg": Bmm20037dg
    "bmm-2f76csg": Bmm2f76csg
    "bmm-6995dsg": Bmm6995dsg
    "bmm-75eb1sg": Bmm75eb1sg
    "bmm-8de69sg": Bmm8de69sg
    "bmm-98976sg": Bmm98976sg
    "bmm-bbaafsgm": BmmBbaafsgm
    "bmm-de3c0sg": BmmDe3c0sg
    "bmm-e1e27sg": BmmE1e27sg
    "bmm-e627ddg": BmmE627ddg
    "bmsp-1dec1dg": Bmsp1dec1dg
    "bmsp-9f135dg": Bmsp9f135dg
    "bmsp-c3762dg": BmspC3762dg
    customoption6bds8268p9k: Customoption6bds8268p9k
    customoption9w73io1hkik: Customoption9w73io1hkik
    customoptionokzf3sm3vtl: Customoptionokzf3sm3vtl
    customoptionq5qkkwd032h: Customoptionq5qkkwd032h
    customoptionysixa5rnjcn: Customoptionysixa5rnjcn
  }
  
  export interface N161549 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806383 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806846 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30814909 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823716 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31196236 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31199338 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31266590 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31983317 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290362 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290429 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290584 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290602 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290619 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290915 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290936 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32292941 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32375797 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32544076 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32546642 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548204 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850475 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2163207088 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N4f5454SkyscraperGrau {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm1aee6dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm20037dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm2f76csg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm6995dsg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm75eb1sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm8de69sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm98976sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBbaafsgm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmDe3c0sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmE1e27sg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmE627ddg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp1dec1dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp9f135dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspC3762dg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption6bds8268p9k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9w73io1hkik {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionokzf3sm3vtl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionq5qkkwd032h {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionysixa5rnjcn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0198sspc0064 {
    paintSwatch: PaintSwatch99
    mapped: Mapped98
  }
  
  export interface PaintSwatch99 {
    primary: Primary99
    secondary: Secondary27
  }
  
  export interface Primary99 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary27 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped98 {
    p0wc36: P0wc36
  }
  
  export interface P0wc36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0199 {
    paintSwatch: PaintSwatch100
    mapped: Mapped99
  }
  
  export interface PaintSwatch100 {
    primary: Primary100
  }
  
  export interface Primary100 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped99 {
    "141671": N141671
    "155031": N155031
    "161561": N161561
    "524f3e-manhattan-metallic": N524f3eManhattanMetallic
    "bmm-82a41mm": Bmm82a41mm
    customoptionauwmcl7uumn: Customoptionauwmcl7uumn
    h1h1: H1h1
    p0c3d: P0c3d
  }
  
  export interface N141671 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N155031 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N161561 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N524f3eManhattanMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm82a41mm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionauwmcl7uumn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface H1h1 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0209 {
    paintSwatch: PaintSwatch101
    mapped: Mapped100
  }
  
  export interface PaintSwatch101 {
    primary: Primary101
  }
  
  export interface Primary101 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped100 {
    "416": N416
    "12695": N12695
    "17975": N17975
    "77873": N77873
    "26365733": N26365733
    "28610085": N28610085
    "29740265": N29740265
    "30647289": N30647289
    "30647735": N30647735
    "30649521": N30649521
    "30650905": N30650905
    "30652171": N30652171
    "30802062": N30802062
    "32558391": N32558391
    "1b1f2b-carbonschwarz": N1b1f2bCarbonschwarz
    b79: B79
    "bmm-3cd58cb": Bmm3cd58cb
    "bmm-4297csg": Bmm4297csg
    "bmm-5c2f5cb": Bmm5c2f5cb
    "bmm-74572cb": Bmm74572cb
    "bmm-98d71cb": Bmm98d71cb
    "bmm-atr1-cb": BmmAtr1Cb
    "bmm-b40b1cb": BmmB40b1cb
    "bmm-e61f4cb": BmmE61f4cb
    "bmm-fe2a5cb": BmmFe2a5cb
    customoption241lhcojbxj: Customoption241lhcojbxj
    customoption2debez6q73l: Customoption2debez6q73l
    customoption49: Customoption49
    customoption7ad7ife4mjy: Customoption7ad7ife4mjy
    customoptiondhhp5o51tad: Customoptiondhhp5o51tad
    customoptionl5etab5r8p: Customoptionl5etab5r8p
    customoptionlf6tkmengc: Customoptionlf6tkmengc
    customoptionmvk3fry83cn: Customoptionmvk3fry83cn
    customoptionnprt3kdjp3: Customoptionnprt3kdjp3
    customoptiontc70v4n4lbf: Customoptiontc70v4n4lbf
    customoptiontw5p0ppmrwm: Customoptiontw5p0ppmrwm
    customoptionty041n761j: Customoptionty041n761j
    customoptionvkoiju56t9k: Customoptionvkoiju56t9k
    customoptionz4xvg1mplgl: Customoptionz4xvg1mplgl
    m416: M416
    p0416: P0416
  }
  
  export interface N416 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N12695 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N17975 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N77873 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N26365733 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28610085 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N29740265 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647289 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30647735 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649521 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30650905 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30652171 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30802062 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32558391 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N1b1f2bCarbonschwarz {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B79 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3cd58cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm4297csg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm5c2f5cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm74572cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm98d71cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAtr1Cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB40b1cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmE61f4cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmFe2a5cb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption241lhcojbxj {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption2debez6q73l {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption49 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ad7ife4mjy {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiondhhp5o51tad {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionl5etab5r8p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionlf6tkmengc {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionmvk3fry83cn {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionnprt3kdjp3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontc70v4n4lbf {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiontw5p0ppmrwm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionty041n761j {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvkoiju56t9k {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionz4xvg1mplgl {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface M416 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0416 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0209sspc0180 {
    paintSwatch: PaintSwatch102
    mapped: Mapped101
  }
  
  export interface PaintSwatch102 {
    primary: Primary102
    secondary: Secondary28
  }
  
  export interface Primary102 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary28 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped101 {
    b74: B74
  }
  
  export interface B74 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0219 {
    paintSwatch: PaintSwatch103
    mapped: Mapped102
  }
  
  export interface PaintSwatch103 {
    primary: Primary103
  }
  
  export interface Primary103 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped102 {
    "104299": N104299
    p0b67: P0b67
  }
  
  export interface N104299 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0b67 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0221 {
    paintSwatch: PaintSwatch104
    mapped: Mapped103
  }
  
  export interface PaintSwatch104 {
    primary: Primary104
  }
  
  export interface Primary104 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped103 {
    "134872": N134872
    "3f4f4f-blue-ridge-mountain": N3f4f4fBlueRidgeMountain
    a43: A43
    "bmm-b54efbrm": BmmB54efbrm
    "bmm-c0d25brm": BmmC0d25brm
    "bmm-fd2a9brm": BmmFd2a9brm
    c35: C35
    c36: C36
    customoption0jcx39xwnnt8: Customoption0jcx39xwnnt8
    customoption7ky15g1i3ap: Customoption7ky15g1i3ap
    customoption8uy2nctfi0q: Customoption8uy2nctfi0q
    customoptiongosqzgjtxxv: Customoptiongosqzgjtxxv
    customoptiongzyyjaw89q: Customoptiongzyyjaw89q
    customoptionrqj9rkewt3: Customoptionrqj9rkewt3
    customoptionvrz36iohoqe: Customoptionvrz36iohoqe
    p0c35: P0c35
  }
  
  export interface N134872 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N3f4f4fBlueRidgeMountain {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A43 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB54efbrm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmC0d25brm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmFd2a9brm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C35 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C36 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0jcx39xwnnt8 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7ky15g1i3ap {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8uy2nctfi0q {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongosqzgjtxxv {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiongzyyjaw89q {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionrqj9rkewt3 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionvrz36iohoqe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c35 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0221sspc0026 {
    paintSwatch: PaintSwatch105
    mapped: Mapped104
  }
  
  export interface PaintSwatch105 {
    secondary: Secondary29
    primary: Primary105
  }
  
  export interface Secondary29 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary105 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped104 {
    "152594": N152594
    "30578003": N30578003
    c4z: C4z
    p0c4z: P0c4z
  }
  
  export interface N152594 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30578003 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C4z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c4z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0223 {
    paintSwatch: PaintSwatch106
    mapped: Mapped105
  }
  
  export interface PaintSwatch106 {
    primary: Primary106
  }
  
  export interface Primary106 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped105 {
    "178620": N178620
    "30806388": N30806388
    "31174085": N31174085
    "31174105": N31174105
    "32290359": N32290359
    "32290473": N32290473
    "32290582": N32290582
    "32290745": N32290745
    "32290914": N32290914
    "bmm-02cbfbg": Bmm02cbfbg
    "bmm-3c0f5bg": Bmm3c0f5bg
    "bmm-78de2bg": Bmm78de2bg
    "bmm-b2ac2bg": BmmB2ac2bg
    "bmm-cbb05bg": BmmCbb05bg
    customoptionf5g6xhlpeqa: Customoptionf5g6xhlpeqa
    customoptioni7rtrk9cjxe: Customoptioni7rtrk9cjxe
    customoptionucjkltjhth: Customoptionucjkltjhth
  }
  
  export interface N178620 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30806388 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174085 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31174105 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290359 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290473 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290582 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290745 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32290914 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm02cbfbg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3c0f5bg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm78de2bg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmB2ac2bg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmCbb05bg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionf5g6xhlpeqa {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioni7rtrk9cjxe {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionucjkltjhth {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0230 {
    paintSwatch: PaintSwatch107
    mapped: Mapped106
  }
  
  export interface PaintSwatch107 {
    primary: Primary107
  }
  
  export interface Primary107 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped106 {
    "88361": N88361
    "102646": N102646
    "135134": N135134
    c1z: C1z
    c29: C29
    x14: X14
  }
  
  export interface N88361 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N102646 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135134 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1z {
    paintDescription: string
    nativePaintDescriptions: any[]
  }
  
  export interface C29 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X14 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0234 {
    paintSwatch: PaintSwatch108
    mapped: Mapped107
  }
  
  export interface PaintSwatch108 {
    primary: Primary108
  }
  
  export interface Primary108 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped107 {
    "119761": N119761
    c1m: C1m
    p0c1m: P0c1m
    p0c47: P0c47
    pc1m: Pc1m
    s34: S34
  }
  
  export interface N119761 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c47 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pc1m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface S34 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0237 {
    paintSwatch: PaintSwatch109
    mapped: Mapped108
  }
  
  export interface PaintSwatch109 {
    primary: Primary109
  }
  
  export interface Primary109 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped108 {
    "14752": N14752
    "57741": N57741
    "73773": N73773
    "95701": N95701
    "129107": N129107
    "151907": N151907
    "178674": N178674
    "30052522": N30052522
    "30649898": N30649898
    "30815214": N30815214
    "32548224": N32548224
    "933322-sunset-orange": N933322SunsetOrange
    "963513-sunset-orange-metallise": N963513SunsetOrangeMetallise
    b44: B44
    "bmm-014caso": Bmm014caso
    "bmm-1ca13so": Bmm1ca13so
    "bmm-37716uo": Bmm37716uo
    "bmm-395b3so": Bmm395b3so
    "bmm-3fb23so": Bmm3fb23so
    "bmm-7fb3auo": Bmm7fb3auo
    "bmm-ab37eso": BmmAb37eso
    c1x: C1x
    customoption0yhvyefwko1: Customoption0yhvyefwko1
    p0c1x: P0c1x
    p0c1z: P0c1z
    p0wc1x: P0wc1x
  }
  
  export interface N14752 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N57741 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73773 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N95701 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N129107 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N151907 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  


export interface PaintData {
  target: string
  make: string
  paintCombinations: PaintCombinations
}

export interface PaintCombinations {
  pspc0000: Pspc0000
  pspc0002: Pspc0002
  pspc0002sspc0014: Pspc0002sspc0014
  pspc0002sspc0391: Pspc0002sspc0391
  pspc0004: Pspc0004
  pspc0006: Pspc0006
  pspc0007: Pspc0007
  pspc0008: Pspc0008
  pspc0009: Pspc0009
  pspc0010: Pspc0010
  pspc0014: Pspc0014
  pspc0014sspc0004tspc0002: Pspc0014sspc0004tspc0002
  pspc0015: Pspc0015
  pspc0016: Pspc0016
  pspc0019: Pspc0019
  pspc0020: Pspc0020
  pspc0021: Pspc0021
  pspc0022: Pspc0022
  pspc0023: Pspc0023
  pspc0023sspc0016: Pspc0023sspc0016
  pspc0024: Pspc0024
  pspc0024sspc0004: Pspc0024sspc0004
  pspc0025: Pspc0025
  pspc0026: Pspc0026
  pspc0027: Pspc0027
  pspc0028: Pspc0028
  pspc0029: Pspc0029
  pspc0030: Pspc0030
  pspc0031: Pspc0031
  pspc0033: Pspc0033
  pspc0034: Pspc0034
  pspc0034sspc0064: Pspc0034sspc0064
  pspc0034sspc0119: Pspc0034sspc0119
  pspc0035: Pspc0035
  pspc0036: Pspc0036
  pspc0037: Pspc0037
  pspc0037sspc0199: Pspc0037sspc0199
  pspc0039: Pspc0039
  pspc0040: Pspc0040
  pspc0040sspc0015: Pspc0040sspc0015
  pspc0041: Pspc0041
  pspc0041sspc0324tspc0092: Pspc0041sspc0324tspc0092
  pspc0045: Pspc0045
  pspc0045sspc0026: Pspc0045sspc0026
  pspc0045sspc0064: Pspc0045sspc0064
  pspc0046: Pspc0046
  pspc0051: Pspc0051
  pspc0052: Pspc0052
  pspc0055: Pspc0055
  pspc0056: Pspc0056
  pspc0059: Pspc0059
  pspc0064: Pspc0064
  pspc0064sspc0016: Pspc0064sspc0016
  pspc0064sspc0026: Pspc0064sspc0026
  pspc0064sspc0067: Pspc0064sspc0067
  pspc0065: Pspc0065
  pspc0066: Pspc0066
  pspc0069: Pspc0069
  pspc0080: Pspc0080
  pspc0083: Pspc0083
  pspc0083sspc0026: Pspc0083sspc0026
  pspc0092: Pspc0092
  pspc0096: Pspc0096
  pspc0097: Pspc0097
  pspc0101: Pspc0101
  pspc0103: Pspc0103
  pspc0103sspc0015: Pspc0103sspc0015
  pspc0103sspc0016: Pspc0103sspc0016
  pspc0103sspc0026: Pspc0103sspc0026
  pspc0106: Pspc0106
  pspc0108: Pspc0108
  pspc0111: Pspc0111
  pspc0119: Pspc0119
  pspc0119sspc0064: Pspc0119sspc0064
  pspc0120: Pspc0120
  pspc0124: Pspc0124
  pspc0129: Pspc0129
  pspc0130: Pspc0130
  pspc0138: Pspc0138
  pspc0138sspc0064: Pspc0138sspc0064
  pspc0142: Pspc0142
  pspc0145: Pspc0145
  pspc0161: Pspc0161
  pspc0164: Pspc0164
  pspc0165: Pspc0165
  pspc0174: Pspc0174
  pspc0174sspc0004tspc0015: Pspc0174sspc0004tspc0015
  pspc0176: Pspc0176
  pspc0180: Pspc0180
  pspc0185: Pspc0185
  pspc0185sspc0002: Pspc0185sspc0002
  pspc0194: Pspc0194
  pspc0196: Pspc0196
  pspc0197: Pspc0197
  pspc0197sspc0014: Pspc0197sspc0014
  pspc0197sspc0015: Pspc0197sspc0015
  pspc0197sspc0026: Pspc0197sspc0026
  pspc0198: Pspc0198
  pspc0198sspc0064: Pspc0198sspc0064
  pspc0199: Pspc0199
  pspc0209: Pspc0209
  pspc0209sspc0180: Pspc0209sspc0180
  pspc0219: Pspc0219
  pspc0221: Pspc0221
  pspc0221sspc0026: Pspc0221sspc0026
  pspc0223: Pspc0223
  pspc0230: Pspc0230
  pspc0234: Pspc0234
  pspc0237: Pspc0237
  pspc0240: Pspc0240
  pspc0247: Pspc0247
  pspc0248: Pspc0248
  pspc0249: Pspc0249
  pspc0252: Pspc0252
  pspc0256: Pspc0256
  pspc0259: Pspc0259
  pspc0259sspc0026: Pspc0259sspc0026
  pspc0268: Pspc0268
  pspc0271: Pspc0271
  pspc0275: Pspc0275
  pspc0277: Pspc0277
  pspc0288: Pspc0288
  pspc0291: Pspc0291
  pspc0297: Pspc0297
  pspc0319: Pspc0319
  pspc0323: Pspc0323
  pspc0334: Pspc0334
  pspc0335: Pspc0335
  pspc0336: Pspc0336
  pspc0343: Pspc0343
  pspc0352: Pspc0352
  pspc0356: Pspc0356
  pspc0356sspc0064: Pspc0356sspc0064
  pspc0358: Pspc0358
  pspc0362: Pspc0362
  pspc0363: Pspc0363
  pspc0367: Pspc0367
  pspc0368sspc0064tspc0067: Pspc0368sspc0064tspc0067
  pspc0370: Pspc0370
  pspc0373: Pspc0373
  pspc0373sspc0119: Pspc0373sspc0119
  pspc0374: Pspc0374
  pspc0377: Pspc0377
  pspc0378: Pspc0378
  pspc0387: Pspc0387
}

export interface Pspc0000 {
  paintSwatch: PaintSwatch
  mapped: Mapped
}

export interface PaintSwatch {
  primary: Primary
}

export interface Primary {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped {
  "481": N481
  "110343": N110343
  "119578": N119578
  "152070": N152070
  "30647311": N30647311
  "63645d-alvitgrau-metallic": N63645dAlvitgrauMetallic
  "63645d-alvitgrau-metallise": N63645dAlvitgrauMetallise
  "666060-bmw-individual-alvitgrau-metallic": N666060BmwIndividualAlvitgrauMetallic
  b66: B66
  "bmm-1cedcjb": Bmm1cedcjb
  "bmm-22064agm": Bmm22064agm
  customoption55: Customoption55
  p0c48: P0c48
  p0c5e: P0c5e
}

export interface N481 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N110343 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119578 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152070 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647311 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N63645dAlvitgrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N63645dAlvitgrauMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N666060BmwIndividualAlvitgrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B66 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm1cedcjb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm22064agm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption55 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c48 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c5e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0002 {
  paintSwatch: PaintSwatch2
  mapped: Mapped2
}

export interface PaintSwatch2 {
  primary: Primary2
}

export interface Primary2 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped2 {
  "490": N490
  "60904": N60904
  "82589": N82589
  "84931": N84931
  "108726": N108726
  "121713": N121713
  "122439": N122439
  "145015": N145015
  "145047": N145047
  "145048": N145048
  "145049": N145049
  "152287": N152287
  "30870531": N30870531
  "31135296": N31135296
  "32285349": N32285349
  "32558395": N32558395
  "32777217": N32777217
  "490a": N490a
  "490c": N490c
  "490f": N490f
  a72: A72
  "bmm-bec7acs": BmmBec7acs
  c2s: C2s
  customoptionb0jtnwhw127: Customoptionb0jtnwhw127
  customoptiongkpb070vttn: Customoptiongkpb070vttn
  customoptionznjevr5w0qp: Customoptionznjevr5w0qp
  jatop001: Jatop001
  p0490: P0490
  p0490b: P0490b
  p0490g: P0490g
  p0a72: P0a72
  p0a96: P0a96
  p0c2s: P0c2s
  p0p63: P0p63
  p0u21: P0u21
  p0x16: P0x16
}

export interface N490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N60904 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N82589 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N84931 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N108726 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N121713 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N122439 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145015 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145047 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145048 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145049 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152287 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30870531 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31135296 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N32285349 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32558395 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32777217 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A72 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBec7acs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2s {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionb0jtnwhw127 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongkpb070vttn {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Customoptionznjevr5w0qp {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Jatop001 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a72 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a96 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c2s {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0p63 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0u21 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x16 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0002sspc0014 {
  paintSwatch: PaintSwatch3
  mapped: Mapped3
}

export interface PaintSwatch3 {
  primary: Primary3
  secondary: Secondary
}

export interface Primary3 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped3 {
  c4x: C4x
  p0c4x: P0c4x
}

export interface C4x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0002sspc0391 {
  paintSwatch: PaintSwatch4
  mapped: Mapped4
}

export interface PaintSwatch4 {
  primary: Primary4
  secondary: Secondary2
}

export interface Primary4 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary2 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped4 {
  "116405": N116405
}

export interface N116405 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0004 {
  paintSwatch: PaintSwatch5
  mapped: Mapped5
}

export interface PaintSwatch5 {
  primary: Primary5
}

export interface Primary5 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped5 {
  "475": N475
  "668": N668
  "6387": N6387
  "11098": N11098
  "26230": N26230
  "61202": N61202
  "69094": N69094
  "74317": N74317
  "26578472": N26578472
  "27685797": N27685797
  "27973209": N27973209
  "28610122": N28610122
  "28934192": N28934192
  "28934275": N28934275
  "29540490": N29540490
  "30017411": N30017411
  "30017449": N30017449
  "30051808": N30051808
  "30051809": N30051809
  "30051819": N30051819
  "30051832": N30051832
  "30051855": N30051855
  "30051864": N30051864
  "30052461": N30052461
  "30052516": N30052516
  "30052574": N30052574
  "30343662": N30343662
  "30641400": N30641400
  "30641516": N30641516
  "30642422": N30642422
  "30645508": N30645508
  "30647275": N30647275
  "30647278": N30647278
  "30649535": N30649535
  "30649567": N30649567
  "30649884": N30649884
  "30650891": N30650891
  "30652165": N30652165
  "30653176": N30653176
  "30673150": N30673150
  "30770047": N30770047
  "30773360": N30773360
  "30776765": N30776765
  "30776779": N30776779
  "30778413": N30778413
  "30778740": N30778740
  "30782012": N30782012
  "30788274": N30788274
  "30788472": N30788472
  "30788683": N30788683
  "30789892": N30789892
  "30790189": N30790189
  "30790800": N30790800
  "30805979": N30805979
  "30806090": N30806090
  "30806193": N30806193
  "30814905": N30814905
  "30814906": N30814906
  "30815206": N30815206
  "30823559": N30823559
  "30823572": N30823572
  "30824034": N30824034
  "31174101": N31174101
  "31266587": N31266587
  "31266891": N31266891
  "31500190": N31500190
  "31514675": N31514675
  "32275021": N32275021
  "32278894": N32278894
  "32285113": N32285113
  "32305566": N32305566
  "32324042": N32324042
  "32341745": N32341745
  "32375773": N32375773
  "32378941": N32378941
  "32543951": N32543951
  "32707611": N32707611
  "32707616": N32707616
  "32717042": N32717042
  "32723288": N32723288
  "32850466": N32850466
  "32850880": N32850880
  "33113344": N33113344
  "0096": N0096
  "070707-saphirschwarz-metallic": N070707SaphirschwarzMetallic
  "070707-saphirschwarz-metallise": N070707SaphirschwarzMetallise
  "0e": N0e
  "0r": N0r
  "2t2t": N2t2t
  "373737-saphirschwarz-metallise": N373737SaphirschwarzMetallise
  "463f39-jatoba": N463f39Jatoba
  "490p": N490p
  c49: C49
  customoption05s0x5bu04sg: Customoption05s0x5bu04sg
  customoption0qwphl1mwblq: Customoption0qwphl1mwblq
  customoption0wsqmoyps3i: Customoption0wsqmoyps3i
  customoption1bke1973v71j: Customoption1bke1973v71j
  customoption1jf6klter8l: Customoption1jf6klter8l
  customoption36: Customoption36
  customoption39: Customoption39
  customoption404wgv7rcy2: Customoption404wgv7rcy2
  customoption4uns5cc3d2x: Customoption4uns5cc3d2x
  customoption78185hxsvcj: Customoption78185hxsvcj
  customoption78ffopxkl43: Customoption78ffopxkl43
  customoption7hx2dkzv45i: Customoption7hx2dkzv45i
  customoption7sn3qngp93x: Customoption7sn3qngp93x
  customoption9503d0ow3fa: Customoption9503d0ow3fa
  customoptionasi7b7wn2mc: Customoptionasi7b7wn2mc
  customoptionaw9gvhayxy8: Customoptionaw9gvhayxy8
  customoptionayi80tu29li: Customoptionayi80tu29li
  customoptioncp8aywgkrtf: Customoptioncp8aywgkrtf
  customoptiondd2up1fw0l: Customoptiondd2up1fw0l
  customoptionfa45cnk7h9g: Customoptionfa45cnk7h9g
  customoptiong3tcs2yd6yl: Customoptiong3tcs2yd6yl
  customoptiongh7m0otx176: Customoptiongh7m0otx176
  customoptionhxtnmzbwsrf: Customoptionhxtnmzbwsrf
  customoptionibpa9hqu8me: Customoptionibpa9hqu8me
  customoptionjki6lr23cy: Customoptionjki6lr23cy
  customoptionkf5c2cprz5i: Customoptionkf5c2cprz5i
  customoptionlhscw4hpg7: Customoptionlhscw4hpg7
  customoptiono9x4trsyenb: Customoptiono9x4trsyenb
  customoptionoxlksh89jub: Customoptionoxlksh89jub
  customoptionp5nvk33s8mb: Customoptionp5nvk33s8mb
  customoptionqvrhzuzbe5: Customoptionqvrhzuzbe5
  customoptionrlt8y37l7gd: Customoptionrlt8y37l7gd
  customoptionrr93mk42be: Customoptionrr93mk42be
  customoptions2nsf87ckkc: Customoptions2nsf87ckkc
  customoptiontl5084rmi5: Customoptiontl5084rmi5
  customoptiontr6zcd4fqzr: Customoptiontr6zcd4fqzr
  customoptiontt4zobhjliq: Customoptiontt4zobhjliq
  customoptionu0im6wh6jnr: Customoptionu0im6wh6jnr
  customoptionuipoqc0yvt: Customoptionuipoqc0yvt
  customoptionusnr6l3a0w: Customoptionusnr6l3a0w
  customoptionv6b6ek6xdm: Customoptionv6b6ek6xdm
  customoptionv7y1d1zot2j: Customoptionv7y1d1zot2j
  customoptionvbcym3mn5yd: Customoptionvbcym3mn5yd
  customoptionvnqqt7lf5z: Customoptionvnqqt7lf5z
  customoptionxft9tngf7: Customoptionxft9tngf7
  customoptiony0z7hwouhk9: Customoptiony0z7hwouhk9
  customoptionyr0cm5g7lyb: Customoptionyr0cm5g7lyb
  i: I
  imagineblack: Imagineblack
  jato416: Jato416
  negru: Negru
  "object-promise": ObjectPromise
  p0475: P0475
  p0688: P0688
  p0c49: P0c49
  p0x02: P0x02
  pbsb: Pbsb
  spc0004: Spc0004
  x80: X80
}

export interface N475 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N668 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N6387 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N11098 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26230 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N61202 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N69094 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N74317 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26578472 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685797 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27973209 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28610122 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934192 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934275 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29540490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30017411 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30017449 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051808 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051809 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051819 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051832 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051855 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051864 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30052461 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30052516 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30052574 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30343662 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641400 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641516 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30642422 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30645508 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647275 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647278 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649535 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649567 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649884 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650891 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652165 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653176 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30673150 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30770047 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30773360 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776765 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776779 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30778413 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30778740 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30782012 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788274 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788472 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788683 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30789892 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30790189 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30790800 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30805979 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806090 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806193 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814905 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814906 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815206 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823559 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823572 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30824034 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174101 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266587 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266891 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31500190 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31514675 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275021 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278894 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32285113 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305566 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32324042 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341745 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32375773 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32378941 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32543951 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707611 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707616 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717042 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723288 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850466 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850880 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N33113344 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0096 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N070707SaphirschwarzMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N070707SaphirschwarzMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2t2t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N373737SaphirschwarzMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N463f39Jatoba {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C49 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Customoption05s0x5bu04sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0qwphl1mwblq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0wsqmoyps3i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1bke1973v71j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1jf6klter8l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption404wgv7rcy2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4uns5cc3d2x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption78185hxsvcj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption78ffopxkl43 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7hx2dkzv45i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7sn3qngp93x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9503d0ow3fa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionasi7b7wn2mc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaw9gvhayxy8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionayi80tu29li {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncp8aywgkrtf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondd2up1fw0l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfa45cnk7h9g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiong3tcs2yd6yl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongh7m0otx176 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhxtnmzbwsrf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionibpa9hqu8me {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjki6lr23cy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkf5c2cprz5i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlhscw4hpg7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiono9x4trsyenb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionoxlksh89jub {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionp5nvk33s8mb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqvrhzuzbe5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrlt8y37l7gd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrr93mk42be {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptions2nsf87ckkc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontl5084rmi5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontr6zcd4fqzr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontt4zobhjliq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu0im6wh6jnr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuipoqc0yvt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionusnr6l3a0w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv6b6ek6xdm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv7y1d1zot2j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvbcym3mn5yd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvnqqt7lf5z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxft9tngf7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiony0z7hwouhk9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyr0cm5g7lyb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface I {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imagineblack {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jato416 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Negru {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface ObjectPromise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0475 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0688 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c49 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x02 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pbsb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Spc0004 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface X80 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0006 {
  paintSwatch: PaintSwatch6
  mapped: Mapped6
}

export interface PaintSwatch6 {
  primary: Primary6
}

export interface Primary6 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped6 {
  "4599": N4599
  "38729": N38729
  "32710641": N32710641
  "191919-saphirschwarz-metallise": N191919SaphirschwarzMetallise
  "bms-d7d05jb": BmsD7d05jb
  customoption0okpt1i7epsp: Customoption0okpt1i7epsp
  p0668: P0668
}

export interface N4599 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N38729 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32710641 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N191919SaphirschwarzMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmsD7d05jb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0okpt1i7epsp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0668 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0007 {
  paintSwatch: PaintSwatch7
  mapped: Mapped7
}

export interface PaintSwatch7 {
  primary: Primary7
}

export interface Primary7 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped7 {
  "381": N381
  "26283": N26283
  "47888": N47888
  b45: B45
  p0b45: P0b45
}

export interface N381 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26283 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N47888 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B45 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b45 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0008 {
  paintSwatch: PaintSwatch8
  mapped: Mapped8
}

export interface PaintSwatch8 {
  primary: Primary8
}

export interface Primary8 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped8 {
  "117770": N117770
  "30806517": N30806517
  "266b88-snapper-rocks-blue": N266b88SnapperRocksBlue
  "bmm-c64cfsrb": BmmC64cfsrb
  "bmm-ecc1csr": BmmEcc1csr
  c16: C16
  c1g: C1g
  jatoc1g: Jatoc1g
  p0c1g: P0c1g
  sgjhgjkhjkkhsd: Sgjhgjkhjkkhsd
}

export interface N117770 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806517 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N266b88SnapperRocksBlue {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmC64cfsrb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmEcc1csr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C16 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatoc1g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Sgjhgjkhjkkhsd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0009 {
  paintSwatch: PaintSwatch9
  mapped: Mapped9
}

export interface PaintSwatch9 {
  primary: Primary9
}

export interface Primary9 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped9 {
  "152807": N152807
  "32293026": N32293026
  a85: A85
  "bmm-ed72earb": BmmEd72earb
  "bmm-ef99farb": BmmEf99farb
  p0c4f: P0c4f
}

export interface N152807 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32293026 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A85 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmEd72earb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmEf99farb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0010 {
  paintSwatch: PaintSwatch10
  mapped: Mapped10
}

export interface PaintSwatch10 {
  primary: Primary10
}

export interface Primary10 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped10 {
  "123938": N123938
  "139892": N139892
  "152712": N152712
  "30052929": N30052929
  "30641394": N30641394
  "30823608": N30823608
  "31199349": N31199349
  "31199367": N31199367
  "31266596": N31266596
  "32271212": N32271212
  "32348105": N32348105
  "32376724": N32376724
  "32707630": N32707630
  "32717055": N32717055
  "32850889": N32850889
  "33106193": N33106193
  b40: B40
  "bmm-06af2sbm": Bmm06af2sbm
  "bmm-86b46sb": Bmm86b46sb
  "bmm-be144bb": BmmBe144bb
  "bmm-fe02dsbim": BmmFe02dsbim
  "bmsp-1a9dcsbim": Bmsp1a9dcsbim
  "bmsp-24baesb": Bmsp24baesb
  c3n: C3n
  customoption59hz814vhl9: Customoption59hz814vhl9
  customoptionc9ow5hy4lo: Customoptionc9ow5hy4lo
  customoptionm6npvahspk: Customoptionm6npvahspk
  customoptionoe3tj1sth: Customoptionoe3tj1sth
  customoptionsfopfgcci1: Customoptionsfopfgcci1
  customoptionv3elew0fpff: Customoptionv3elew0fpff
  p0c38: P0c38
  p0c3n: P0c3n
  p0c6h: P0c6h
}

export interface N123938 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139892 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152712 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30052929 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641394 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823608 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199349 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199367 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266596 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32271212 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32348105 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32376724 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707630 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717055 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850889 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N33106193 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B40 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm06af2sbm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm86b46sb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBe144bb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmFe02dsbim {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp1a9dcsbim {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp24baesb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C3n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption59hz814vhl9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionc9ow5hy4lo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionm6npvahspk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionoe3tj1sth {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsfopfgcci1 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv3elew0fpff {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c38 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c6h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0014 {
  paintSwatch: PaintSwatch11
  mapped: Mapped11
}

export interface PaintSwatch11 {
  primary: Primary11
}

export interface Primary11 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped11 {
  "1z161": N1z161
}

export interface N1z161 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0014sspc0004tspc0002 {
  paintSwatch: PaintSwatch12
  mapped: Mapped12
}

export interface PaintSwatch12 {
  primary: Primary12
  secondary: Secondary3
  tertiary: Tertiary
}

export interface Primary12 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary3 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Tertiary {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped12 {
  p0c01: P0c01
}

export interface P0c01 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0015 {
  paintSwatch: PaintSwatch13
  mapped: Mapped13
}

export interface PaintSwatch13 {
  primary: Primary13
}

export interface Primary13 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped13 {
  "104300": N104300
  "105352": N105352
  "119314": N119314
  "119315": N119315
  b68: B68
  c01: C01
  c1r: C1r
  p0c1r: P0c1r
}

export interface N104300 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N105352 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119314 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119315 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B68 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C01 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1r {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0c1r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0016 {
  paintSwatch: PaintSwatch14
  mapped: Mapped14
}

export interface PaintSwatch14 {
  primary: Primary14
}

export interface Primary14 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped14 {
  "5677": N5677
  "62679": N62679
  "68700": N68700
  "73400": N73400
  "88415": N88415
  "95068": N95068
  "117803": N117803
  "121919": N121919
  "122399": N122399
  "132075": N132075
  "135131": N135131
  "135360": N135360
  "139782": N139782
  "141205": N141205
  "141210": N141210
  "145038": N145038
  "145610": N145610
  "152071": N152071
  "152286": N152286
  "154952": N154952
  "155032": N155032
  "178514": N178514
  "27685844": N27685844
  "29540537": N29540537
  "29736186": N29736186
  "29740268": N29740268
  "30646086": N30646086
  "30647326": N30647326
  "30652200": N30652200
  "30653442": N30653442
  "30655631": N30655631
  "30788255": N30788255
  "30788560": N30788560
  "30791117": N30791117
  "30791299": N30791299
  "30791965": N30791965
  "30791969": N30791969
  "30791973": N30791973
  "30814911": N30814911
  "30814913": N30814913
  "30815210": N30815210
  "30815212": N30815212
  "30869283": N30869283
  "31085833": N31085833
  "31498434": N31498434
  "31498565": N31498565
  "32275072": N32275072
  "32275156": N32275156
  "32275167": N32275167
  "32276848": N32276848
  "32277762": N32277762
  "32278246": N32278246
  "32278593": N32278593
  "32279013": N32279013
  "32305392": N32305392
  "32324061": N32324061
  "32548219": N32548219
  "32707620": N32707620
  "32707623": N32707623
  "32717048": N32717048
  "32850884": N32850884
  "021846-tansanitblau": N021846Tansanitblau
  "112459-m-portimao-blau": N112459MPortimaoBlau
  "12273f-bmw-individual-tansanitblau-ii": N12273fBmwIndividualTansanitblauIi
  "172a4c-tansanitblau-ii-metallic": N172a4cTansanitblauIiMetallic
  "19436b-phytonicblau-metallise": N19436bPhytonicblauMetallise
  a76: A76
  "bmm-0c6dctb": Bmm0c6dctb
  "bmm-18486tb": Bmm18486tb
  "bmm-1f495tb": Bmm1f495tb
  "bmm-29fbftb": Bmm29fbftb
  "bmm-34fc5mpb": Bmm34fc5mpb
  "bmm-3d86dpb": Bmm3d86dpb
  "bmm-76eb8tbi": Bmm76eb8tbi
  "bmm-8fd75pb": Bmm8fd75pb
  "bmm-95c77tb-bi": Bmm95c77tbBi
  "bmm-97d80tb": Bmm97d80tb
  "bmm-a2ae4pb": BmmA2ae4pb
  "bmm-bmab-tb": BmmBmabTb
  "bmm-c4bd3pb": BmmC4bd3pb
  "bmm-c7dbetb": BmmC7dbetb
  "bmm-f98b3mb": BmmF98b3mb
  "bmsp-453fcbiptb": Bmsp453fcbiptb
  "bmsp-4f99cb2ipt": Bmsp4f99cb2ipt
  "bmsp-64c5ebimpt": Bmsp64c5ebimpt
  "bmsp-7a0f8tb": Bmsp7a0f8tb
  "bmsp-84a5etb": Bmsp84a5etb
  "bmsp-a08c5tb": BmspA08c5tb
  "bmsp-b2221tb": BmspB2221tb
  "bmsp-b5b40bimpt": BmspB5b40bimpt
  "bmsp-f9338tbip": BmspF9338tbip
  c10: C10
  customoption1mre87iv84g: Customoption1mre87iv84g
  customoption37: Customoption37
  customoption39ka4nl6735: Customoption39ka4nl6735
  customoption4ll8nv1kgiq: Customoption4ll8nv1kgiq
  customoption4ys4c4yh9j2: Customoption4ys4c4yh9j2
  customoption6cffk3b254v: Customoption6cffk3b254v
  customoption72gmvdqd434: Customoption72gmvdqd434
  customoption7hff0l4rjhq: Customoption7hff0l4rjhq
  customoption7smd1sjl5p: Customoption7smd1sjl5p
  customoption86z0ps9czym: Customoption86z0ps9czym
  customoptioneepp9futk6g: Customoptioneepp9futk6g
  customoptionezk9lek1ltd: Customoptionezk9lek1ltd
  customoptiong3x44m8vvaj: Customoptiong3x44m8vvaj
  customoptioni6z73lzqzhl: Customoptioni6z73lzqzhl
  customoptionjmd2sal12l: Customoptionjmd2sal12l
  customoptionjtprksnu4l9: Customoptionjtprksnu4l9
  customoptionjxlwdqdfppc: Customoptionjxlwdqdfppc
  customoptionk5npsno12rmx: Customoptionk5npsno12rmx
  customoptionkvlg153pkq: Customoptionkvlg153pkq
  customoptionljwcx8bbqnd: Customoptionljwcx8bbqnd
  customoptionm9oh0fti1a: Customoptionm9oh0fti1a
  customoptionmk741ctrbld: Customoptionmk741ctrbld
  customoptionnaqozm0a2f: Customoptionnaqozm0a2f
  customoptionnxrb91blgak: Customoptionnxrb91blgak
  customoptionp8dn64z8x3: Customoptionp8dn64z8x3
  customoptionpac5bomv7n: Customoptionpac5bomv7n
  customoptionqidk51ldstb: Customoptionqidk51ldstb
  customoptionqnkyn5ttaf: Customoptionqnkyn5ttaf
  customoptionris65eom0m: Customoptionris65eom0m
  customoptionrpmq7z0xnvt: Customoptionrpmq7z0xnvt
  customoptionrvgs2rcdm9: Customoptionrvgs2rcdm9
  customoptiont3xzsy9kv4d: Customoptiont3xzsy9kv4d
  customoptiont8aixad0od: Customoptiont8aixad0od
  customoptionua0oii0dffs: Customoptionua0oii0dffs
  customoptionv61oin8zbl: Customoptionv61oin8zbl
  customoptionvn5uua1cvgf: Customoptionvn5uua1cvgf
  customoptionvys9phku83: Customoptionvys9phku83
  customoptionxti6q2nb3je: Customoptionxti6q2nb3je
  customoptionymawx43rseb: Customoptionymawx43rseb
  customoptionyp0lhxn1fsi: Customoptionyp0lhxn1fsi
  customoptionz5peordnyj: Customoptionz5peordnyj
  jatoc31: Jatoc31
  p0b51: P0b51
  p0c10: P0c10
  p0c3z: P0c3z
  p0x10: P0x10
  x10: X10
}

export interface N5677 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N62679 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N68700 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73400 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N88415 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N95068 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N117803 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N121919 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N122399 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N132075 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135131 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135360 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139782 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N141205 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N141210 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145038 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145610 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152071 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152286 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N154952 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155032 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N178514 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685844 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29540537 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29736186 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29740268 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30646086 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647326 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652200 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653442 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655631 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788255 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788560 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791117 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791299 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791965 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791969 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791973 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814911 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814913 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815210 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815212 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30869283 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31085833 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498434 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498565 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275072 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275156 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275167 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276848 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32277762 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278246 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278593 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32279013 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305392 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32324061 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548219 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707620 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707623 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717048 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850884 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N021846Tansanitblau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N112459MPortimaoBlau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N12273fBmwIndividualTansanitblauIi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N172a4cTansanitblauIiMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N19436bPhytonicblauMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A76 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm0c6dctb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm18486tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm1f495tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm29fbftb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm34fc5mpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3d86dpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm76eb8tbi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm8fd75pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm95c77tbBi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm97d80tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA2ae4pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBmabTb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmC4bd3pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmC7dbetb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF98b3mb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp453fcbiptb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp4f99cb2ipt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp64c5ebimpt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp7a0f8tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp84a5etb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspA08c5tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspB2221tb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspB5b40bimpt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspF9338tbip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C10 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1mre87iv84g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption37 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption39ka4nl6735 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4ll8nv1kgiq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4ys4c4yh9j2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6cffk3b254v {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption72gmvdqd434 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7hff0l4rjhq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7smd1sjl5p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption86z0ps9czym {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioneepp9futk6g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionezk9lek1ltd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiong3x44m8vvaj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioni6z73lzqzhl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjmd2sal12l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjtprksnu4l9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjxlwdqdfppc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionk5npsno12rmx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkvlg153pkq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionljwcx8bbqnd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionm9oh0fti1a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmk741ctrbld {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnaqozm0a2f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnxrb91blgak {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionp8dn64z8x3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpac5bomv7n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqidk51ldstb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqnkyn5ttaf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionris65eom0m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrpmq7z0xnvt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrvgs2rcdm9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiont3xzsy9kv4d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiont8aixad0od {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionua0oii0dffs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv61oin8zbl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvn5uua1cvgf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvys9phku83 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxti6q2nb3je {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionymawx43rseb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyp0lhxn1fsi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionz5peordnyj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatoc31 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b51 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c10 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3z {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0x10 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X10 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0019 {
  paintSwatch: PaintSwatch15
  mapped: Mapped15
}

export interface PaintSwatch15 {
  primary: Primary15
}

export interface Primary15 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped15 {
  "88360": N88360
  "96170": N96170
  "100454": N100454
  "139780": N139780
  "490g": N490g
  b06: B06
  p0b53: P0b53
  p0x11: P0x11
  x11: X11
}

export interface N88360 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N96170 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N100454 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139780 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B06 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b53 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x11 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X11 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0020 {
  paintSwatch: PaintSwatch16
  mapped: Mapped16
}

export interface PaintSwatch16 {
  primary: Primary16
}

export interface Primary16 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped16 {
  "4601": N4601
  "157629": N157629
  "bmm-2da15iomg": Bmm2da15iomg
  "bmm-ac281iomg": BmmAc281iomg
  c4g: C4g
  p0c4g: P0c4g
}

export interface N4601 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N157629 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm2da15iomg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAc281iomg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C4g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0021 {
  paintSwatch: PaintSwatch17
  mapped: Mapped17
}

export interface PaintSwatch17 {
  primary: Primary17
}

export interface Primary17 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped17 {
  "84376": N84376
  "158102": N158102
  "161833": N161833
  "176808": N176808
  "30814907": N30814907
  "30815207": N30815207
  "32305575": N32305575
  "32312703": N32312703
  "32341750": N32341750
  "32710649": N32710649
  "32723294": N32723294
  "32850471": N32850471
  "232910-sanremo-green-metallic": N232910SanremoGreenMetallic
  "232910-sanremo-green-metallise": N232910SanremoGreenMetallise
  "bmm-0eafasg": Bmm0eafasg
  "bmm-21786sg": Bmm21786sg
  "bmm-7c878sg": Bmm7c878sg
  "bmm-b861dsg": BmmB861dsg
  "bmm-cf983sg": BmmCf983sg
  "bmm-f92bfsg": BmmF92bfsg
  customoptionsx732iv51r: Customoptionsx732iv51r
  customoptionz2a1dt9lpdd: Customoptionz2a1dt9lpdd
  p0205: P0205
  p0490f: P0490f
  p0a04: P0a04
  p0c4e: P0c4e
}

export interface N84376 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N158102 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N161833 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N176808 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814907 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815207 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305575 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32312703 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341750 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32710649 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723294 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850471 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N232910SanremoGreenMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N232910SanremoGreenMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm0eafasg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm21786sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7c878sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB861dsg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmCf983sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF92bfsg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsx732iv51r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionz2a1dt9lpdd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0205 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a04 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0022 {
  paintSwatch: PaintSwatch18
  mapped: Mapped18
}

export interface PaintSwatch18 {
  primary: Primary18
}

export interface Primary18 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped18 {
  "93856": N93856
  "135437": N135437
  "145037": N145037
  "152285": N152285
  "30649606": N30649606
  "30652201": N30652201
  "5c5650-bmw-individual-champagner-quartz": N5c5650BmwIndividualChampagnerQuartz
  "60574f-champagner-quartz": N60574fChampagnerQuartz
  customoption3dzbc4kp1tu: Customoption3dzbc4kp1tu
  customoption7ecy6gl9ll: Customoption7ecy6gl9ll
  customoptionjn5v1b59g5: Customoptionjn5v1b59g5
  customoptionr78phsf714e: Customoptionr78phsf714e
  customoptiontsn587d3one: Customoptiontsn587d3one
  customoptionv5bzf0lllzs: Customoptionv5bzf0lllzs
  p0c3e: P0c3e
  p0x08: P0x08
  x08: X08
}

export interface N93856 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135437 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145037 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152285 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649606 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652201 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5c5650BmwIndividualChampagnerQuartz {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N60574fChampagnerQuartz {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3dzbc4kp1tu {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ecy6gl9ll {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjn5v1b59g5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr78phsf714e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontsn587d3one {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv5bzf0lllzs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x08 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X08 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0023 {
  paintSwatch: PaintSwatch19
  mapped: Mapped19
}

export interface PaintSwatch19 {
  primary: Primary19
}

export interface Primary19 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped19 {
  customoptionqh24ti1qb7k: Customoptionqh24ti1qb7k
  customoptionwc820f8w1hr: Customoptionwc820f8w1hr
  customoptionwgsq446r2vr: Customoptionwgsq446r2vr
}

export interface Customoptionqh24ti1qb7k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwc820f8w1hr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwgsq446r2vr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0023sspc0016 {
  paintSwatch: PaintSwatch20
  mapped: Mapped20
}

export interface PaintSwatch20 {
  secondary: Secondary4
  primary: Primary20
}

export interface Secondary4 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary20 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped20 {
  "130382": N130382
  b39b94: B39b94
  p0c2v: P0c2v
}

export interface N130382 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B39b94 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0c2v {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0024 {
  paintSwatch: PaintSwatch21
  mapped: Mapped21
}

export interface PaintSwatch21 {
  primary: Primary21
}

export interface Primary21 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped21 {
  "10706": N10706
  "56262": N56262
  "100661": N100661
  pa005: Pa005
}

export interface N10706 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N56262 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N100661 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa005 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0024sspc0004 {
  paintSwatch: PaintSwatch22
  mapped: Mapped22
}

export interface PaintSwatch22 {
  primary: Primary22
  secondary: Secondary5
}

export interface Primary22 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary5 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped22 {
  "163225": N163225
  "163226": N163226
}

export interface N163225 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N163226 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0025 {
  paintSwatch: PaintSwatch23
  mapped: Mapped23
}

export interface PaintSwatch23 {
  primary: Primary23
}

export interface Primary23 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped23 {
  "94900": N94900
  "101109": N101109
  "166208": N166208
  "166448": N166448
  b41: B41
  c09: C09
  customoption9fl4g2cvli: Customoption9fl4g2cvli
  p0490a: P0490a
  p0490d: P0490d
  p0b41: P0b41
  p0c64: P0c64
  p0p7x: P0p7x
  pa03: Pa03
}

export interface N94900 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N101109 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N166208 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N166448 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B41 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C09 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9fl4g2cvli {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b41 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c64 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p7x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa03 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0026 {
  paintSwatch: PaintSwatch24
  mapped: Mapped24
}

export interface PaintSwatch24 {
  primary: Primary24
}

export interface Primary24 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped24 {
  "80336": N80336
  "94919": N94919
  "155438": N155438
  "174425": N174425
  "174548": N174548
  "177453": N177453
  "178458": N178458
  "179306": N179306
  "31196300": N31196300
  "31199778": N31199778
  "32341756": N32341756
  "32548227": N32548227
  "2163207087": N2163207087
  "3e3f3a-frozen-grey-ii": N3e3f3aFrozenGreyIi
  "490b": N490b
  "bmsp-5be29bipfp": Bmsp5be29bipfp
  "bmsp-c9b8afg": BmspC9b8afg
  "bmsp-fd33dfpg": BmspFd33dfpg
  jatop0490a: Jatop0490a
  p0c37: P0c37
  p0c44: P0c44
  p0c55: P0c55
  p0x1f: P0x1f
}

export interface N80336 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N94919 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155438 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N174425 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N174548 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N177453 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N178458 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N179306 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31196300 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199778 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341756 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548227 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2163207087 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3e3f3aFrozenGreyIi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp5be29bipfp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspC9b8afg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspFd33dfpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatop0490a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c37 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c44 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c55 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x1f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0027 {
  paintSwatch: PaintSwatch25
  mapped: Mapped25
}

export interface PaintSwatch25 {
  primary: Primary25
}

export interface Primary25 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped25 {
  "11373": N11373
  "122709": N122709
  "31794727": N31794727
  "31925691": N31925691
  "5e5f59-berninagrau-metallic": N5e5f59BerninagrauMetallic
  c2v: C2v
  customoption0p63dikeu8eo: Customoption0p63dikeu8eo
  customoptioncp5rkh2janw: Customoptioncp5rkh2janw
  p0p6n: P0p6n
}

export interface N11373 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N122709 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31794727 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31925691 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5e5f59BerninagrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2v {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0p63dikeu8eo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncp5rkh2janw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p6n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0028 {
  paintSwatch: PaintSwatch26
  mapped: Mapped26
}

export interface PaintSwatch26 {
  primary: Primary26
}

export interface Primary26 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped26 {
  "157716": N157716
  "177954": N177954
  "28934247": N28934247
  "30049467": N30049467
  "30051863": N30051863
  "30647284": N30647284
  "30652154": N30652154
  "31498603": N31498603
  "31501610": N31501610
  "32268964": N32268964
  "32284480": N32284480
  b39: B39
  "bmm-057b0sg": Bmm057b0sg
  "bmm-b68b4sg": BmmB68b4sg
  "bmm-bmaa-sg": BmmBmaaSg
  "bmm-d8188sg": BmmD8188sg
  "bmm-e3b95mg": BmmE3b95mg
  "bmsp-1a4febipfd": Bmsp1a4febipfd
  c08: C08
  customoption0a065ns7w6sd: Customoption0a065ns7w6sd
  customoption0biqmlm7fhzp: Customoption0biqmlm7fhzp
  customoption0qc9z73dy9pg: Customoption0qc9z73dy9pg
  customoption0ugzt6mozqvc: Customoption0ugzt6mozqvc
  customoption1983l1cl1el: Customoption1983l1cl1el
  customoption1dgxwfagbe8: Customoption1dgxwfagbe8
  customoption1ujhcpdg5e: Customoption1ujhcpdg5e
  customoption214k1cqkj8p: Customoption214k1cqkj8p
  customoption24moa4wou1h: Customoption24moa4wou1h
  customoption25xrziwbejl: Customoption25xrziwbejl
  customoption2kzrzsfwnyj: Customoption2kzrzsfwnyj
  customoption2rrkwet9awo: Customoption2rrkwet9awo
  customoption35: Customoption35
  customoption35aks5fpezw: Customoption35aks5fpezw
  customoption3bwqez86fly: Customoption3bwqez86fly
  customoption3e1ffycl6yd: Customoption3e1ffycl6yd
  customoption41: Customoption41
  customoption4aibols83ci: Customoption4aibols83ci
  customoption4b9la3t2vfu: Customoption4b9la3t2vfu
  customoption4ijsrhbbg95: Customoption4ijsrhbbg95
  customoption4ntg2xjjlqs: Customoption4ntg2xjjlqs
  customoption4uxmyj1svwn: Customoption4uxmyj1svwn
  customoption4yj5103hexs: Customoption4yj5103hexs
  customoption526uurqgbg: Customoption526uurqgbg
  customoption55xd8c4wnji: Customoption55xd8c4wnji
  customoption5hikej1ngb6: Customoption5hikej1ngb6
  customoption5ngb2vxrtjw: Customoption5ngb2vxrtjw
  customoption5q09uasexgn: Customoption5q09uasexgn
  customoption63d11amdmcu: Customoption63d11amdmcu
  customoption64armibnu5: Customoption64armibnu5
  customoption69qqqoyflnl: Customoption69qqqoyflnl
  customoption6cz2qw4l34l: Customoption6cz2qw4l34l
  customoption6oakev4tb8l: Customoption6oakev4tb8l
  customoption6wfcsjrwc2n: Customoption6wfcsjrwc2n
  customoption6zmi9doccdg: Customoption6zmi9doccdg
  customoption7ddknw8ddhs: Customoption7ddknw8ddhs
  customoption7lzim1q2g6u: Customoption7lzim1q2g6u
  customoption7oz4zi02ubx: Customoption7oz4zi02ubx
  customoption84i8thhlbsa: Customoption84i8thhlbsa
  customoption85y205qyfhx: Customoption85y205qyfhx
  customoption86nxeh3h2eb: Customoption86nxeh3h2eb
  customoption8hge3s0gctb: Customoption8hge3s0gctb
  customoption8jep7d6ax6f: Customoption8jep7d6ax6f
  customoption8jw9l5s1233: Customoption8jw9l5s1233
  customoption8n7c577n0zt: Customoption8n7c577n0zt
  customoption8txm7l0dwkb: Customoption8txm7l0dwkb
  customoption9743kk840n6: Customoption9743kk840n6
  customoption98r9aojd0r9: Customoption98r9aojd0r9
  customoption9ezwxrsxs8j: Customoption9ezwxrsxs8j
  customoption9ua5utzy2hs: Customoption9ua5utzy2hs
  customoption9ycng9ndqem: Customoption9ycng9ndqem
  customoptionaic6edw4p47: Customoptionaic6edw4p47
  customoptionaimi6wr772: Customoptionaimi6wr772
  customoptionaj1qkwf8us: Customoptionaj1qkwf8us
  customoptionaj2vvmzx9k: Customoptionaj2vvmzx9k
  customoptionalw2ycsfhv7: Customoptionalw2ycsfhv7
  customoptionamb5qw6o02j: Customoptionamb5qw6o02j
  customoptionbf5l9psl4ms: Customoptionbf5l9psl4ms
  customoptionbpjtwj0zqc9: Customoptionbpjtwj0zqc9
  customoptionbssvimridme: Customoptionbssvimridme
  customoptioncfabrnvmyg: Customoptioncfabrnvmyg
  customoptioncgpy5uclxwt: Customoptioncgpy5uclxwt
  customoptioncvccavccuei: Customoptioncvccavccuei
  customoptioncvpo3se6hs: Customoptioncvpo3se6hs
  customoptiond3ywl4xxj6: Customoptiond3ywl4xxj6
  customoptiondlec7nuguvj: Customoptiondlec7nuguvj
  customoptione89vgeql4ew: Customoptione89vgeql4ew
  customoptioneelhq2n1bcd: Customoptioneelhq2n1bcd
  customoptionernpmseooh9: Customoptionernpmseooh9
  customoptionextlwbdk5ku: Customoptionextlwbdk5ku
  customoptionexvh0y7ds3u: Customoptionexvh0y7ds3u
  customoptionf44r9kwurot: Customoptionf44r9kwurot
  customoptionfdqokqfbdw: Customoptionfdqokqfbdw
  customoptionfe19cig7asv: Customoptionfe19cig7asv
  customoptionfi5yo1xj5dn: Customoptionfi5yo1xj5dn
  customoptiongazwncy7tv8: Customoptiongazwncy7tv8
  customoptiongfand81szka: Customoptiongfand81szka
  customoptionglweh3tsqzl: Customoptionglweh3tsqzl
  customoptiongvcd85olo7: Customoptiongvcd85olo7
  customoptiongxsyhc7s03: Customoptiongxsyhc7s03
  customoptionh110y0ik2u9: Customoptionh110y0ik2u9
  customoptionh8brj5a072: Customoptionh8brj5a072
  customoptionhj5f2n36mx: Customoptionhj5f2n36mx
  customoptionhq8rs3dzi5h: Customoptionhq8rs3dzi5h
  customoptionhs9a78xnmpe: Customoptionhs9a78xnmpe
  customoptionip19l31p6w: Customoptionip19l31p6w
  customoptionit2tro0wfv: Customoptionit2tro0wfv
  customoptionixjpho1wef: Customoptionixjpho1wef
  customoptionj133ddjkmhj: Customoptionj133ddjkmhj
  customoptionj4tzvx6pji: Customoptionj4tzvx6pji
  customoptionjiefmk4y76: Customoptionjiefmk4y76
  customoptionjowft2lgde: Customoptionjowft2lgde
  customoptionkcc61ddhbt: Customoptionkcc61ddhbt
  customoptionksp2wk8at: Customoptionksp2wk8at
  customoptionkvglbr7mus: Customoptionkvglbr7mus
  customoptionl0ovy6ckbnm: Customoptionl0ovy6ckbnm
  customoptionl5p997mf9r: Customoptionl5p997mf9r
  customoptionmam5rveunnl: Customoptionmam5rveunnl
  customoptionmidaz6kecj: Customoptionmidaz6kecj
  customoptionmoxohd2am3q: Customoptionmoxohd2am3q
  customoptionn67sce8o6z: Customoptionn67sce8o6z
  customoptionnqqixmf3wzc: Customoptionnqqixmf3wzc
  customoptiono73iexry5zl: Customoptiono73iexry5zl
  customoptionosfehg9jru: Customoptionosfehg9jru
  customoptionowdhxkl5rjj: Customoptionowdhxkl5rjj
  customoptionpimm60226t: Customoptionpimm60226t
  customoptionprn71rxrpn: Customoptionprn71rxrpn
  customoptionq3nje8qqjui: Customoptionq3nje8qqjui
  customoptionqe3yy0ve4sl: Customoptionqe3yy0ve4sl
  customoptionqq02zrz6ojf: Customoptionqq02zrz6ojf
  customoptionrcb0tetldg: Customoptionrcb0tetldg
  customoptionrjr68lsrzy: Customoptionrjr68lsrzy
  customoptionrkvt9wysogh: Customoptionrkvt9wysogh
  customoptionrxk98m2zzf: Customoptionrxk98m2zzf
  customoptionryba1k9npq: Customoptionryba1k9npq
  customoptionsyhrwlj15a: Customoptionsyhrwlj15a
  customoptiont30mbf5wfht: Customoptiont30mbf5wfht
  customoptiont71qygcdktl: Customoptiont71qygcdktl
  customoptionth5cem2llpk: Customoptionth5cem2llpk
  customoptionubj59jp2xee: Customoptionubj59jp2xee
  customoptionuc0mtlkoh3: Customoptionuc0mtlkoh3
  customoptionumbyyu7kteb: Customoptionumbyyu7kteb
  customoptionuzjhr5mqbv: Customoptionuzjhr5mqbv
  customoptionv02as10pvvb: Customoptionv02as10pvvb
  customoptionv84jst45cjr: Customoptionv84jst45cjr
  customoptionvfmol3thdnk: Customoptionvfmol3thdnk
  customoptionvm508d2hg9: Customoptionvm508d2hg9
  customoptionvqslwq3hmr: Customoptionvqslwq3hmr
  customoptionvvi81t722z: Customoptionvvi81t722z
  customoptionw1ztcdha578: Customoptionw1ztcdha578
  customoptionw58pf01di9: Customoptionw58pf01di9
  customoptionw632b12nf9l: Customoptionw632b12nf9l
  customoptionwa5wc4ap9dn: Customoptionwa5wc4ap9dn
  customoptionwgprmc6gn2k: Customoptionwgprmc6gn2k
  customoptionwi9z6rokyc: Customoptionwi9z6rokyc
  customoptionwko30b2jr9: Customoptionwko30b2jr9
  customoptionwlne9ovm1w: Customoptionwlne9ovm1w
  customoptionwomuvolbd2q: Customoptionwomuvolbd2q
  customoptionwqypheus5jf: Customoptionwqypheus5jf
  customoptionwx69susihxe: Customoptionwx69susihxe
  customoptionx5wbbbeojq: Customoptionx5wbbbeojq
  customoptionx6fwf9lydf7: Customoptionx6fwf9lydf7
  customoptionx8l642ftd7: Customoptionx8l642ftd7
  customoptionxf3gd4ajd28: Customoptionxf3gd4ajd28
  customoptionxv6srnhmep: Customoptionxv6srnhmep
  customoptiony6pc5nj798o: Customoptiony6pc5nj798o
  customoptiony78474bnh3n: Customoptiony78474bnh3n
  customoptionym9xhlk1cnk: Customoptionym9xhlk1cnk
  customoptionyuytbsykogn: Customoptionyuytbsykogn
  customoptionzby7mo8kd7: Customoptionzby7mo8kd7
  customoptionzn9it1f8sqo: Customoptionzn9it1f8sqo
  jatoc3n: Jatoc3n
  p0c08: P0c08
}

export interface N157716 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N177954 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934247 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30049467 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051863 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647284 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652154 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498603 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501610 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32268964 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32284480 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm057b0sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB68b4sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBmaaSg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmD8188sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmE3b95mg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp1a4febipfd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C08 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0a065ns7w6sd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0biqmlm7fhzp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0qc9z73dy9pg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0ugzt6mozqvc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1983l1cl1el {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1dgxwfagbe8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1ujhcpdg5e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption214k1cqkj8p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption24moa4wou1h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption25xrziwbejl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2kzrzsfwnyj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2rrkwet9awo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption35 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption35aks5fpezw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3bwqez86fly {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3e1ffycl6yd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption41 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4aibols83ci {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4b9la3t2vfu {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4ijsrhbbg95 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4ntg2xjjlqs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4uxmyj1svwn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4yj5103hexs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption526uurqgbg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption55xd8c4wnji {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5hikej1ngb6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5ngb2vxrtjw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5q09uasexgn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption63d11amdmcu {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption64armibnu5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption69qqqoyflnl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6cz2qw4l34l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6oakev4tb8l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6wfcsjrwc2n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6zmi9doccdg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ddknw8ddhs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7lzim1q2g6u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7oz4zi02ubx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption84i8thhlbsa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption85y205qyfhx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption86nxeh3h2eb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8hge3s0gctb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8jep7d6ax6f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8jw9l5s1233 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8n7c577n0zt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8txm7l0dwkb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9743kk840n6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption98r9aojd0r9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9ezwxrsxs8j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9ua5utzy2hs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9ycng9ndqem {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaic6edw4p47 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaimi6wr772 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaj1qkwf8us {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaj2vvmzx9k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionalw2ycsfhv7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionamb5qw6o02j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbf5l9psl4ms {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbpjtwj0zqc9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbssvimridme {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncfabrnvmyg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncgpy5uclxwt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncvccavccuei {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncvpo3se6hs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiond3ywl4xxj6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondlec7nuguvj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptione89vgeql4ew {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioneelhq2n1bcd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionernpmseooh9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionextlwbdk5ku {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionexvh0y7ds3u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf44r9kwurot {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfdqokqfbdw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfe19cig7asv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfi5yo1xj5dn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongazwncy7tv8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongfand81szka {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionglweh3tsqzl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongvcd85olo7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongxsyhc7s03 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionh110y0ik2u9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionh8brj5a072 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhj5f2n36mx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhq8rs3dzi5h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhs9a78xnmpe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionip19l31p6w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionit2tro0wfv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionixjpho1wef {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionj133ddjkmhj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionj4tzvx6pji {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjiefmk4y76 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjowft2lgde {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkcc61ddhbt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionksp2wk8at {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkvglbr7mus {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionl0ovy6ckbnm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionl5p997mf9r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmam5rveunnl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmidaz6kecj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmoxohd2am3q {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionn67sce8o6z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnqqixmf3wzc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiono73iexry5zl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionosfehg9jru {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionowdhxkl5rjj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpimm60226t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionprn71rxrpn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionq3nje8qqjui {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqe3yy0ve4sl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqq02zrz6ojf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrcb0tetldg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrjr68lsrzy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrkvt9wysogh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrxk98m2zzf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionryba1k9npq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsyhrwlj15a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiont30mbf5wfht {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiont71qygcdktl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionth5cem2llpk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionubj59jp2xee {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuc0mtlkoh3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionumbyyu7kteb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuzjhr5mqbv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv02as10pvvb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv84jst45cjr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvfmol3thdnk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvm508d2hg9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvqslwq3hmr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvvi81t722z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw1ztcdha578 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw58pf01di9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw632b12nf9l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwa5wc4ap9dn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwgprmc6gn2k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwi9z6rokyc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwko30b2jr9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwlne9ovm1w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwomuvolbd2q {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwqypheus5jf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwx69susihxe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx5wbbbeojq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx6fwf9lydf7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx8l642ftd7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxf3gd4ajd28 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxv6srnhmep {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiony6pc5nj798o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiony78474bnh3n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionym9xhlk1cnk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyuytbsykogn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzby7mo8kd7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzn9it1f8sqo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatoc3n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c08 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0029 {
  paintSwatch: PaintSwatch27
  mapped: Mapped27
}

export interface PaintSwatch27 {
  primary: Primary27
}

export interface Primary27 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped27 {
  "76567": N76567
  "116569": N116569
  "139935": N139935
  "140688": N140688
  "140876": N140876
  "152488": N152488
  "30645531": N30645531
  "30648508": N30648508
  "30649527": N30649527
  "30651478": N30651478
  "31514883": N31514883
  "32341754": N32341754
  "32723299": N32723299
  "32736459": N32736459
  "32736463": N32736463
  "32850474": N32850474
  "32850888": N32850888
  "490h": N490h
  "73787d-bluestone-metallic": N73787dBluestoneMetallic
  "73787d-bluestone-metallise": N73787dBluestoneMetallise
  a52: A52
  "bmm-459ecb": Bmm459ecb
  "bmm-a095bbm": BmmA095bbm
  "bmm-re-sg": BmmReSg
  c2y: C2y
  customoption2zs9aegbggb: Customoption2zs9aegbggb
  p0a52: P0a52
  p0c2y: P0c2y
  p0x1d: P0x1d
  pa006: Pa006
}

export interface N76567 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N116569 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139935 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140688 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140876 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152488 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30645531 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30648508 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649527 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30651478 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31514883 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341754 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723299 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32736459 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32736463 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850474 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850888 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73787dBluestoneMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73787dBluestoneMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A52 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm459ecb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA095bbm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmReSg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2zs9aegbggb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a52 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c2y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x1d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa006 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0030 {
  paintSwatch: PaintSwatch28
  mapped: Mapped28
}

export interface PaintSwatch28 {
  primary: Primary28
}

export interface Primary28 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped28 {
  "140534": N140534
  "3a3a3a-m-brands-hatch-grau-metallic": N3a3a3aMBrandsHatchGrauMetallic
  "3b3b3b-m-brands-hatch-grau": N3b3b3bMBrandsHatchGrau
  "5b5b5b-brands-hatch-grau": N5b5b5bBrandsHatchGrau
  c17: C17
  p0c17: P0c17
}

export interface N140534 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3a3a3aMBrandsHatchGrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3b3b3bMBrandsHatchGrau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5b5b5bBrandsHatchGrau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C17 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c17 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0031 {
  paintSwatch: PaintSwatch29
  mapped: Mapped29
}

export interface PaintSwatch29 {
  primary: Primary29
}

export interface Primary29 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped29 {
  "20558": N20558
  "157630": N157630
  "166310": N166310
  "30649889": N30649889
  "30653433": N30653433
  "30655622": N30655622
  "30787949": N30787949
  "30791273": N30791273
  "30814908": N30814908
  "30815208": N30815208
  "31085808": N31085808
  "7e8789-m-brooklyn-grau": N7e8789MBrooklynGrau
  c4p: C4p
  customoption0eo8611zoey: Customoption0eo8611zoey
  customoption0jz3hi9sww9d: Customoption0jz3hi9sww9d
  customoption1btoqj4cghl: Customoption1btoqj4cghl
  customoption31: Customoption31
  customoption34: Customoption34
  customoption42: Customoption42
  customoption44: Customoption44
  customoption46: Customoption46
  customoption52: Customoption52
  customoption59h1fz1bpri: Customoption59h1fz1bpri
  customoption6veigjlwe2h: Customoption6veigjlwe2h
  customoptionbwgrn4wxdyr: Customoptionbwgrn4wxdyr
  customoptioncnvq1v0wsmt: Customoptioncnvq1v0wsmt
  customoptiond2ib4870saq: Customoptiond2ib4870saq
  customoptiond9sogrrhn5l: Customoptiond9sogrrhn5l
  customoptiondf6br87as6g: Customoptiondf6br87as6g
  customoptiondq9n6gsdoqnf: Customoptiondq9n6gsdoqnf
  customoptione8pq3zjk5fb: Customoptione8pq3zjk5fb
  customoptionexo9pi3e00a: Customoptionexo9pi3e00a
  customoptionf870m6wcetv: Customoptionf870m6wcetv
  customoptionf9y2l1d30yq: Customoptionf9y2l1d30yq
  customoptiongqn0uislpc: Customoptiongqn0uislpc
  customoptionhhs8nq4ymsr: Customoptionhhs8nq4ymsr
  customoptionhhwqgnv3ytg: Customoptionhhwqgnv3ytg
  customoptionhwu7ibo0wha: Customoptionhwu7ibo0wha
  customoptioniz8n0nhqzk: Customoptioniz8n0nhqzk
  customoptionj71tcjsbhe: Customoptionj71tcjsbhe
  customoptionm4letox8t9na: Customoptionm4letox8t9na
  customoptionmkwj0gyk9qm: Customoptionmkwj0gyk9qm
  customoptionn73cejbxl7: Customoptionn73cejbxl7
  customoptiono4tevtohqji: Customoptiono4tevtohqji
  customoptionpll5hav4gz: Customoptionpll5hav4gz
  customoptionrgi1k7zwq7: Customoptionrgi1k7zwq7
  customoptionrpyqyaiwck9: Customoptionrpyqyaiwck9
  customoptionskb12xtwwlo: Customoptionskb12xtwwlo
  customoptiont7slmfqnwii: Customoptiont7slmfqnwii
  customoptiontk0bl3pga4: Customoptiontk0bl3pga4
  customoptiontmg52u2hrbb: Customoptiontmg52u2hrbb
  customoptionuu59hz0swpn: Customoptionuu59hz0swpn
  customoptionw3ug2p2sxko: Customoptionw3ug2p2sxko
  customoptionwjen1uqadrl: Customoptionwjen1uqadrl
  customoptionwjuix86jo2a: Customoptionwjuix86jo2a
  customoptionyld19scdywc: Customoptionyld19scdywc
  customoptionz862r3ibpq: Customoptionz862r3ibpq
  customoptionzfpxvmc9p9f: Customoptionzfpxvmc9p9f
  customoptionzod00r2971k: Customoptionzod00r2971k
  customoptionzs84338xd08: Customoptionzs84338xd08
  p0b39: P0b39
  p0c4p: P0c4p
  p0c4w: P0c4w
}

export interface N20558 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N157630 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N166310 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649889 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653433 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655622 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30787949 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791273 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814908 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815208 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31085808 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N7e8789MBrooklynGrau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C4p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0eo8611zoey {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0jz3hi9sww9d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1btoqj4cghl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption31 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption34 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption42 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption44 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption46 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption52 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption59h1fz1bpri {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6veigjlwe2h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbwgrn4wxdyr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncnvq1v0wsmt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiond2ib4870saq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiond9sogrrhn5l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondf6br87as6g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondq9n6gsdoqnf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptione8pq3zjk5fb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionexo9pi3e00a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf870m6wcetv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf9y2l1d30yq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongqn0uislpc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhhs8nq4ymsr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhhwqgnv3ytg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhwu7ibo0wha {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioniz8n0nhqzk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionj71tcjsbhe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionm4letox8t9na {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmkwj0gyk9qm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionn73cejbxl7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiono4tevtohqji {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpll5hav4gz {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrgi1k7zwq7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrpyqyaiwck9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionskb12xtwwlo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiont7slmfqnwii {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontk0bl3pga4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontmg52u2hrbb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuu59hz0swpn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw3ug2p2sxko {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwjen1uqadrl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwjuix86jo2a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyld19scdywc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionz862r3ibpq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzfpxvmc9p9f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzod00r2971k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzs84338xd08 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0033 {
  paintSwatch: PaintSwatch30
  mapped: Mapped30
}

export interface PaintSwatch30 {
  primary: Primary30
}

export interface Primary30 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped30 {
  "438": N438
  "135007": N135007
  "135438": N135438
  "139779": N139779
  "140689": N140689
  "140979": N140979
  "155190": N155190
  "155439": N155439
  "165484": N165484
  "165589": N165589
  "29740270": N29740270
  "30804567": N30804567
  "30804592": N30804592
  "32558396": N32558396
  "32777221": N32777221
  "bmm-0fa75ar": Bmm0fa75ar
  "bmm-3003bar": Bmm3003bar
  "bmm-335a8ariip": Bmm335a8ariip
  "bmm-9d7depr": Bmm9d7depr
  "bmm-f61edar": BmmF61edar
  "bmsp-1c451ar": Bmsp1c451ar
  "bmsp-1dfceari": Bmsp1dfceari
  "bmsp-3a20eari": Bmsp3a20eari
  "bmsp-89d85ar": Bmsp89d85ar
  "bmsp-d6e81ari": BmspD6e81ari
  "bmsp-e87b9arbip": BmspE87b9arbip
  "bmsp-f2038arip": BmspF2038arip
  "bmsp-f4740bipar": BmspF4740bipar
  "bmsp-f831fari": BmspF831fari
  p0c3c: P0c3c
  p0x1c: P0x1c
}

export interface N438 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135007 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135438 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139779 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140689 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140979 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155190 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155439 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N165484 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N165589 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29740270 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30804567 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30804592 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32558396 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32777221 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm0fa75ar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3003bar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm335a8ariip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm9d7depr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF61edar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp1c451ar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp1dfceari {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp3a20eari {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp89d85ar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspD6e81ari {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspE87b9arbip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspF2038arip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspF4740bipar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspF831fari {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x1c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0034 {
  paintSwatch: PaintSwatch31
  mapped: Mapped31
}

export interface PaintSwatch31 {
  primary: Primary31
}

export interface Primary31 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped31 {
  "4643": N4643
  "30395": N30395
  "40436": N40436
  "61200": N61200
  "72023": N72023
  "80799": N80799
  "83009": N83009
  "106076": N106076
  "130383": N130383
  "133510": N133510
  "163965": N163965
  "30642453": N30642453
  "30655621": N30655621
  "30791963": N30791963
  "30814912": N30814912
  "31085797": N31085797
  "31498411": N31498411
  "31501390": N31501390
  "32275151": N32275151
  "32275152": N32275152
  "32276667": N32276667
  "32278578": N32278578
  "32278987": N32278987
  "32545934": N32545934
  "490j": N490j
  "7d0c00-san-francisco-rot": N7d0c00SanFranciscoRot
  "8a3af": N8a3af
  a75: A75
  a82: A82
  "bmm-04a72mr": Bmm04a72mr
  "bmm-12fe5sfr": Bmm12fe5sfr
  "bmm-181d1fr": Bmm181d1fr
  "bmm-4214barm": Bmm4214barm
  "bmm-78cffsfr": Bmm78cffsfr
  "bmm-7b892ar": Bmm7b892ar
  "bmm-b2g-frx": BmmB2gFrx
  "bmm-b2m-mr": BmmB2mMr
  "bmm-c7691mr": BmmC7691mr
  "bmm-f1dcbmr": BmmF1dcbmr
  c06: C06
  customoptionioih2ex1hpp: Customoptionioih2ex1hpp
  p0a75: P0a75
  p0c06: P0c06
  p0c34: P0c34
  p0c57: P0c57
  p0c6g: P0c6g
  pluto: Pluto
}

export interface N4643 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30395 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N40436 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N61200 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N72023 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N80799 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N83009 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N106076 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N130383 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N133510 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N163965 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30642453 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655621 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791963 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814912 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31085797 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498411 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501390 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275151 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275152 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276667 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278578 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278987 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32545934 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N7d0c00SanFranciscoRot {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N8a3af {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A75 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A82 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm04a72mr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm12fe5sfr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm181d1fr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4214barm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm78cffsfr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7b892ar {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB2gFrx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB2mMr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmC7691mr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF1dcbmr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C06 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionioih2ex1hpp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a75 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c06 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c34 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c57 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c6g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pluto {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0034sspc0064 {
  paintSwatch: PaintSwatch32
  mapped: Mapped32
}

export interface PaintSwatch32 {
  primary: Primary32
  secondary: Secondary6
}

export interface Primary32 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary6 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped32 {
  p0wc57: P0wc57
  p0wc5a: P0wc5a
}

export interface P0wc57 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0wc5a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0034sspc0119 {
  paintSwatch: PaintSwatch33
  mapped: Mapped33
}

export interface PaintSwatch33 {
  primary: Primary33
  secondary: Secondary7
}

export interface Primary33 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary7 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped33 {
  "p0c57:p0c4a": P0c57P0c4a
}

export interface P0c57P0c4a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0035 {
  paintSwatch: PaintSwatch34
  mapped: Mapped34
}

export interface PaintSwatch34 {
  primary: Primary34
}

export interface Primary34 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped34 {
  "93562": N93562
  "96758": N96758
  "114320": N114320
  "140535": N140535
  "672316-motegi-rot-metallic": N672316MotegiRotMetallic
  b50: B50
  "bmm-4fd33tr": Bmm4fd33tr
  "bmm-a04cdtr": BmmA04cdtr
  "bmm-da4e5so": BmmDa4e5so
  c3k: C3k
  p0c1h: P0c1h
  p0c3k: P0c3k
}

export interface N93562 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N96758 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N114320 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140535 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N672316MotegiRotMetallic {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface B50 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4fd33tr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA04cdtr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmDa4e5so {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C3k {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0c1h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0036 {
  paintSwatch: PaintSwatch35
  mapped: Mapped35
}

export interface PaintSwatch35 {
  primary: Primary35
}

export interface Primary35 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped35 {
  "71696": N71696
  "135160": N135160
  "145573": N145573
  "145611": N145611
  "155312": N155312
  "165541": N165541
  "177439": N177439
  "3a1f22-ametrin": N3a1f22Ametrin
  "bmm-01ed7a": Bmm01ed7a
  "bmm-60bd7a": Bmm60bd7a
  "bmm-6af06a": Bmm6af06a
  "bmm-761-a": Bmm761A
  "bmm-7a699a": Bmm7a699a
  "bmm-af97ea": BmmAf97ea
  p0c56: P0c56
  p0x1b: P0x1b
  x1b: X1b
}

export interface N71696 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135160 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145573 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145611 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155312 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N165541 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N177439 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3a1f22Ametrin {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm01ed7a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm60bd7a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm6af06a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm761A {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7a699a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAf97ea {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c56 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x1b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X1b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0037 {
  paintSwatch: PaintSwatch36
  mapped: Mapped36
}

export interface PaintSwatch36 {
  primary: Primary36
}

export interface Primary36 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped36 {
  "90696": N90696
  "110471": N110471
  "119577": N119577
  "119595": N119595
  "119773": N119773
  "139832": N139832
  "144301": N144301
  "1e0c00-terrabraun": N1e0c00Terrabraun
  "2e2423-bmw-individual-almandinbraun": N2e2423BmwIndividualAlmandinbraun
  c25: C25
  c46: C46
  p0c1l: P0c1l
  p0c25: P0c25
  p0c46: P0c46
}

export interface N90696 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N110471 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119577 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119595 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119773 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139832 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N144301 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N1e0c00Terrabraun {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N2e2423BmwIndividualAlmandinbraun {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface C25 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C46 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface P0c1l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c25 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c46 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0037sspc0199 {
  paintSwatch: PaintSwatch37
  mapped: Mapped37
}

export interface PaintSwatch37 {
  primary: Primary37
  secondary: Secondary8
}

export interface Primary37 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary8 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped37 {
  p0mc57: P0mc57
}

export interface P0mc57 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0039 {
  paintSwatch: PaintSwatch38
  mapped: Mapped38
}

export interface PaintSwatch38 {
  primary: Primary38
}

export interface Primary38 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped38 {
  "354": N354
  "62012": N62012
  "87812": N87812
  "119268": N119268
  "30647733": N30647733
  "30649573": N30649573
  "30804332": N30804332
  "354x": N354x
  a83: A83
  "babbc0-glaciersilber": Babbc0Glaciersilber
  "bmm-4a49dgs": Bmm4a49dgs
  customoption0x79nz6dbvtk: Customoption0x79nz6dbvtk
  customoptionhfso1nduetu: Customoptionhfso1nduetu
  customoptioni7e1dnl13y: Customoptioni7e1dnl13y
  customoptionp0zo5euz8z: Customoptionp0zo5euz8z
  customoptiontbsc36smfai: Customoptiontbsc36smfai
  customoptiontygotkc6ffh: Customoptiontygotkc6ffh
  n9: N9
  p0490c: P0490c
  p0a83: P0a83
  p0c33: P0c33
  p0x17: P0x17
  x04: X04
  x17: X17
}

export interface N354 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N62012 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N87812 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119268 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647733 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649573 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30804332 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N354x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A83 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Babbc0Glaciersilber {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4a49dgs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0x79nz6dbvtk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhfso1nduetu {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioni7e1dnl13y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionp0zo5euz8z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontbsc36smfai {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontygotkc6ffh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a83 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c33 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x17 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X04 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X17 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0040 {
  paintSwatch: PaintSwatch39
  mapped: Mapped39
}

export interface PaintSwatch39 {
  primary: Primary39
}

export interface Primary39 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped39 {
  "102566": N102566
}

export interface N102566 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0040sspc0015 {
  paintSwatch: PaintSwatch40
  mapped: Mapped40
}

export interface PaintSwatch40 {
  secondary: Secondary9
  primary: Primary40
}

export interface Secondary9 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary40 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped40 {
  "105412": N105412
}

export interface N105412 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0041 {
  paintSwatch: PaintSwatch41
  mapped: Mapped41
}

export interface PaintSwatch41 {
  primary: Primary41
}

export interface Primary41 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped41 {
  "21": N21
  "23": N23
  "28": N28
  "36": N36
  "37": N37
  "38": N38
  "39": N39
  "40": N40
  "54": N54
  "55": N55
  "64": N64
  "65": N65
  "72": N72
  "73": N73
  "146": N146
  "300": N300
  "400": N400
  "492": N492
  "4597": N4597
  "11646": N11646
  "26229": N26229
  "55047": N55047
  "102572": N102572
  "135881": N135881
  "26365730": N26365730
  "26587419": N26587419
  "26751517": N26751517
  "27685793": N27685793
  "28934187": N28934187
  "28934281": N28934281
  "29173881": N29173881
  "29540494": N29540494
  "30017453": N30017453
  "30049903": N30049903
  "30051807": N30051807
  "30051823": N30051823
  "30051829": N30051829
  "30411481": N30411481
  "30412400": N30412400
  "30640804": N30640804
  "30641370": N30641370
  "30641406": N30641406
  "30642828": N30642828
  "30645512": N30645512
  "30647272": N30647272
  "30648375": N30648375
  "30649487": N30649487
  "30650888": N30650888
  "30651442": N30651442
  "30652163": N30652163
  "30652435": N30652435
  "30653436": N30653436
  "30655625": N30655625
  "30655626": N30655626
  "30776777": N30776777
  "30788679": N30788679
  "30790194": N30790194
  "30791967": N30791967
  "30802056": N30802056
  "30806338": N30806338
  "30806372": N30806372
  "30814904": N30814904
  "30815205": N30815205
  "30815213": N30815213
  "30823803": N30823803
  "30824035": N30824035
  "31174079": N31174079
  "31174099": N31174099
  "31199895": N31199895
  "31498612": N31498612
  "31501685": N31501685
  "31514744": N31514744
  "32269186": N32269186
  "32269305": N32269305
  "32270886": N32270886
  "32271206": N32271206
  "32285111": N32285111
  "32285831": N32285831
  "32287640": N32287640
  "32290334": N32290334
  "32290579": N32290579
  "32305564": N32305564
  "32326673": N32326673
  "32341744": N32341744
  "32612869": N32612869
  "32612871": N32612871
  "32707609": N32707609
  "32707613": N32707613
  "32710637": N32710637
  "32717041": N32717041
  "32723287": N32723287
  "32850465": N32850465
  "32850879": N32850879
  "0pwp": N0pwp
  "2ff1b": N2ff1b
  "300a": N300a
  "300b": N300b
  "300x": N300x
  a96: A96
  "alb-alpine": AlbAlpine
  b575a: B575a
  "bmm-82a3fmw": Bmm82a3fmw
  "bms-0d895aw": Bms0d895aw
  "bms-18fb3aw": Bms18fb3aw
  "bms-2b6acaw": Bms2b6acaw
  "bms-2ff1baw": Bms2ff1baw
  "bms-5385aaw": Bms5385aaw
  "bms-6f909aw": Bms6f909aw
  "bms-87537cw": Bms87537cw
  "bms-b575aaw": BmsB575aaw
  customoption01fqeyz65hvj: Customoption01fqeyz65hvj
  customoption25: Customoption25
  customoption2vascgecakq: Customoption2vascgecakq
  customoption7zwoxvku5w: Customoption7zwoxvku5w
  customoption8l8wh9rn32p: Customoption8l8wh9rn32p
  customoptiona3tx9r32zk9: Customoptiona3tx9r32zk9
  customoptionaaoncam3hub: Customoptionaaoncam3hub
  customoptionc5zmk0910ym: Customoptionc5zmk0910ym
  customoptiongfsdw4j1qw6: Customoptiongfsdw4j1qw6
  customoptionhxtjgdbyqe6: Customoptionhxtjgdbyqe6
  customoptionhyj647ixev6: Customoptionhyj647ixev6
  customoptionii5w7upavf: Customoptionii5w7upavf
  customoptionl8x3z98fmlc: Customoptionl8x3z98fmlc
  customoptionlc73lbueff: Customoptionlc73lbueff
  customoptiononvke586qmp: Customoptiononvke586qmp
  customoptionoqdrejz6fl: Customoptionoqdrejz6fl
  customoptionpl3gad3mrm: Customoptionpl3gad3mrm
  customoptionr6hu2qyjjf: Customoptionr6hu2qyjjf
  customoptionr6nis4siib: Customoptionr6nis4siib
  customoptionrthkpzo83xh: Customoptionrthkpzo83xh
  customoptiontpy8m4rw9n: Customoptiontpy8m4rw9n
  customoptionu184xgt2r8: Customoptionu184xgt2r8
  customoptionusllvocdsuk: Customoptionusllvocdsuk
  customoptionuy3v59b6i7: Customoptionuy3v59b6i7
  customoptionv32jrxe6elt: Customoptionv32jrxe6elt
  customoptionvb4rtgbwbqn: Customoptionvb4rtgbwbqn
  "dcdcdc-alpinweiss-iii": DcdcdcAlpinweissIii
  "ededed-alpinweiss-iii": EdededAlpinweissIii
  "f1f1f1-alpinweiss-iii": F1f1f1AlpinweissIii
  imaginwhite: Imaginwhite
  imaginwihte: Imaginwihte
  p0300: P0300
  p0300b: P0300b
  p0p91: P0p91
  psp0041: Psp0041
  spc0041: Spc0041
}

export interface N21 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N23 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N37 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N38 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N40 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N54 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N55 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N64 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N65 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N72 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N146 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N300 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N400 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N492 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N4597 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N11646 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26229 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N55047 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N102572 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135881 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26365730 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26587419 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26751517 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685793 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934187 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934281 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29173881 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29540494 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30017453 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30049903 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051807 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051823 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30051829 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30411481 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30412400 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30640804 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641370 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641406 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30642828 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30645512 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647272 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30648375 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649487 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650888 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30651442 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652163 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652435 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653436 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655625 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655626 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776777 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788679 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30790194 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791967 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30802056 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806338 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806372 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814904 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815205 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815213 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823803 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30824035 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174079 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174099 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199895 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498612 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501685 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31514744 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32269186 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32269305 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32270886 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32271206 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32285111 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32285831 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32287640 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290334 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290579 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305564 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32326673 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341744 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612869 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612871 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707609 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707613 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32710637 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717041 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723287 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850465 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850879 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0pwp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2ff1b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N300a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N300b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N300x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A96 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface AlbAlpine {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B575a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm82a3fmw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms0d895aw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms18fb3aw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms2b6acaw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms2ff1baw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms5385aaw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms6f909aw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms87537cw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmsB575aaw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption01fqeyz65hvj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption25 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2vascgecakq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7zwoxvku5w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8l8wh9rn32p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiona3tx9r32zk9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionaaoncam3hub {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionc5zmk0910ym {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongfsdw4j1qw6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhxtjgdbyqe6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhyj647ixev6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionii5w7upavf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionl8x3z98fmlc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlc73lbueff {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiononvke586qmp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionoqdrejz6fl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpl3gad3mrm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr6hu2qyjjf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr6nis4siib {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrthkpzo83xh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontpy8m4rw9n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu184xgt2r8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionusllvocdsuk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuy3v59b6i7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv32jrxe6elt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvb4rtgbwbqn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface DcdcdcAlpinweissIii {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface EdededAlpinweissIii {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface F1f1f1AlpinweissIii {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imaginwhite {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imaginwihte {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0300 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0300b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p91 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Psp0041 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Spc0041 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0041sspc0324tspc0092 {
  paintDescription: string
  nativePaintDescriptions: string
  orderable: boolean
  paintSwatch: PaintSwatch42
}

export interface PaintSwatch42 {
  primary: Primary42
  secondary: Secondary10
  tertiary: Tertiary2
}

export interface Primary42 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary10 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Tertiary2 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Pspc0045 {
  paintSwatch: PaintSwatch43
  mapped: Mapped42
}

export interface PaintSwatch43 {
  primary: Primary43
}

export interface Primary43 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped42 {
  "121631": N121631
  "bmm-64fcegg": Bmm64fcegg
  "bmm-f63a6gg": BmmF63a6gg
  c4y: C4y
  p0c1p: P0c1p
}

export interface N121631 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm64fcegg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF63a6gg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C4y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0045sspc0026 {
  paintSwatch: PaintSwatch44
  mapped: Mapped43
}

export interface PaintSwatch44 {
  primary: Primary44
  secondary: Secondary11
}

export interface Primary44 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary11 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped43 {
  p0c4y: P0c4y
}

export interface P0c4y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0045sspc0064 {
  paintSwatch: PaintSwatch45
  mapped: Mapped44
}

export interface PaintSwatch45 {
  secondary: Secondary12
  primary: Primary45
}

export interface Secondary12 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary45 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped44 {
  "157330": N157330
}

export interface N157330 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0046 {
  paintSwatch: PaintSwatch46
  mapped: Mapped45
}

export interface PaintSwatch46 {
  primary: Primary46
}

export interface Primary46 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped45 {
  "157631": N157631
  "166334": N166334
  "bmm-fff65spy": BmmFff65spy
  "bms-66f87spy": Bms66f87spy
  "d4d623-m-sao-paulo-gelb": D4d623MSaoPauloGelb
  p0c4h: P0c4h
}

export interface N157631 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N166334 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmFff65spy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bms66f87spy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface D4d623MSaoPauloGelb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0051 {
  paintSwatch: PaintSwatch47
  mapped: Mapped46
}

export interface PaintSwatch47 {
  primary: Primary47
}

export interface Primary47 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped46 {
  "69261": N69261
  "101882": N101882
  a17: A17
  p0x13: P0x13
  x13: X13
}

export interface N69261 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N101882 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A17 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x13 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X13 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0052 {
  paintSwatch: PaintSwatch48
  mapped: Mapped47
}

export interface PaintSwatch48 {
  primary: Primary48
}

export interface Primary48 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped47 {
  "896": N896
  "17976": N17976
  "41309": N41309
  "67948": N67948
  "71506": N71506
  "490n": N490n
  a29: A29
  "test-motork": TestMotork
  x01: X01
}

export interface N896 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N17976 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N41309 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N67948 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N71506 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A29 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface TestMotork {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X01 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0055 {
  paintSwatch: PaintSwatch49
  mapped: Mapped48
}

export interface PaintSwatch49 {
  primary: Primary49
}

export interface Primary49 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped48 {
  "83017": N83017
  "123939": N123939
  "140690": N140690
  "141211": N141211
  "146502": N146502
  "152808": N152808
  "157286": N157286
  "178513": N178513
  "30652576": N30652576
  "30655630": N30655630
  "30789085": N30789085
  "30814910": N30814910
  "30815209": N30815209
  "31500148": N31500148
  "31514786": N31514786
  "32276847": N32276847
  "32278591": N32278591
  "383e3e-bmw-individual-dravitgrau-metallic": N383e3eBmwIndividualDravitgrauMetallic
  "454b45bmwindividualdravitgrau": N454b45bmwindividualdravitgrau
  "535957-dravitgrau-metallic": N535957DravitgrauMetallic
  a81: A81
  "bmm-008e4dgm": Bmm008e4dgm
  "bmm-449a4dg-bi": Bmm449a4dgBi
  "bmsp-34afedg": Bmsp34afedg
  "bmsp-74961bipdg": Bmsp74961bipdg
  "bmsp-91724dg": Bmsp91724dg
  "bmsp-a7e52b2ipd": BmspA7e52b2ipd
  customoption29b01l0c3c: Customoption29b01l0c3c
  customoption7j9cn04j034: Customoption7j9cn04j034
  customoption9fkaobe09xs: Customoption9fkaobe09xs
  customoptionassj71khm34: Customoptionassj71khm34
  customoptiongz4h56yzbn: Customoptiongz4h56yzbn
  customoptionqg2rpj7civ: Customoptionqg2rpj7civ
  customoptionxg9rp7y3dgn: Customoptionxg9rp7y3dgn
  p0c36: P0c36
  p0mc36: P0mc36
}

export interface N83017 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N123939 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140690 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N141211 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N146502 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N152808 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N157286 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N178513 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652576 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655630 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30789085 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814910 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815209 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31500148 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31514786 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276847 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278591 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N383e3eBmwIndividualDravitgrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N454b45bmwindividualdravitgrau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N535957DravitgrauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A81 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm008e4dgm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm449a4dgBi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp34afedg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp74961bipdg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp91724dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspA7e52b2ipd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption29b01l0c3c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7j9cn04j034 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9fkaobe09xs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionassj71khm34 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongz4h56yzbn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqg2rpj7civ {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxg9rp7y3dgn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0mc36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0056 {
  paintSwatch: PaintSwatch50
  mapped: Mapped49
}

export interface PaintSwatch50 {
  primary: Primary50
}

export interface Primary50 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped49 {
  "93855": N93855
  p0x18: P0x18
  pa001: Pa001
  x07: X07
}

export interface N93855 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x18 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa001 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X07 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0059 {
  paintSwatch: PaintSwatch51
  mapped: Mapped50
}

export interface PaintSwatch51 {
  primary: Primary51
}

export interface Primary51 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped50 {
  "40440": N40440
  "117835": N117835
  a61: A61
  p0c32: P0c32
}

export interface N40440 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N117835 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A61 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c32 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0064 {
  paintSwatch: PaintSwatch52
  mapped: Mapped51
}

export interface PaintSwatch52 {
  primary: Primary52
}

export interface Primary52 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped51 {
  "100": N100
  "191": N191
  "218": N218
  "408": N408
  "491": N491
  "601": N601
  "696": N696
  "35732": N35732
  "43305": N43305
  "68370": N68370
  "69621": N69621
  "71700": N71700
  "80283": N80283
  "80800": N80800
  "86746": N86746
  "95703": N95703
  "95704": N95704
  "105604": N105604
  "111740": N111740
  "139833": N139833
  "170727": N170727
  "26581485": N26581485
  "27685932": N27685932
  "28610083": N28610083
  "28667481": N28667481
  "29540425": N29540425
  "30017334": N30017334
  "30049886": N30049886
  "30412404": N30412404
  "30641210": N30641210
  "30641351": N30641351
  "30647729": N30647729
  "30648710": N30648710
  "30650583": N30650583
  "30650895": N30650895
  "30651451": N30651451
  "30652149": N30652149
  "30652167": N30652167
  "30653440": N30653440
  "30654590": N30654590
  "30655629": N30655629
  "30655634": N30655634
  "30673158": N30673158
  "30788385": N30788385
  "30789746": N30789746
  "30791971": N30791971
  "30802058": N30802058
  "30806341": N30806341
  "30823811": N30823811
  "31085866": N31085866
  "31199315": N31199315
  "31266592": N31266592
  "31498475": N31498475
  "31500131": N31500131
  "31500322": N31500322
  "31501605": N31501605
  "31501668": N31501668
  "32269187": N32269187
  "32270811": N32270811
  "32271370": N32271370
  "32275016": N32275016
  "32275087": N32275087
  "32275163": N32275163
  "32275700": N32275700
  "32276840": N32276840
  "32276861": N32276861
  "32276962": N32276962
  "32277748": N32277748
  "32277794": N32277794
  "32277851": N32277851
  "32278223": N32278223
  "32278552": N32278552
  "32278589": N32278589
  "32278597": N32278597
  "32278946": N32278946
  "32279007": N32279007
  "32279019": N32279019
  "32285114": N32285114
  "32287642": N32287642
  "32305567": N32305567
  "32324044": N32324044
  "32324056": N32324056
  "32341746": N32341746
  "32375755": N32375755
  "32376752": N32376752
  "32377186": N32377186
  "32545926": N32545926
  "32546630": N32546630
  "32548196": N32548196
  "32612873": N32612873
  "32707614": N32707614
  "32707617": N32707617
  "32717043": N32717043
  "32723289": N32723289
  "32777204": N32777204
  "32850467": N32850467
  "32850881": N32850881
  "33008977": N33008977
  "33113358": N33113358
  "423823685": N423823685
  "2163138073": N2163138073
  "0e0e": N0e0e
  "2r": N2r
  "2t": N2t
  "5bobject-promise-5d": N5bobjectPromise5d
  "696u": N696u
  a2a2: A2a2
  b9: B9
  black: Black
  "bmm-108b2bs": Bmm108b2bs
  "bmm-23a46bs": Bmm23a46bs
  "bmm-4ffd4bs": Bmm4ffd4bs
  "bmm-66741bs": Bmm66741bs
  "bmm-711c2bs": Bmm711c2bs
  "bmm-829a9bs": Bmm829a9bs
  "bmm-89f2bbs": Bmm89f2bbs
  "bmm-8ec4cbs": Bmm8ec4cbs
  "bmm-94237bs": Bmm94237bs
  "bmm-aaa1ebs": BmmAaa1ebs
  "bmm-atr2-bs": BmmAtr2Bs
  "bmm-b2a-bs": BmmB2aBs
  "bmm-ba831bs": BmmBa831bs
  "bms-ab837jb": BmsAb837jb
  "bms-b2k-jb": BmsB2kJb
  "bms-c886ejb": BmsC886ejb
  "bmsp-7ef54abip": Bmsp7ef54abip
  "bmsp-cffa8b2ipb": BmspCffa8b2ipb
  c2w: C2w
  carpaint61202: Carpaint61202
  customoption01w3e18u2ane: Customoption01w3e18u2ane
  customoption052w0uie0emp: Customoption052w0uie0emp
  customoption05t4zpmiemkg: Customoption05t4zpmiemkg
  customoption0mes05djm8yb: Customoption0mes05djm8yb
  customoption0qfxjf9cf5yl: Customoption0qfxjf9cf5yl
  customoption0rljishif0o: Customoption0rljishif0o
  customoption0xdejxcl23o: Customoption0xdejxcl23o
  customoption10dzl8in29i: Customoption10dzl8in29i
  customoption10w2zckc21ik: Customoption10w2zckc21ik
  customoption15h5y6s2crq: Customoption15h5y6s2crq
  customoption1c00ow9idc8: Customoption1c00ow9idc8
  customoption1et8ywt7led: Customoption1et8ywt7led
  customoption1iafe6i0zjo: Customoption1iafe6i0zjo
  customoption1obvzp5t1gw: Customoption1obvzp5t1gw
  customoption1svmqzn1xh1: Customoption1svmqzn1xh1
  customoption1yde8trcff2: Customoption1yde8trcff2
  customoption24t0y6vjo6w: Customoption24t0y6vjo6w
  customoption26xzdraxtk7: Customoption26xzdraxtk7
  customoption2cvsfkv3hem: Customoption2cvsfkv3hem
  customoption2evf933owfp: Customoption2evf933owfp
  customoption2lo6057hdjd: Customoption2lo6057hdjd
  customoption2m9jglu1nrn: Customoption2m9jglu1nrn
  customoption2ri7mlamwhk: Customoption2ri7mlamwhk
  customoption2to3pjww6gb: Customoption2to3pjww6gb
  customoption2uxlkr4mwhd: Customoption2uxlkr4mwhd
  customoption30xukqcigyb: Customoption30xukqcigyb
  customoption37btdaluzwl: Customoption37btdaluzwl
  customoption37twdtyudbm: Customoption37twdtyudbm
  customoption38: Customoption38
  customoption3c6a5qa02m: Customoption3c6a5qa02m
  customoption3ern81k2n8d: Customoption3ern81k2n8d
  customoption3l38szkeau6: Customoption3l38szkeau6
  customoption3x0irg3amrg: Customoption3x0irg3amrg
  customoption3xreyzkqf5: Customoption3xreyzkqf5
  customoption41nz87i2dz9: Customoption41nz87i2dz9
  customoption47ki6dx07tv: Customoption47ki6dx07tv
  customoption48: Customoption48
  customoption4foem5koyo4: Customoption4foem5koyo4
  customoption4qvjy2unpc2: Customoption4qvjy2unpc2
  customoption54xka951jk5: Customoption54xka951jk5
  customoption5duekuto6c4: Customoption5duekuto6c4
  customoption5v3n7kkbu87: Customoption5v3n7kkbu87
  customoption61qfgn3o78c: Customoption61qfgn3o78c
  customoption65okpfb37j3: Customoption65okpfb37j3
  customoption68drjndw3xt: Customoption68drjndw3xt
  customoption6myre31g61n: Customoption6myre31g61n
  customoption6ra6v32rryv: Customoption6ra6v32rryv
  customoption6zrcnobp3p5: Customoption6zrcnobp3p5
  customoption719peiroggu: Customoption719peiroggu
  customoption78o8m0cv7fh: Customoption78o8m0cv7fh
  customoption7ft6dclybam: Customoption7ft6dclybam
  customoption7lm2pdeh2us: Customoption7lm2pdeh2us
  customoption7ow00l2c5bj: Customoption7ow00l2c5bj
  customoption7q1k6iymcd9: Customoption7q1k6iymcd9
  customoption7xkfuy42bj4: Customoption7xkfuy42bj4
  customoption891ixli19op: Customoption891ixli19op
  customoption8dnk9kkxloc: Customoption8dnk9kkxloc
  customoption8ejggxfht8e: Customoption8ejggxfht8e
  customoption8ejuq1wxnec: Customoption8ejuq1wxnec
  customoption8fpegljzqsb: Customoption8fpegljzqsb
  customoption8nbcknw2pyk: Customoption8nbcknw2pyk
  customoption8oxo4gr5fe: Customoption8oxo4gr5fe
  customoption8x9e7kpzcwb: Customoption8x9e7kpzcwb
  customoption8ymxxff2ksi: Customoption8ymxxff2ksi
  customoption90yda5sr3zj: Customoption90yda5sr3zj
  customoption9ld8w8mdggp: Customoption9ld8w8mdggp
  customoption9rlcs7gjgmd: Customoption9rlcs7gjgmd
  customoptiona37n6rgvdyt: Customoptiona37n6rgvdyt
  customoptiona8ta226s7d: Customoptiona8ta226s7d
  customoptionacv4ksyd48r: Customoptionacv4ksyd48r
  customoptionadins486ytt: Customoptionadins486ytt
  customoptionadoio2iqtmk: Customoptionadoio2iqtmk
  customoptionayt1kmc6kym: Customoptionayt1kmc6kym
  customoptionb4u2vhh5x8: Customoptionb4u2vhh5x8
  customoptionb8p0bllzbh9: Customoptionb8p0bllzbh9
  customoptionbid7wljad5a: Customoptionbid7wljad5a
  customoptionbp8wcuufkjf: Customoptionbp8wcuufkjf
  customoptionbspy9dtbjji: Customoptionbspy9dtbjji
  customoptionc37vi8ajh5o: Customoptionc37vi8ajh5o
  customoptionc4m3niipidp: Customoptionc4m3niipidp
  customoptionceq075522x8: Customoptionceq075522x8
  customoptioncflqxf0ujt: Customoptioncflqxf0ujt
  customoptionckea105imhs: Customoptionckea105imhs
  customoptioncr57ikxchro: Customoptioncr57ikxchro
  customoptionctqz6iw2vs: Customoptionctqz6iw2vs
  customoptioncz2sf0xdgs: Customoptioncz2sf0xdgs
  customoptionddvsu64ssfa: Customoptionddvsu64ssfa
  customoptiondfj2mr9gq8q: Customoptiondfj2mr9gq8q
  customoptiondm0u2dm5hg: Customoptiondm0u2dm5hg
  customoptione0bxi0ia8uq: Customoptione0bxi0ia8uq
  customoptione7k261qcyy: Customoptione7k261qcyy
  customoptionengweiiu3r: Customoptionengweiiu3r
  customoptionetk4gldp7nh: Customoptionetk4gldp7nh
  customoptionetlw2wb0nyc: Customoptionetlw2wb0nyc
  customoptionf5x61u4vt99: Customoptionf5x61u4vt99
  customoptionf7haihefzdi: Customoptionf7haihefzdi
  customoptionfb8jixltiy: Customoptionfb8jixltiy
  customoptionfgqcs8z9hp: Customoptionfgqcs8z9hp
  customoptionfkydrptw7tk: Customoptionfkydrptw7tk
  customoptionfsaaqrbjxuk: Customoptionfsaaqrbjxuk
  customoptiong751eie5t5f: Customoptiong751eie5t5f
  customoptiongairuerb5zj: Customoptiongairuerb5zj
  customoptiongfrnrc22o46: Customoptiongfrnrc22o46
  customoptionghp5jlihang: Customoptionghp5jlihang
  customoptionglg6vy2502: Customoptionglg6vy2502
  customoptiongscnjf6ro69: Customoptiongscnjf6ro69
  customoptionh9aehklfk6b: Customoptionh9aehklfk6b
  customoptionhagc0k33kko: Customoptionhagc0k33kko
  customoptionhf8rd3mr1jc: Customoptionhf8rd3mr1jc
  customoptionhik309pwz3: Customoptionhik309pwz3
  customoptionhowzg33mh6s: Customoptionhowzg33mh6s
  customoptionhqgt4svxha6: Customoptionhqgt4svxha6
  customoptionhxjhqsk6iow: Customoptionhxjhqsk6iow
  customoptionhyk9n3yp0ft: Customoptionhyk9n3yp0ft
  customoptioni6pc6m4zlwj: Customoptioni6pc6m4zlwj
  customoptioniowql8g5yp: Customoptioniowql8g5yp
  customoptioniu30ij716vm: Customoptioniu30ij716vm
  customoptionivdpz89qh1: Customoptionivdpz89qh1
  customoptionjdxvurr00pb: Customoptionjdxvurr00pb
  customoptionjz1jwevdxi8: Customoptionjz1jwevdxi8
  customoptionk34pivnwzvk: Customoptionk34pivnwzvk
  customoptionkbi9rdl2a5f: Customoptionkbi9rdl2a5f
  customoptionki2wlphwo29: Customoptionki2wlphwo29
  customoptionkjz6w0bnwej: Customoptionkjz6w0bnwej
  customoptionkk6sfpqv839: Customoptionkk6sfpqv839
  customoptionkpk9zcv6cr: Customoptionkpk9zcv6cr
  customoptionkqs0tg4m32: Customoptionkqs0tg4m32
  customoptionkxo5ioyj62g: Customoptionkxo5ioyj62g
  customoptionkz568mdcqtf: Customoptionkz568mdcqtf
  customoptionlddhg95pimq: Customoptionlddhg95pimq
  customoptionlmlr188123: Customoptionlmlr188123
  customoptionlpw65n6sf8: Customoptionlpw65n6sf8
  customoptionlrlbe78cioc: Customoptionlrlbe78cioc
  customoptionlshu9d8iqg9: Customoptionlshu9d8iqg9
  customoptionmb73cgfb4re: Customoptionmb73cgfb4re
  customoptionmf68s6iv2ea: Customoptionmf68s6iv2ea
  customoptionmpn14hjwr9o: Customoptionmpn14hjwr9o
  customoptionmsquhfvlj9: Customoptionmsquhfvlj9
  customoptionmsqxs5tvr0k: Customoptionmsqxs5tvr0k
  customoptionmxdyltpkgv: Customoptionmxdyltpkgv
  customoptionn4ex5htzho: Customoptionn4ex5htzho
  customoptionna30je2r8r: Customoptionna30je2r8r
  customoptionnk1ic3u28se: Customoptionnk1ic3u28se
  customoptionnklmx6osvco: Customoptionnklmx6osvco
  customoptionnvd81xg9olp: Customoptionnvd81xg9olp
  customoptionomsoabk8of: Customoptionomsoabk8of
  customoptionouojmkxpxb: Customoptionouojmkxpxb
  customoptionp2fndghcqv: Customoptionp2fndghcqv
  customoptionp2har2zpj3: Customoptionp2har2zpj3
  customoptionpd9cli9309i: Customoptionpd9cli9309i
  customoptionpw6k2p43fcc: Customoptionpw6k2p43fcc
  customoptionq2qoy3ahpl: Customoptionq2qoy3ahpl
  customoptionq4ysmoysb5e: Customoptionq4ysmoysb5e
  customoptionq6pzkeoznz: Customoptionq6pzkeoznz
  customoptionqbtpit669tg: Customoptionqbtpit669tg
  customoptionqd61n686fb: Customoptionqd61n686fb
  customoptionqmynh28ang: Customoptionqmynh28ang
  customoptionqnkhkio3yrq: Customoptionqnkhkio3yrq
  customoptionqnsoom2r9u: Customoptionqnsoom2r9u
  customoptionqt6u194m9i: Customoptionqt6u194m9i
  customoptionr5t8yse983h: Customoptionr5t8yse983h
  customoptionr7p1tx5cwn: Customoptionr7p1tx5cwn
  customoptionrgfwzxj4qfa: Customoptionrgfwzxj4qfa
  customoptionrii4zxg1wvf: Customoptionrii4zxg1wvf
  customoptionrncb9zi92sb: Customoptionrncb9zi92sb
  customoptionro1s8x2nshc: Customoptionro1s8x2nshc
  customoptionrtd0k26n1e: Customoptionrtd0k26n1e
  customoptions4my53vg92c: Customoptions4my53vg92c
  customoptions6x8ocx74j: Customoptions6x8ocx74j
  customoptions8rhyo0hobq: Customoptions8rhyo0hobq
  customoptionsc607l851p: Customoptionsc607l851p
  customoptionsrf5tc0jcq: Customoptionsrf5tc0jcq
  customoptionswv8ekwpgh: Customoptionswv8ekwpgh
  customoptiontgn22s3k0s: Customoptiontgn22s3k0s
  customoptiontkygn5tewbf: Customoptiontkygn5tewbf
  customoptiontyoxfrb31g: Customoptiontyoxfrb31g
  customoptionu1tqoxig83g: Customoptionu1tqoxig83g
  customoptionu36sqzg25v: Customoptionu36sqzg25v
  customoptionu4twy46e75m: Customoptionu4twy46e75m
  customoptionu8jme54r59: Customoptionu8jme54r59
  customoptionub4f4c3n4t: Customoptionub4f4c3n4t
  customoptionus040jnf1kb: Customoptionus040jnf1kb
  customoptionuv3fa6v8asp: Customoptionuv3fa6v8asp
  customoptionv6cza2cy5vg: Customoptionv6cza2cy5vg
  customoptionv6hdylt78d: Customoptionv6hdylt78d
  customoptionv7o7rgcsgce: Customoptionv7o7rgcsgce
  customoptionvc443d8geva: Customoptionvc443d8geva
  customoptionvcl3hvvwf1p: Customoptionvcl3hvvwf1p
  customoptionvlvkroggxd: Customoptionvlvkroggxd
  customoptionvsfj2s805m: Customoptionvsfj2s805m
  customoptionvsuta9o137b: Customoptionvsuta9o137b
  customoptionw2gu03xdav: Customoptionw2gu03xdav
  customoptionw84kmnw3e3: Customoptionw84kmnw3e3
  customoptionwarovi0ke8g: Customoptionwarovi0ke8g
  customoptionwbv29zjvhbf: Customoptionwbv29zjvhbf
  customoptionx1ew2v19fap: Customoptionx1ew2v19fap
  customoptionx4hq7flw1uq: Customoptionx4hq7flw1uq
  customoptionx7gx4repani: Customoptionx7gx4repani
  customoptionxrua4n1cni: Customoptionxrua4n1cni
  customoptiony0yub2flu5: Customoptiony0yub2flu5
  customoptiony35bmrgqrfn: Customoptiony35bmrgqrfn
  customoptionyf2ka0z8ie9r: Customoptionyf2ka0z8ie9r
  customoptionyik45s0epy9: Customoptionyik45s0epy9
  customoptionyjvw6qie9h: Customoptionyjvw6qie9h
  customoptionyr9y3vjyto: Customoptionyr9y3vjyto
  customoptionys5xs80ust: Customoptionys5xs80ust
  customoptionyubn91vi2vm: Customoptionyubn91vi2vm
  customoptionyv3y9tbosb: Customoptionyv3y9tbosb
  customoptionyxjrptc724n: Customoptionyxjrptc724n
  customoptionzj8zh2uuty: Customoptionzj8zh2uuty
  customoptionzqqcvuelmi9: Customoptionzqqcvuelmi9
  customoptionzvn7ihorr98: Customoptionzvn7ihorr98
  customoptionzxx3krmw3yn: Customoptionzxx3krmw3yn
  customoptionzypnl1svfg: Customoptionzypnl1svfg
  imagenblack: Imagenblack
  imaginblack: Imaginblack
  jato475: Jato475
  null: Null
  p0476: P0476
  p0c3y: P0c3y
  p0w490: P0w490
  pippo: Pippo
  psps0004: Psps0004
}

export interface N100 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N191 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N218 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N408 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N491 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N601 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N696 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N35732 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N43305 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N68370 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N69621 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N71700 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N80283 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N80800 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N86746 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N95703 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N95704 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N105604 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N111740 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139833 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N170727 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26581485 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685932 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28610083 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28667481 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29540425 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30017334 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30049886 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30412404 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641210 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641351 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647729 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30648710 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650583 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650895 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30651451 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652149 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652167 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653440 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30654590 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655629 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655634 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30673158 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30788385 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30789746 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791971 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30802058 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806341 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823811 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31085866 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199315 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266592 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498475 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31500131 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31500322 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501605 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501668 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32269187 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32270811 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32271370 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275016 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275087 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275163 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275700 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276840 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276861 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276962 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32277748 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32277794 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32277851 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278223 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278552 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278589 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278597 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278946 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32279007 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32279019 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32285114 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32287642 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305567 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32324044 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32324056 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341746 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32375755 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32376752 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32377186 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32545926 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32546630 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548196 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612873 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707614 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707617 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717043 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723289 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32777204 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850467 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850881 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N33008977 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N33113358 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N423823685 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2163138073 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0e0e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5bobjectPromise5d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N696u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A2a2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Black {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm108b2bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm23a46bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4ffd4bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm66741bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm711c2bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm829a9bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm89f2bbs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm8ec4cbs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm94237bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAaa1ebs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAtr2Bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB2aBs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBa831bs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmsAb837jb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmsB2kJb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmsC886ejb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp7ef54abip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspCffa8b2ipb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Carpaint61202 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption01w3e18u2ane {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption052w0uie0emp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption05t4zpmiemkg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0mes05djm8yb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0qfxjf9cf5yl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0rljishif0o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0xdejxcl23o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption10dzl8in29i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption10w2zckc21ik {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption15h5y6s2crq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1c00ow9idc8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1et8ywt7led {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1iafe6i0zjo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1obvzp5t1gw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1svmqzn1xh1 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1yde8trcff2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption24t0y6vjo6w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption26xzdraxtk7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2cvsfkv3hem {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2evf933owfp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2lo6057hdjd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2m9jglu1nrn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2ri7mlamwhk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2to3pjww6gb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2uxlkr4mwhd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption30xukqcigyb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption37btdaluzwl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption37twdtyudbm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption38 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3c6a5qa02m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3ern81k2n8d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3l38szkeau6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3x0irg3amrg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3xreyzkqf5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption41nz87i2dz9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption47ki6dx07tv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption48 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4foem5koyo4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4qvjy2unpc2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption54xka951jk5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5duekuto6c4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5v3n7kkbu87 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption61qfgn3o78c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption65okpfb37j3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption68drjndw3xt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6myre31g61n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6ra6v32rryv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6zrcnobp3p5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption719peiroggu {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption78o8m0cv7fh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ft6dclybam {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7lm2pdeh2us {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ow00l2c5bj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7q1k6iymcd9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7xkfuy42bj4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption891ixli19op {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8dnk9kkxloc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8ejggxfht8e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8ejuq1wxnec {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8fpegljzqsb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8nbcknw2pyk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8oxo4gr5fe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8x9e7kpzcwb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8ymxxff2ksi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption90yda5sr3zj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9ld8w8mdggp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9rlcs7gjgmd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiona37n6rgvdyt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiona8ta226s7d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionacv4ksyd48r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionadins486ytt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionadoio2iqtmk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionayt1kmc6kym {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionb4u2vhh5x8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionb8p0bllzbh9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbid7wljad5a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbp8wcuufkjf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbspy9dtbjji {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionc37vi8ajh5o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionc4m3niipidp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionceq075522x8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncflqxf0ujt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionckea105imhs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncr57ikxchro {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionctqz6iw2vs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioncz2sf0xdgs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionddvsu64ssfa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondfj2mr9gq8q {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondm0u2dm5hg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptione0bxi0ia8uq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptione7k261qcyy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionengweiiu3r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionetk4gldp7nh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionetlw2wb0nyc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf5x61u4vt99 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf7haihefzdi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfb8jixltiy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfgqcs8z9hp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfkydrptw7tk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfsaaqrbjxuk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiong751eie5t5f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongairuerb5zj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongfrnrc22o46 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionghp5jlihang {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionglg6vy2502 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongscnjf6ro69 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionh9aehklfk6b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhagc0k33kko {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhf8rd3mr1jc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhik309pwz3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhowzg33mh6s {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhqgt4svxha6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhxjhqsk6iow {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhyk9n3yp0ft {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioni6pc6m4zlwj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioniowql8g5yp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioniu30ij716vm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionivdpz89qh1 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjdxvurr00pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjz1jwevdxi8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionk34pivnwzvk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkbi9rdl2a5f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionki2wlphwo29 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkjz6w0bnwej {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkk6sfpqv839 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkpk9zcv6cr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkqs0tg4m32 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkxo5ioyj62g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkz568mdcqtf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlddhg95pimq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlmlr188123 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlpw65n6sf8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlrlbe78cioc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlshu9d8iqg9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmb73cgfb4re {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmf68s6iv2ea {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmpn14hjwr9o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmsquhfvlj9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmsqxs5tvr0k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmxdyltpkgv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionn4ex5htzho {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionna30je2r8r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnk1ic3u28se {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnklmx6osvco {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnvd81xg9olp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionomsoabk8of {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionouojmkxpxb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionp2fndghcqv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionp2har2zpj3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpd9cli9309i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpw6k2p43fcc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionq2qoy3ahpl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionq4ysmoysb5e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionq6pzkeoznz {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqbtpit669tg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqd61n686fb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqmynh28ang {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqnkhkio3yrq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqnsoom2r9u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqt6u194m9i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr5t8yse983h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr7p1tx5cwn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrgfwzxj4qfa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrii4zxg1wvf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrncb9zi92sb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionro1s8x2nshc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrtd0k26n1e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptions4my53vg92c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptions6x8ocx74j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptions8rhyo0hobq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsc607l851p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsrf5tc0jcq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionswv8ekwpgh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontgn22s3k0s {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontkygn5tewbf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontyoxfrb31g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu1tqoxig83g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu36sqzg25v {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu4twy46e75m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu8jme54r59 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionub4f4c3n4t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionus040jnf1kb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuv3fa6v8asp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv6cza2cy5vg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv6hdylt78d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionv7o7rgcsgce {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvc443d8geva {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvcl3hvvwf1p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvlvkroggxd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvsfj2s805m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvsuta9o137b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw2gu03xdav {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw84kmnw3e3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwarovi0ke8g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwbv29zjvhbf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx1ew2v19fap {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx4hq7flw1uq {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx7gx4repani {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxrua4n1cni {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiony0yub2flu5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiony35bmrgqrfn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyf2ka0z8ie9r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyik45s0epy9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyjvw6qie9h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyr9y3vjyto {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionys5xs80ust {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyubn91vi2vm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyv3y9tbosb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyxjrptc724n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzj8zh2uuty {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzqqcvuelmi9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzvn7ihorr98 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzxx3krmw3yn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionzypnl1svfg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imagenblack {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imaginblack {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jato475 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Null {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0476 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0w490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pippo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Psps0004 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0064sspc0016 {
  paintSwatch: PaintSwatch53
  mapped: Mapped52
}

export interface PaintSwatch53 {
  primary: Primary53
  secondary: Secondary13
}

export interface Primary53 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary13 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped52 {
  "130381": N130381
  p0c2w: P0c2w
  s0c2w: S0c2w
}

export interface N130381 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c2w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface S0c2w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0064sspc0026 {
  paintSwatch: PaintSwatch54
  mapped: Mapped53
}

export interface PaintSwatch54 {
  primary: Primary54
  secondary: Secondary14
}

export interface Primary54 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary14 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped53 {
  p0c6c: P0c6c
}

export interface P0c6c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0064sspc0067 {
  paintSwatch: PaintSwatch55
  mapped: Mapped54
}

export interface PaintSwatch55 {
  primary: Primary55
  secondary: Secondary15
}

export interface Primary55 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary15 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped54 {
  "157362": N157362
}

export interface N157362 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0065 {
  paintSwatch: PaintSwatch56
  mapped: Mapped55
}

export interface PaintSwatch56 {
  primary: Primary56
}

export interface Primary56 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped55 {
  "29178": N29178
  a51: A51
  b05: B05
}

export interface N29178 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A51 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B05 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0066 {
  paintSwatch: PaintSwatch57
  mapped: Mapped56
}

export interface PaintSwatch57 {
  primary: Primary57
}

export interface Primary57 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped56 {
  "482": N482
  "85514": N85514
  b07: B07
}

export interface N482 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N85514 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B07 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0069 {
  paintSwatch: PaintSwatch58
  mapped: Mapped57
}

export interface PaintSwatch58 {
  primary: Primary58
}

export interface Primary58 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped57 {
  "69168": N69168
}

export interface N69168 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0080 {
  paintSwatch: PaintSwatch59
  mapped: Mapped58
}

export interface PaintSwatch59 {
  primary: Primary59
}

export interface Primary59 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped58 {
  "155191": N155191
}

export interface N155191 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0083 {
  paintSwatch: PaintSwatch60
  mapped: Mapped59
}

export interface PaintSwatch60 {
  primary: Primary60
}

export interface Primary60 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped59 {
  "177438": N177438
}

export interface N177438 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0083sspc0026 {
  paintSwatch: PaintSwatch61
  mapped: Mapped60
}

export interface PaintSwatch61 {
  secondary: Secondary16
  primary: Primary61
}

export interface Secondary16 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary61 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped60 {
  "122438": N122438
}

export interface N122438 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0092 {
  paintSwatch: PaintSwatch62
  mapped: Mapped61
}

export interface PaintSwatch62 {
  primary: Primary62
}

export interface Primary62 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped61 {
  "b02a1d-m-toronto-rot-metallic": B02a1dMTorontoRotMetallic
  "b02a1d-m-toronto-rot-metallise": B02a1dMTorontoRotMetallise
  "j-01": J01
}

export interface B02a1dMTorontoRotMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B02a1dMTorontoRotMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface J01 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0096 {
  paintSwatch: PaintSwatch63
  mapped: Mapped62
}

export interface PaintSwatch63 {
  primary: Primary63
}

export interface Primary63 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped62 {
  "aaabae-glaciersilber-metallic": AaabaeGlaciersilberMetallic
  "aaabae-glaciersilber-metallise": AaabaeGlaciersilberMetallise
  customoption06pfgm4ujh9r: Customoption06pfgm4ujh9r
  customoption9dbx8khk5mg: Customoption9dbx8khk5mg
  customoption9jfa3enrzul: Customoption9jfa3enrzul
  customoptiondtejlglhi8b: Customoptiondtejlglhi8b
  customoptionobaih9xiixs: Customoptionobaih9xiixs
  "d6d8da-glaciersilber-metallise": D6d8daGlaciersilberMetallise
  imagingrey: Imagingrey
  spc0096: Spc0096
}

export interface AaabaeGlaciersilberMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface AaabaeGlaciersilberMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption06pfgm4ujh9r {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9dbx8khk5mg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9jfa3enrzul {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondtejlglhi8b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionobaih9xiixs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface D6d8daGlaciersilberMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imagingrey {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Spc0096 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0097 {
  paintSwatch: PaintSwatch64
  mapped: Mapped63
}

export interface PaintSwatch64 {
  primary: Primary64
}

export interface Primary64 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped63 {
  "30818244": N30818244
  "bmm-4e5a4bg": Bmm4e5a4bg
  customoptionyl0fgz4f8c: Customoptionyl0fgz4f8c
}

export interface N30818244 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4e5a4bg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyl0fgz4f8c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0101 {
  paintSwatch: PaintSwatch65
  mapped: Mapped64
}

export interface PaintSwatch65 {
  primary: Primary65
}

export interface Primary65 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped64 {
  "369": N369
  "30775430": N30775430
  "2163138070": N2163138070
  b4b4: B4b4
  blanco: Blanco
  customoptionet9x738qq7a: Customoptionet9x738qq7a
  customoptionwura1wd9w7n: Customoptionwura1wd9w7n
  teros: Teros
}

export interface N369 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30775430 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2163138070 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B4b4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Blanco {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionet9x738qq7a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwura1wd9w7n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Teros {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0103 {
  paintSwatch: PaintSwatch66
  mapped: Mapped65
}

export interface PaintSwatch66 {
  primary: Primary66
}

export interface Primary66 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped65 {
  "42055": N42055
  "26365736": N26365736
  "26366760": N26366760
  "28610079": N28610079
  "29176238": N29176238
  "29540416": N29540416
  "29740266": N29740266
  "30411388": N30411388
  "30649891": N30649891
  "30650902": N30650902
  "30791968": N30791968
  "30806374": N30806374
  "30814914": N30814914
  "31174083": N31174083
  "31199332": N31199332
  "31498618": N31498618
  "31501381": N31501381
  "32275012": N32275012
  "32278586": N32278586
  "32305569": N32305569
  "32341747": N32341747
  "32546638": N32546638
  "32707615": N32707615
  "32707619": N32707619
  "32850468": N32850468
  "32850882": N32850882
  "bmm-5bf1cmw": Bmm5bf1cmw
  "bmm-6e12fmw": Bmm6e12fmw
  "bmm-7afd5mw": Bmm7afd5mw
  "bmm-9efe4mw": Bmm9efe4mw
  "bmm-a50a0mw": BmmA50a0mw
  "bmm-atr3-mw": BmmAtr3Mw
  "bmm-b2c-mw": BmmB2cMw
  "bmm-dc603mw": BmmDc603mw
  "bmm-f50cbmw": BmmF50cbmw
  "bmm-fa42bmw": BmmFa42bmw
  custom: Custom
  customoption05i36kgx4w0i: Customoption05i36kgx4w0i
  customoption07jnza5lmjyy: Customoption07jnza5lmjyy
  customoption0j7djlsaftmv: Customoption0j7djlsaftmv
  customoption26u8tlnm4wr: Customoption26u8tlnm4wr
  customoption4xiccbsqph2: Customoption4xiccbsqph2
  customoption59hipqve6ib: Customoption59hipqve6ib
  customoption5i54fmq1qdj: Customoption5i54fmq1qdj
  customoption70ortfko1oa: Customoption70ortfko1oa
  customoption71rx9ftsqxj: Customoption71rx9ftsqxj
  customoption8ag7nz5ah5: Customoption8ag7nz5ah5
  customoption8fdemldfg8d: Customoption8fdemldfg8d
  customoption8fpkiavgxys: Customoption8fpkiavgxys
  customoption8jtimwj4isb: Customoption8jtimwj4isb
  customoptionajr65m94ytd: Customoptionajr65m94ytd
  customoptionculctck2mzs: Customoptionculctck2mzs
  customoptiondcwnu8ycmep: Customoptiondcwnu8ycmep
  customoptionf77tt406vt: Customoptionf77tt406vt
  customoptiongds735xyti: Customoptiongds735xyti
  customoptionhddycrx7bvh: Customoptionhddycrx7bvh
  customoptioni586jhymyx: Customoptioni586jhymyx
  customoptioniqdlan5n1zs: Customoptioniqdlan5n1zs
  customoptionjbuenivdz8: Customoptionjbuenivdz8
  customoptionjzlxid036dm: Customoptionjzlxid036dm
  customoptionk6zv0z5u75s: Customoptionk6zv0z5u75s
  customoptionkfbh1s261lp: Customoptionkfbh1s261lp
  customoptionluoqufmabv: Customoptionluoqufmabv
  customoptionlvs3j41akni: Customoptionlvs3j41akni
  customoptionmzbz0mdbuoo: Customoptionmzbz0mdbuoo
  customoptionoe62ssgo64: Customoptionoe62ssgo64
  customoptionoh99nidu3qt: Customoptionoh99nidu3qt
  customoptionox6x5v401u: Customoptionox6x5v401u
  customoptionpcvk1tbd7jn: Customoptionpcvk1tbd7jn
  customoptionpnswa6m9pw: Customoptionpnswa6m9pw
  customoptionssmw7npjir: Customoptionssmw7npjir
  customoptionu3ra64jcwx7: Customoptionu3ra64jcwx7
  customoptionuwc317lrro: Customoptionuwc317lrro
  customoptionwjaknfn8q4: Customoptionwjaknfn8q4
  customoptionx1z00f5foir: Customoptionx1z00f5foir
  customoptionxfv5q3la39: Customoptionxfv5q3la39
  customoptionz1pk7djxr4d: Customoptionz1pk7djxr4d
  "d4d4d4-mineralweiss": D4d4d4Mineralweiss
  "e6e6e6-mineralweiss-metallic": E6e6e6MineralweissMetallic
  "e6e6e6-mineralweiss-metallise": E6e6e6MineralweissMetallise
  f50cb: F50cb
  imaginewhite: Imaginewhite
  jatoa96: Jatoa96
  jatomet: Jatomet
}

export interface N42055 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26365736 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26366760 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28610079 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29176238 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29540416 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29740266 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30411388 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649891 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650902 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30791968 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806374 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814914 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174083 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199332 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31498618 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31501381 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275012 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278586 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305569 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341747 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32546638 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707615 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707619 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface N32850468 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850882 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm5bf1cmw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm6e12fmw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7afd5mw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm9efe4mw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA50a0mw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAtr3Mw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB2cMw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmDc603mw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF50cbmw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmFa42bmw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Custom {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption05i36kgx4w0i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption07jnza5lmjyy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0j7djlsaftmv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption26u8tlnm4wr {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4xiccbsqph2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption59hipqve6ib {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5i54fmq1qdj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption70ortfko1oa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption71rx9ftsqxj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8ag7nz5ah5 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8fdemldfg8d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8fpkiavgxys {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8jtimwj4isb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionajr65m94ytd {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionculctck2mzs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondcwnu8ycmep {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf77tt406vt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongds735xyti {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhddycrx7bvh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioni586jhymyx {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioniqdlan5n1zs {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjbuenivdz8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjzlxid036dm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionk6zv0z5u75s {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkfbh1s261lp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionluoqufmabv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlvs3j41akni {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmzbz0mdbuoo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionoe62ssgo64 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionoh99nidu3qt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionox6x5v401u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpcvk1tbd7jn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionpnswa6m9pw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionssmw7npjir {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu3ra64jcwx7 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionuwc317lrro {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwjaknfn8q4 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionx1z00f5foir {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionxfv5q3la39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionz1pk7djxr4d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface D4d4d4Mineralweiss {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface E6e6e6MineralweissMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface E6e6e6MineralweissMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface F50cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Imaginewhite {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatoa96 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatomet {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0103sspc0015 {
  paintSwatch: PaintSwatch67
  mapped: Mapped66
}

export interface PaintSwatch67 {
  primary: Primary67
  secondary: Secondary17
}

export interface Primary67 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary17 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped66 {
  "105415": N105415
  "26373454": N26373454
  b97: B97
  customoption8x5y6tn16b9: Customoption8x5y6tn16b9
}

export interface N105415 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26373454 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B97 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8x5y6tn16b9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0103sspc0016 {
  paintSwatch: PaintSwatch68
  mapped: Mapped67
}

export interface PaintSwatch68 {
  primary: Primary68
  secondary: Secondary18
}

export interface Primary68 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary18 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped67 {
  "130437": N130437
  p0b85: P0b85
}

export interface N130437 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b85 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0103sspc0026 {
  paintSwatch: PaintSwatch69
  mapped: Mapped68
}

export interface PaintSwatch69 {
  primary: Primary69
  secondary: Secondary19
}

export interface Primary69 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary19 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped68 {
  "105414": N105414
}

export interface N105414 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0106 {
  paintSwatch: PaintSwatch70
  mapped: Mapped69
}

export interface PaintSwatch70 {
  primary: Primary70
}

export interface Primary70 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped69 {
  "bmm-1830drb": Bmm1830drb
}

export interface Bmm1830drb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0108 {
  paintSwatch: PaintSwatch71
  mapped: Mapped70
}

export interface PaintSwatch71 {
  primary: Primary71
}

export interface Primary71 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped70 {
  p0p6k: P0p6k
}

export interface P0p6k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0111 {
  paintSwatch: PaintSwatch72
  mapped: Mapped71
}

export interface PaintSwatch72 {
  primary: Primary72
}

export interface Primary72 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped71 {
  customoption7wnij7hgfns: Customoption7wnij7hgfns
}

export interface Customoption7wnij7hgfns {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0119 {
  paintSwatch: PaintSwatch73
  mapped: Mapped72
}

export interface PaintSwatch73 {
  primary: Primary73
}

export interface Primary73 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped72 {
  "141212": N141212
  "141240": N141240
  "154953": N154953
  "165588": N165588
  "30653444": N30653444
  "30655633": N30655633
  "31085858": N31085858
  "32612896": N32612896
  "bmm-a51f6og": BmmA51f6og
  "bmsp-8ee13bipog": Bmsp8ee13bipog
  c4a: C4a
  customoption4kon4v5x98j: Customoption4kon4v5x98j
  customoptionh4r3u3l20u: Customoptionh4r3u3l20u
  customoptionrmzjng1u4g: Customoptionrmzjng1u4g
  customoptionwaeibpsn4o: Customoptionwaeibpsn4o
  p0c4a: P0c4a
  p0m490: P0m490
}

export interface N141212 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N141240 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N154953 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N165588 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30653444 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655633 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31085858 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612896 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA51f6og {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp8ee13bipog {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C4a {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Customoption4kon4v5x98j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionh4r3u3l20u {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrmzjng1u4g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionwaeibpsn4o {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0m490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0119sspc0064 {
  paintSwatch: PaintSwatch74
  mapped: Mapped73
}

export interface PaintSwatch74 {
  primary: Primary74
  secondary: Secondary20
}

export interface Primary74 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary20 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped73 {
  "177955": N177955
  "32204085": N32204085
  p0wc4a: P0wc4a
}

export interface N177955 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32204085 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0wc4a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0120 {
  paintSwatch: PaintSwatch75
  mapped: Mapped74
}

export interface PaintSwatch75 {
  primary: Primary75
}

export interface Primary75 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped74 {
  "107931": N107931
  "136087": N136087
  "140259": N140259
  "bmm-a0c6bdg": BmmA0c6bdg
  "bmm-a3247dg": BmmA3247dg
  c28: C28
  p0c28: P0c28
  p0p67: P0p67
  p67: P67
  p71: P71
  pa002: Pa002
}

export interface N107931 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N136087 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N140259 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA0c6bdg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA3247dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C28 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c28 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p67 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P67 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P71 {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Pa002 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0124 {
  paintSwatch: PaintSwatch76
  mapped: Mapped75
}

export interface PaintSwatch76 {
  primary: Primary76
}

export interface Primary76 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped75 {
  "32710633": N32710633
  "bmm-0ed6bfpb": Bmm0ed6bfpb
  "bmsp-3b976bipfp": Bmsp3b976bipfp
  "bmsp-71f1dfpb": Bmsp71f1dfpb
}

export interface N32710633 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm0ed6bfpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp3b976bipfp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp71f1dfpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0129 {
  paintSwatch: PaintSwatch77
  mapped: Mapped76
}

export interface PaintSwatch77 {
  primary: Primary77
}

export interface Primary77 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped76 {
  "bmm-bmad-pb": BmmBmadPb
  "bmsp-rh-pbbip": BmspRhPbbip
}

export interface BmmBmadPb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspRhPbbip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0130 {
  paintSwatch: PaintSwatch78
  mapped: Mapped77
}

export interface PaintSwatch78 {
  primary: Primary78
}

export interface Primary78 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped77 {
  jatoc4e: Jatoc4e
}

export interface Jatoc4e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0138 {
  paintSwatch: PaintSwatch79
  mapped: Mapped78
}

export interface PaintSwatch79 {
  primary: Primary79
}

export interface Primary79 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped78 {
  "134": N134
  "4598": N4598
  "21395": N21395
  "99520": N99520
  "2163138069": N2163138069
}

export interface N134 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N4598 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N21395 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N99520 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2163138069 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0138sspc0064 {
  paintSwatch: PaintSwatch80
  mapped: Mapped79
}

export interface PaintSwatch80 {
  primary: Primary80
  secondary: Secondary21
}

export interface Primary80 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary21 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped79 {
  "405": N405
}

export interface N405 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0142 {
  paintSwatch: PaintSwatch81
  mapped: Mapped80
}

export interface PaintSwatch81 {
  primary: Primary81
}

export interface Primary81 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped80 {
  "84711": N84711
  "123217": N123217
  "bmsp-rf-psbip": BmspRfPsbip
  silver: Silver
}

export interface N84711 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N123217 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspRfPsbip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Silver {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0145 {
  paintSwatch: PaintSwatch82
  mapped: Mapped81
}

export interface PaintSwatch82 {
  primary: Primary82
}

export interface Primary82 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped81 {
  "151328": N151328
  "32290427": N32290427
  "32290894": N32290894
  "bmm-7dfb3mbg": Bmm7dfb3mbg
  "bmm-d2b4embg": BmmD2b4embg
}

export interface N151328 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290427 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290894 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7dfb3mbg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmD2b4embg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0161 {
  paintSwatch: PaintSwatch83
  mapped: Mapped82
}

export interface PaintSwatch83 {
  primary: Primary83
}

export interface Primary83 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped82 {
  "97604": N97604
  p0x12: P0x12
  x12: X12
}

export interface N97604 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x12 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X12 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0164 {
  paintSwatch: PaintSwatch84
  mapped: Mapped83
}

export interface PaintSwatch84 {
  primary: Primary84
}

export interface Primary84 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped83 {
  "76243": N76243
  "107930": N107930
  "117992": N117992
  "141672": N141672
  "30049580": N30049580
  "30641381": N30641381
  "32546646": N32546646
  "32548207": N32548207
  "012754-misano-blau": N012754MisanoBlau
  "05264f-sonic-speed-blue": N05264fSonicSpeedBlue
  "102b59-sonic-speed-blue": N102b59SonicSpeedBlue
  "bmm-6033dmb": Bmm6033dmb
  "bmm-6a98fssb": Bmm6a98fssb
  "bmm-ba9ebmb": BmmBa9ebmb
  "bmm-d58e0mb": BmmD58e0mb
  c1d: C1d
  jatometa: Jatometa
  p0c1a: P0c1a
  p0c1d: P0c1d
}

export interface N76243 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N107930 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N117992 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N141672 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30049580 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641381 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32546646 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548207 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N012754MisanoBlau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N05264fSonicSpeedBlue {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N102b59SonicSpeedBlue {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm6033dmb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm6a98fssb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBa9ebmb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmD58e0mb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatometa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0165 {
  paintSwatch: PaintSwatch85
  mapped: Mapped84
}

export interface PaintSwatch85 {
  primary: Primary85
}

export interface Primary85 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped84 {
  "30411790": N30411790
  "30652202": N30652202
  "30776773": N30776773
  "30804341": N30804341
  "32272730": N32272730
  "32276856": N32276856
  "32278266": N32278266
  "32278588": N32278588
  "32285148": N32285148
  "32305571": N32305571
  "32324058": N32324058
  "32341748": N32341748
  "32558394": N32558394
  "32612879": N32612879
  "32707618": N32707618
  "32707621": N32707621
  "32717046": N32717046
  "32719312": N32719312
  "32729296": N32729296
  "32777214": N32777214
  "32850883": N32850883
  "bmm-33b1dpb": Bmm33b1dpb
  "bmm-3b645pb": Bmm3b645pb
  "bmm-417f9pb": Bmm417f9pb
  "bmm-60633pb": Bmm60633pb
  "bmm-641bfpb": Bmm641bfpb
  "bmm-8882epb": Bmm8882epb
  "bmm-8d2cepb": Bmm8d2cepb
  "bmm-94a1epb": Bmm94a1epb
  "bmm-ae7dapb": BmmAe7dapb
  "bmm-d524apb": BmmD524apb
  "bmm-dce8fpb": BmmDce8fpb
  "bmm-e2402pb": BmmE2402pb
  "bmm-f13a6pb": BmmF13a6pb
  customoption177vjy4gg5f: Customoption177vjy4gg5f
  customoption1pazx5lcp7c: Customoption1pazx5lcp7c
  customoption72yuad8de3c: Customoption72yuad8de3c
  customoption7r15263xkdk: Customoption7r15263xkdk
  customoptiona8zf0vixz39: Customoptiona8zf0vixz39
  customoptionhg4s5q2gdub: Customoptionhg4s5q2gdub
  customoptionlxf02itxm6f: Customoptionlxf02itxm6f
  customoptiono6iebcqkc3: Customoptiono6iebcqkc3
  customoptionqudpxoerbmo: Customoptionqudpxoerbmo
}

export interface N30411790 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652202 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776773 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30804341 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32272730 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276856 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278266 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278588 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32285148 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32305571 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32324058 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32341748 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32558394 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612879 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707618 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707621 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717046 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32719312 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32729296 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32777214 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850883 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm33b1dpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3b645pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm417f9pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm60633pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm641bfpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm8882epb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm8d2cepb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm94a1epb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAe7dapb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmD524apb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmDce8fpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmE2402pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF13a6pb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption177vjy4gg5f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1pazx5lcp7c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption72yuad8de3c {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7r15263xkdk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiona8zf0vixz39 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionhg4s5q2gdub {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlxf02itxm6f {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiono6iebcqkc3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionqudpxoerbmo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0174 {
  paintSwatch: PaintSwatch86
  mapped: Mapped85
}

export interface PaintSwatch86 {
  primary: Primary86
}

export interface Primary86 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped85 {
  "5883": N5883
  "121028": N121028
  "123899": N123899
  "6d675c-jucarobeige": N6d675cJucarobeige
  "8d877b-bmw-individual-sonnenstein": N8d877bBmwIndividualSonnenstein
  "8d877bbmwindividualsonnestein": N8d877bbmwindividualsonnestein
  "a1998c-bmw-individual-sonnenstein-metallic": A1998cBmwIndividualSonnensteinMetallic
  "bmm-3b73es": Bmm3b73es
  "bmm-5b47es": Bmm5b47es
  customoptionfyzogcb9vm: Customoptionfyzogcb9vm
  customoptionndkwmxt3q0p: Customoptionndkwmxt3q0p
  p0c1n: P0c1n
}

export interface N5883 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N121028 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N123899 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N6d675cJucarobeige {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N8d877bBmwIndividualSonnenstein {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N8d877bbmwindividualsonnestein {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A1998cBmwIndividualSonnensteinMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3b73es {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm5b47es {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfyzogcb9vm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionndkwmxt3q0p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0174sspc0004tspc0015 {
  paintSwatch: PaintSwatch87
  mapped: Mapped86
}

export interface PaintSwatch87 {
  primary: Primary87
  secondary: Secondary22
  tertiary: Tertiary3
}

export interface Primary87 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary22 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Tertiary3 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped86 {
  b81: B81
}

export interface B81 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0176 {
  paintSwatch: PaintSwatch88
  mapped: Mapped87
}

export interface PaintSwatch88 {
  primary: Primary88
}

export interface Primary88 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped87 {
  "114307": N114307
  c2p: C2p
}

export interface N114307 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0180 {
  paintSwatch: PaintSwatch89
  mapped: Mapped88
}

export interface PaintSwatch89 {
  primary: Primary89
}

export interface Primary89 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped88 {
  p0c16: P0c16
}

export interface P0c16 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0185 {
  paintSwatch: PaintSwatch90
  mapped: Mapped89
}

export interface PaintSwatch90 {
  primary: Primary90
}

export interface Primary90 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped89 {
  "49375": N49375
  "71509": N71509
  "84377": N84377
  "84933": N84933
  "120897": N120897
  "129106": N129106
  "130385": N130385
  "166309": N166309
  "28610026": N28610026
  "30412415": N30412415
  "30641274": N30641274
  "30641415": N30641415
  "30655623": N30655623
  "30655627": N30655627
  "31135288": N31135288
  "31199393": N31199393
  "31266594": N31266594
  "32275060": N32275060
  "32276846": N32276846
  "32278582": N32278582
  "32279002": N32279002
  "32279386": N32279386
  "32723292": N32723292
  "011b4e-marina-bay-blau": N011b4eMarinaBayBlau
  "0185": N0185
  "0f1727-imperialblau-brillianteffekt": N0f1727ImperialblauBrillianteffekt
  "191e2a-imperialblau-brillianteffekt": N191e2aImperialblauBrillianteffekt
  "1c2e70-m-marina-bay-blau-metallic": N1c2e70MMarinaBayBlauMetallic
  "bmm-4e434mbb": Bmm4e434mbb
  "bmm-64635mbb": Bmm64635mbb
  "bmm-925ddmpb": Bmm925ddmpb
  "bmm-a6fbbmbb": BmmA6fbbmbb
  "bmm-f3385ib": BmmF3385ib
  c1k: C1k
  c1w: C1w
  c31: C31
  customoption824prj3s864: Customoption824prj3s864
  customoptionbsldj873cwm: Customoptionbsldj873cwm
  customoptiondw3tzhu9gl8: Customoptiondw3tzhu9gl8
  customoptionek2z3vda7lkk: Customoptionek2z3vda7lkk
  customoptionezgi0ycj99i: Customoptionezgi0ycj99i
  customoptionmdkar2psl5m: Customoptionmdkar2psl5m
  customoptionyo2oz08ifvo: Customoptionyo2oz08ifvo
  p0a89: P0a89
  p0c1k: P0c1k
  p0c1w: P0c1w
  p0c31: P0c31
  p0cx1e: P0cx1e
  pn4jh: Pn4jh
  x1e: X1e
}

export interface N49375 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N71509 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N84377 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N84933 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N120897 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N129106 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N130385 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N166309 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28610026 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30412415 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641274 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30641415 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655623 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30655627 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31135288 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199393 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266594 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32275060 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32276846 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278582 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32279002 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32279386 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32723292 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N011b4eMarinaBayBlau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0185 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N0f1727ImperialblauBrillianteffekt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N191e2aImperialblauBrillianteffekt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N1c2e70MMarinaBayBlauMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4e434mbb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm64635mbb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm925ddmpb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA6fbbmbb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF3385ib {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1w {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface C31 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption824prj3s864 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionbsldj873cwm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondw3tzhu9gl8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionek2z3vda7lkk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionezgi0ycj99i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmdkar2psl5m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionyo2oz08ifvo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a89 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1w {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c31 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0cx1e {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface Pn4jh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X1e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0185sspc0002 {
  paintSwatch: PaintSwatch91
  mapped: Mapped90
}

export interface PaintSwatch91 {
  primary: Primary91
  secondary: Secondary23
}

export interface Primary91 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary23 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped90 {
  "0b111d-imperialblau-avec-accent-frozen-grey-metallic": N0b111dImperialblauAvecAccentFrozenGreyMetallic
}

export interface N0b111dImperialblauAvecAccentFrozenGreyMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0194 {
  paintSwatch: PaintSwatch92
  mapped: Mapped91
}

export interface PaintSwatch92 {
  primary: Primary92
}

export interface Primary92 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped91 {
  "106109": N106109
  "110292": N110292
  "119774": N119774
  "5f5740-sparkling-storm-brillianteffekt": N5f5740SparklingStormBrillianteffekt
  p0c07: P0c07
}

export interface N106109 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N110292 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N119774 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5f5740SparklingStormBrillianteffekt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c07 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0196 {
  paintSwatch: PaintSwatch93
  mapped: Mapped92
}

export interface PaintSwatch93 {
  primary: Primary93
}

export interface Primary93 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped92 {
  "26252": N26252
  met2: Met2
}

export interface N26252 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Met2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0197 {
  paintSwatch: PaintSwatch94
  mapped: Mapped93
}

export interface PaintSwatch94 {
  primary: Primary94
}

export interface Primary94 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped93 {
  "60541": N60541
  "61006": N61006
  "73100": N73100
  "84932": N84932
  "88490": N88490
  "94684": N94684
  "101834": N101834
  "105411": N105411
  "110344": N110344
  "135880": N135880
  "27685863": N27685863
  "27685947": N27685947
  "29740267": N29740267
  "30652931": N30652931
  "30776769": N30776769
  "30776783": N30776783
  "30798791": N30798791
  "32283264": N32283264
  "32558393": N32558393
  "32612872": N32612872
  "32777210": N32777210
  "1e2126-arktikgrau-brillanteffekt-metallic": N1e2126ArktikgrauBrillanteffektMetallic
  "3d3f42-sophistograu-brillianteffekt-metallise": N3d3f42SophistograuBrillianteffektMetallise
  "404040-sophistograu-brillianteffekt-metallic": N404040SophistograuBrillianteffektMetallic
  a68: A68
  a90: A90
  b90: B90
  "bmm-09c84sg": Bmm09c84sg
  "bmm-de5absg": BmmDe5absg
  c22: C22
  c2c2: C2c2
  ce3: Ce3
  customoption0qksncqowr1h: Customoption0qksncqowr1h
  customoption1xhzu3zybpw: Customoption1xhzu3zybpw
  customoption2wo9c1ssfpn: Customoption2wo9c1ssfpn
  customoption32: Customoption32
  customoption33: Customoption33
  customoption3kb152v3mrw: Customoption3kb152v3mrw
  customoption4e67tari37s: Customoption4e67tari37s
  customoption5h73aqukb6: Customoption5h73aqukb6
  customoption6viejom96en: Customoption6viejom96en
  customoptionc83jtugzp: Customoptionc83jtugzp
  customoptionfkc9k07ieot: Customoptionfkc9k07ieot
  customoptionha4n13i6xks: Customoptionha4n13i6xks
  customoptionioieqi2ome: Customoptionioieqi2ome
  customoptionixf1zo1c26h: Customoptionixf1zo1c26h
  customoptionjdwzqhix9if: Customoptionjdwzqhix9if
  customoptionkmsikqvtoxlt: Customoptionkmsikqvtoxlt
  customoptiono5xb88tied9: Customoptiono5xb88tied9
  customoptionr7v15u64qh: Customoptionr7v15u64qh
  customoptionsarmfiqn4gh: Customoptionsarmfiqn4gh
  customoptionsrhsnshavjf: Customoptionsrhsnshavjf
  customoptiontp5wkd0c01: Customoptiontp5wkd0c01
  customoptionu7tjdpvdz3: Customoptionu7tjdpvdz3
  customoptionujqrlu42kn: Customoptionujqrlu42kn
  customoptionw76ejdue81: Customoptionw76ejdue81
  graypluskalisto: Graypluskalisto
  p0a90: P0a90
  p0c22: P0c22
  p0c27: P0c27
}

export interface N60541 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N61006 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73100 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N84932 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N88490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N94684 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N101834 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N105411 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N110344 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135880 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685863 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N27685947 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29740267 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652931 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776769 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30776783 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30798791 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32283264 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32558393 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32612872 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32777210 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N1e2126ArktikgrauBrillanteffektMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3d3f42SophistograuBrillianteffektMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N404040SophistograuBrillianteffektMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A68 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A90 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B90 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm09c84sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmDe5absg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C22 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C2c2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Ce3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0qksncqowr1h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption1xhzu3zybpw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2wo9c1ssfpn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption32 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption33 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption3kb152v3mrw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption4e67tari37s {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption5h73aqukb6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6viejom96en {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionc83jtugzp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionfkc9k07ieot {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionha4n13i6xks {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionioieqi2ome {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionixf1zo1c26h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjdwzqhix9if {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionkmsikqvtoxlt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiono5xb88tied9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionr7v15u64qh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsarmfiqn4gh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionsrhsnshavjf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontp5wkd0c01 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionu7tjdpvdz3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionujqrlu42kn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionw76ejdue81 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Graypluskalisto {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a90 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c22 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c27 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0197sspc0014 {
  paintSwatch: PaintSwatch95
  mapped: Mapped94
}

export interface PaintSwatch95 {
  primary: Primary95
  secondary: Secondary24
}

export interface Primary95 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary24 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped94 {
  c23: C23
}

export interface C23 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0197sspc0015 {
  paintSwatch: PaintSwatch96
  mapped: Mapped95
}

export interface PaintSwatch96 {
  primary: Primary96
  secondary: Secondary25
}

export interface Primary96 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary25 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped95 {
  p0c23: P0c23
}

export interface P0c23 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0197sspc0026 {
  paintSwatch: PaintSwatch97
  mapped: Mapped96
}

export interface PaintSwatch97 {
  primary: Primary97
  secondary: Secondary26
}

export interface Primary97 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary26 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped96 {
  "105410": N105410
}

export interface N105410 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0198 {
  paintSwatch: PaintSwatch98
  mapped: Mapped97
}

export interface PaintSwatch98 {
  primary: Primary98
}

export interface Primary98 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped97 {
  "161549": N161549
  "30806383": N30806383
  "30806846": N30806846
  "30814909": N30814909
  "30823716": N30823716
  "31196236": N31196236
  "31199338": N31199338
  "31266590": N31266590
  "31983317": N31983317
  "32290362": N32290362
  "32290429": N32290429
  "32290584": N32290584
  "32290602": N32290602
  "32290619": N32290619
  "32290915": N32290915
  "32290936": N32290936
  "32292941": N32292941
  "32375797": N32375797
  "32544076": N32544076
  "32546642": N32546642
  "32548204": N32548204
  "32850475": N32850475
  "2163207088": N2163207088
  "4f5454-skyscraper-grau": N4f5454SkyscraperGrau
  "bmm-1aee6dg": Bmm1aee6dg
  "bmm-20037dg": Bmm20037dg
  "bmm-2f76csg": Bmm2f76csg
  "bmm-6995dsg": Bmm6995dsg
  "bmm-75eb1sg": Bmm75eb1sg
  "bmm-8de69sg": Bmm8de69sg
  "bmm-98976sg": Bmm98976sg
  "bmm-bbaafsgm": BmmBbaafsgm
  "bmm-de3c0sg": BmmDe3c0sg
  "bmm-e1e27sg": BmmE1e27sg
  "bmm-e627ddg": BmmE627ddg
  "bmsp-1dec1dg": Bmsp1dec1dg
  "bmsp-9f135dg": Bmsp9f135dg
  "bmsp-c3762dg": BmspC3762dg
  customoption6bds8268p9k: Customoption6bds8268p9k
  customoption9w73io1hkik: Customoption9w73io1hkik
  customoptionokzf3sm3vtl: Customoptionokzf3sm3vtl
  customoptionq5qkkwd032h: Customoptionq5qkkwd032h
  customoptionysixa5rnjcn: Customoptionysixa5rnjcn
}

export interface N161549 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806383 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806846 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30814909 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823716 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31196236 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31199338 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31266590 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31983317 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290362 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290429 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290584 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290602 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290619 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290915 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290936 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32292941 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32375797 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32544076 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32546642 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548204 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850475 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2163207088 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N4f5454SkyscraperGrau {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm1aee6dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm20037dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm2f76csg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm6995dsg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm75eb1sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm8de69sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm98976sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBbaafsgm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmDe3c0sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmE1e27sg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmE627ddg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp1dec1dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp9f135dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspC3762dg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption6bds8268p9k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9w73io1hkik {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionokzf3sm3vtl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionq5qkkwd032h {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionysixa5rnjcn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0198sspc0064 {
  paintSwatch: PaintSwatch99
  mapped: Mapped98
}

export interface PaintSwatch99 {
  primary: Primary99
  secondary: Secondary27
}

export interface Primary99 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary27 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped98 {
  p0wc36: P0wc36
}

export interface P0wc36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0199 {
  paintSwatch: PaintSwatch100
  mapped: Mapped99
}

export interface PaintSwatch100 {
  primary: Primary100
}

export interface Primary100 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped99 {
  "141671": N141671
  "155031": N155031
  "161561": N161561
  "524f3e-manhattan-metallic": N524f3eManhattanMetallic
  "bmm-82a41mm": Bmm82a41mm
  customoptionauwmcl7uumn: Customoptionauwmcl7uumn
  h1h1: H1h1
  p0c3d: P0c3d
}

export interface N141671 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N155031 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N161561 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N524f3eManhattanMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm82a41mm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionauwmcl7uumn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface H1h1 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0209 {
  paintSwatch: PaintSwatch101
  mapped: Mapped100
}

export interface PaintSwatch101 {
  primary: Primary101
}

export interface Primary101 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped100 {
  "416": N416
  "12695": N12695
  "17975": N17975
  "77873": N77873
  "26365733": N26365733
  "28610085": N28610085
  "29740265": N29740265
  "30647289": N30647289
  "30647735": N30647735
  "30649521": N30649521
  "30650905": N30650905
  "30652171": N30652171
  "30802062": N30802062
  "32558391": N32558391
  "1b1f2b-carbonschwarz": N1b1f2bCarbonschwarz
  b79: B79
  "bmm-3cd58cb": Bmm3cd58cb
  "bmm-4297csg": Bmm4297csg
  "bmm-5c2f5cb": Bmm5c2f5cb
  "bmm-74572cb": Bmm74572cb
  "bmm-98d71cb": Bmm98d71cb
  "bmm-atr1-cb": BmmAtr1Cb
  "bmm-b40b1cb": BmmB40b1cb
  "bmm-e61f4cb": BmmE61f4cb
  "bmm-fe2a5cb": BmmFe2a5cb
  customoption241lhcojbxj: Customoption241lhcojbxj
  customoption2debez6q73l: Customoption2debez6q73l
  customoption49: Customoption49
  customoption7ad7ife4mjy: Customoption7ad7ife4mjy
  customoptiondhhp5o51tad: Customoptiondhhp5o51tad
  customoptionl5etab5r8p: Customoptionl5etab5r8p
  customoptionlf6tkmengc: Customoptionlf6tkmengc
  customoptionmvk3fry83cn: Customoptionmvk3fry83cn
  customoptionnprt3kdjp3: Customoptionnprt3kdjp3
  customoptiontc70v4n4lbf: Customoptiontc70v4n4lbf
  customoptiontw5p0ppmrwm: Customoptiontw5p0ppmrwm
  customoptionty041n761j: Customoptionty041n761j
  customoptionvkoiju56t9k: Customoptionvkoiju56t9k
  customoptionz4xvg1mplgl: Customoptionz4xvg1mplgl
  m416: M416
  p0416: P0416
}

export interface N416 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N12695 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N17975 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N77873 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N26365733 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28610085 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N29740265 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647289 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30647735 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649521 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30650905 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30652171 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30802062 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32558391 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N1b1f2bCarbonschwarz {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B79 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3cd58cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm4297csg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm5c2f5cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm74572cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm98d71cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAtr1Cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB40b1cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmE61f4cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmFe2a5cb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption241lhcojbxj {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption2debez6q73l {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption49 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ad7ife4mjy {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiondhhp5o51tad {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionl5etab5r8p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionlf6tkmengc {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionmvk3fry83cn {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionnprt3kdjp3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontc70v4n4lbf {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiontw5p0ppmrwm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionty041n761j {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvkoiju56t9k {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionz4xvg1mplgl {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface M416 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0416 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0209sspc0180 {
  paintSwatch: PaintSwatch102
  mapped: Mapped101
}

export interface PaintSwatch102 {
  primary: Primary102
  secondary: Secondary28
}

export interface Primary102 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary28 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped101 {
  b74: B74
}

export interface B74 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0219 {
  paintSwatch: PaintSwatch103
  mapped: Mapped102
}

export interface PaintSwatch103 {
  primary: Primary103
}

export interface Primary103 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped102 {
  "104299": N104299
  p0b67: P0b67
}

export interface N104299 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0b67 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0221 {
  paintSwatch: PaintSwatch104
  mapped: Mapped103
}

export interface PaintSwatch104 {
  primary: Primary104
}

export interface Primary104 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped103 {
  "134872": N134872
  "3f4f4f-blue-ridge-mountain": N3f4f4fBlueRidgeMountain
  a43: A43
  "bmm-b54efbrm": BmmB54efbrm
  "bmm-c0d25brm": BmmC0d25brm
  "bmm-fd2a9brm": BmmFd2a9brm
  c35: C35
  c36: C36
  customoption0jcx39xwnnt8: Customoption0jcx39xwnnt8
  customoption7ky15g1i3ap: Customoption7ky15g1i3ap
  customoption8uy2nctfi0q: Customoption8uy2nctfi0q
  customoptiongosqzgjtxxv: Customoptiongosqzgjtxxv
  customoptiongzyyjaw89q: Customoptiongzyyjaw89q
  customoptionrqj9rkewt3: Customoptionrqj9rkewt3
  customoptionvrz36iohoqe: Customoptionvrz36iohoqe
  p0c35: P0c35
}

export interface N134872 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N3f4f4fBlueRidgeMountain {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A43 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB54efbrm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmC0d25brm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmFd2a9brm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C35 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C36 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0jcx39xwnnt8 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7ky15g1i3ap {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8uy2nctfi0q {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongosqzgjtxxv {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiongzyyjaw89q {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionrqj9rkewt3 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionvrz36iohoqe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c35 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0221sspc0026 {
  paintSwatch: PaintSwatch105
  mapped: Mapped104
}

export interface PaintSwatch105 {
  secondary: Secondary29
  primary: Primary105
}

export interface Secondary29 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary105 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped104 {
  "152594": N152594
  "30578003": N30578003
  c4z: C4z
  p0c4z: P0c4z
}

export interface N152594 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30578003 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C4z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c4z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0223 {
  paintSwatch: PaintSwatch106
  mapped: Mapped105
}

export interface PaintSwatch106 {
  primary: Primary106
}

export interface Primary106 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped105 {
  "178620": N178620
  "30806388": N30806388
  "31174085": N31174085
  "31174105": N31174105
  "32290359": N32290359
  "32290473": N32290473
  "32290582": N32290582
  "32290745": N32290745
  "32290914": N32290914
  "bmm-02cbfbg": Bmm02cbfbg
  "bmm-3c0f5bg": Bmm3c0f5bg
  "bmm-78de2bg": Bmm78de2bg
  "bmm-b2ac2bg": BmmB2ac2bg
  "bmm-cbb05bg": BmmCbb05bg
  customoptionf5g6xhlpeqa: Customoptionf5g6xhlpeqa
  customoptioni7rtrk9cjxe: Customoptioni7rtrk9cjxe
  customoptionucjkltjhth: Customoptionucjkltjhth
}

export interface N178620 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30806388 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174085 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31174105 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290359 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290473 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290582 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290745 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32290914 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm02cbfbg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3c0f5bg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm78de2bg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmB2ac2bg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmCbb05bg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionf5g6xhlpeqa {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioni7rtrk9cjxe {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionucjkltjhth {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0230 {
  paintSwatch: PaintSwatch107
  mapped: Mapped106
}

export interface PaintSwatch107 {
  primary: Primary107
}

export interface Primary107 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped106 {
  "88361": N88361
  "102646": N102646
  "135134": N135134
  c1z: C1z
  c29: C29
  x14: X14
}

export interface N88361 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N102646 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135134 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1z {
  paintDescription: string
  nativePaintDescriptions: any[]
}

export interface C29 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X14 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0234 {
  paintSwatch: PaintSwatch108
  mapped: Mapped107
}

export interface PaintSwatch108 {
  primary: Primary108
}

export interface Primary108 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped107 {
  "119761": N119761
  c1m: C1m
  p0c1m: P0c1m
  p0c47: P0c47
  pc1m: Pc1m
  s34: S34
}

export interface N119761 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c47 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pc1m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface S34 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0237 {
  paintSwatch: PaintSwatch109
  mapped: Mapped108
}

export interface PaintSwatch109 {
  primary: Primary109
}

export interface Primary109 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped108 {
  "14752": N14752
  "57741": N57741
  "73773": N73773
  "95701": N95701
  "129107": N129107
  "151907": N151907
  "178674": N178674
  "30052522": N30052522
  "30649898": N30649898
  "30815214": N30815214
  "32548224": N32548224
  "933322-sunset-orange": N933322SunsetOrange
  "963513-sunset-orange-metallise": N963513SunsetOrangeMetallise
  b44: B44
  "bmm-014caso": Bmm014caso
  "bmm-1ca13so": Bmm1ca13so
  "bmm-37716uo": Bmm37716uo
  "bmm-395b3so": Bmm395b3so
  "bmm-3fb23so": Bmm3fb23so
  "bmm-7fb3auo": Bmm7fb3auo
  "bmm-ab37eso": BmmAb37eso
  c1x: C1x
  customoption0yhvyefwko1: Customoption0yhvyefwko1
  p0c1x: P0c1x
  p0c1z: P0c1z
  p0wc1x: P0wc1x
}

export interface N14752 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N57741 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73773 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N95701 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N129107 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N151907 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N178674 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30052522 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30649898 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30815214 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32548224 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N933322SunsetOrange {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N963513SunsetOrangeMetallise {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B44 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm014caso {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm1ca13so {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm37716uo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm395b3so {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3fb23so {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm7fb3auo {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmAb37eso {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C1x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption0yhvyefwko1 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c1z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0wc1x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0240 {
  paintSwatch: PaintSwatch110
  mapped: Mapped109
}

export interface PaintSwatch110 {
  primary: Primary110
}

export interface Primary110 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped109 {
  "176809": N176809
}

export interface N176809 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0247 {
  paintSwatch: PaintSwatch111
  mapped: Mapped110
}

export interface PaintSwatch111 {
  primary: Primary111
}

export interface Primary111 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped110 {
  "127110": N127110
}

export interface N127110 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0248 {
  paintSwatch: PaintSwatch112
  mapped: Mapped111
}

export interface PaintSwatch112 {
  primary: Primary112
}

export interface Primary112 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped111 {
  customoption52kzl26udnk: Customoption52kzl26udnk
  customoption81boakv1c1n: Customoption81boakv1c1n
  customoptiond12pzzvoirt: Customoptiond12pzzvoirt
  p0p6m: P0p6m
}

export interface Customoption52kzl26udnk {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption81boakv1c1n {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiond12pzzvoirt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p6m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0249 {
  paintSwatch: PaintSwatch113
  mapped: Mapped112
}

export interface PaintSwatch113 {
  primary: Primary113
}

export interface Primary113 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped112 {
  "155170": N155170
}

export interface N155170 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0252 {
  paintSwatch: PaintSwatch114
  mapped: Mapped113
}

export interface PaintSwatch114 {
  primary: Primary114
}

export interface Primary114 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped113 {
  "78073": N78073
  "135133": N135133
  "135828": N135828
  "139781": N139781
  "145039": N145039
  "800f01-toronto-rot-metallic": N800f01TorontoRotMetallic
  "bmm-bmac-rb": BmmBmacRb
  "bmsp-rg-rbbip": BmspRgRbbip
  c3g: C3g
  p0c3g: P0c3g
}

export interface N78073 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135133 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N135828 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N139781 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N145039 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N800f01TorontoRotMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmBmacRb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspRgRbbip {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C3g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c3g {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0256 {
  paintSwatch: PaintSwatch115
  mapped: Mapped114
}

export interface PaintSwatch115 {
  primary: Primary115
}

export interface Primary115 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped114 {
  "30645510": N30645510
  "32278963": N32278963
}

export interface N30645510 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32278963 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0259 {
  paintSwatch: PaintSwatch116
  mapped: Mapped115
}

export interface PaintSwatch116 {
  primary: Primary116
}

export interface Primary116 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped115 {
  "97655": N97655
  "157636": N157636
  "73d": N73d
  "bmm-619defbw": Bmm619defbw
  jatop0490b: Jatop0490b
}

export interface N97655 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N157636 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N73d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm619defbw {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jatop0490b {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0259sspc0026 {
  paintSwatch: PaintSwatch117
  mapped: Mapped116
}

export interface PaintSwatch117 {
  primary: Primary117
  secondary: Secondary30
}

export interface Primary117 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary30 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped116 {
  b96: B96
}

export interface B96 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0268 {
  paintSwatch: PaintSwatch118
  mapped: Mapped117
}

export interface PaintSwatch118 {
  primary: Primary118
}

export interface Primary118 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped117 {
  "32305577": N32305577
  "32707627": N32707627
  "bmm-0bf86cyg": Bmm0bf86cyg
}

export interface N32305577 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707627 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm0bf86cyg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0271 {
  paintSwatch: PaintSwatch119
  mapped: Mapped118
}

export interface PaintSwatch119 {
  primary: Primary119
}

export interface Primary119 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped118 {
  "114823": N114823
  a35: A35
}

export interface N114823 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A35 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0275 {
  paintSwatch: PaintSwatch120
  mapped: Mapped119
}

export interface PaintSwatch120 {
  primary: Primary120
}

export interface Primary120 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped119 {
  "101835": N101835
  "101901": N101901
  "28934222": N28934222
  "30049881": N30049881
  "301d0f-sparkling-brown-metallic": N301d0fSparklingBrownMetallic
  b53: B53
  c07: C07
  p0p6a: P0p6a
  pa004: Pa004
}

export interface N101835 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N101901 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N28934222 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30049881 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N301d0fSparklingBrownMetallic {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B53 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface C07 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p6a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa004 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0277 {
  paintSwatch: PaintSwatch121
  mapped: Mapped120
}

export interface PaintSwatch121 {
  primary: Primary121
}

export interface Primary121 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped120 {
  "17369": N17369
  "43708": N43708
  "63582": N63582
  "86368": N86368
  "86736": N86736
  a14: A14
  a84: A84
  a92: A92
  p0c67: P0c67
}

export interface N17369 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N43708 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N63582 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N86368 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N86736 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A14 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A84 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface A92 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c67 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0288 {
  paintSwatch: PaintSwatch122
  mapped: Mapped121
}

export interface PaintSwatch122 {
  primary: Primary122
}

export interface Primary122 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped121 {
  "490d": N490d
  "490e": N490e
  "90e": N90e
  jato490: Jato490
  p0490e: P0490e
  p0p13: P0p13
  p0p6x: P0p6x
}

export interface N490d {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N90e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Jato490 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0490e {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p13 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p6x {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0291 {
  paintSwatch: PaintSwatch123
  mapped: Mapped122
}

export interface PaintSwatch123 {
  primary: Primary123
}

export interface Primary123 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped122 {
  "59372": N59372
  "59374": N59374
  "30646121": N30646121
}

export interface N59372 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N59374 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30646121 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0297 {
  paintSwatch: PaintSwatch124
  mapped: Mapped123
}

export interface PaintSwatch124 {
  primary: Primary124
}

export interface Primary124 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped123 {
  "bmm-7cb3afdg": Bmm7cb3afdg
}

export interface Bmm7cb3afdg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0319 {
  paintSwatch: PaintSwatch125
  mapped: Mapped124
}

export interface PaintSwatch125 {
  primary: Primary125
}

export interface Primary125 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped124 {
  b09: B09
}

export interface B09 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0323 {
  paintSwatch: PaintSwatch126
  mapped: Mapped125
}

export interface PaintSwatch126 {
  primary: Primary126
}

export interface Primary126 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped125 {
  "268": N268
  "5040": N5040
  "2y": N2y
  m6n9: M6n9
  t9t9: T9t9
}

export interface N268 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N5040 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N2y {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface M6n9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface T9t9 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0334 {
  paintSwatch: PaintSwatch127
  mapped: Mapped126
}

export interface PaintSwatch127 {
  primary: Primary127
}

export interface Primary127 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped126 {
  "30823846": N30823846
}

export interface N30823846 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0335 {
  paintSwatch: PaintSwatch128
  mapped: Mapped127
}

export interface PaintSwatch128 {
  primary: Primary128
}

export interface Primary128 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped127 {
  "179491": N179491
  p0s03: P0s03
}

export interface N179491 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0s03 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0336 {
  paintSwatch: PaintSwatch129
  mapped: Mapped128
}

export interface PaintSwatch129 {
  primary: Primary129
}

export interface Primary129 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped128 {
  "2163235472": N2163235472
  customoption45t8xmoh144: Customoption45t8xmoh144
  customoption7004drc9sw2: Customoption7004drc9sw2
  customoption8yb2j51e8eh: Customoption8yb2j51e8eh
  customoption8ziab2pgy0t: Customoption8ziab2pgy0t
  customoption9z0z8cpgw3p: Customoption9z0z8cpgw3p
  customoptiond1kuqwi1smt: Customoptiond1kuqwi1smt
  customoptioneajm5md2c3m: Customoptioneajm5md2c3m
  customoptionehsk13lgvh: Customoptionehsk13lgvh
  customoptionii4mqy2cnp: Customoptionii4mqy2cnp
  customoptionjawlsafa90i: Customoptionjawlsafa90i
  p0a86: P0a86
}

export interface N2163235472 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption45t8xmoh144 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption7004drc9sw2 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8yb2j51e8eh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption8ziab2pgy0t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoption9z0z8cpgw3p {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptiond1kuqwi1smt {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptioneajm5md2c3m {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionehsk13lgvh {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionii4mqy2cnp {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Customoptionjawlsafa90i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0a86 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0343 {
  paintSwatch: PaintSwatch130
  mapped: Mapped129
}

export interface PaintSwatch130 {
  primary: Primary130
}

export interface Primary130 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped129 {
  "133855": N133855
  "157635": N157635
  "1dfc27869d8132db4e081158854a3cc6": N1dfc27869d8132db4e081158854a3cc6
  "bmm-30e4cfoi": Bmm30e4cfoi
  p0p7z: P0p7z
}

export interface N133855 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N157635 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N1dfc27869d8132db4e081158854a3cc6 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm30e4cfoi {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0p7z {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0352 {
  paintSwatch: PaintSwatch131
  mapped: Mapped130
}

export interface PaintSwatch131 {
  primary: Primary131
}

export interface Primary131 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped130 {
  "17554": N17554
  "167379": N167379
  "bmm-d77f3tm": BmmD77f3tm
}

export interface N17554 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N167379 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmD77f3tm {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0356 {
  paintSwatch: PaintSwatch132
  mapped: Mapped131
}

export interface PaintSwatch132 {
  primary: Primary132
}

export interface Primary132 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped131 {
  b65: B65
}

export interface B65 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0356sspc0064 {
  paintSwatch: PaintSwatch133
  mapped: Mapped132
}

export interface PaintSwatch133 {
  secondary: Secondary31
  primary: Primary133
}

export interface Secondary31 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Primary133 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped132 {
  "130384": N130384
}

export interface N130384 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0358 {
  paintSwatch: PaintSwatch134
  mapped: Mapped133
}

export interface PaintSwatch134 {
  primary: Primary134
}

export interface Primary134 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped133 {
  "122710": N122710
}

export interface N122710 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0362 {
  paintSwatch: PaintSwatch135
  mapped: Mapped134
}

export interface PaintSwatch135 {
  primary: Primary135
}

export interface Primary135 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped134 {
  "490t": N490t
  p0x03: P0x03
  x03: X03
}

export interface N490t {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0x03 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface X03 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0363 {
  paintSwatch: PaintSwatch136
  mapped: Mapped135
}

export interface PaintSwatch136 {
  primary: Primary136
}

export interface Primary136 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped135 {
  "atlantic-grey": AtlanticGrey
}

export interface AtlanticGrey {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0367 {
  paintSwatch: PaintSwatch137
  mapped: Mapped136
}

export interface PaintSwatch137 {
  primary: Primary137
}

export interface Primary137 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped136 {
  "6740": N6740
  b38: B38
}

export interface N6740 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface B38 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0368sspc0064tspc0067 {
  paintSwatch: PaintSwatch138
  mapped: Mapped137
}

export interface PaintSwatch138 {
  primary: Primary138
  secondary: Secondary32
  tertiary: Tertiary4
}

export interface Primary138 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary32 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Tertiary4 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped137 {
  "157331": N157331
}

export interface N157331 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0370 {
  paintSwatch: PaintSwatch139
  mapped: Mapped138
}

export interface PaintSwatch139 {
  primary: Primary139
}

export interface Primary139 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped138 {
  "105456": N105456
}

export interface N105456 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0373 {
  paintSwatch: PaintSwatch140
  mapped: Mapped139
}

export interface PaintSwatch140 {
  primary: Primary140
}

export interface Primary140 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped139 {
  "108775": N108775
  "167571": N167571
  "30823930": N30823930
  "490i": N490i
  "bmm-f51a4fb": BmmF51a4fb
  p0u91: P0u91
  pa02: Pa02
}

export interface N108775 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N167571 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N30823930 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N490i {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmF51a4fb {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0u91 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pa02 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0373sspc0119 {
  paintSwatch: PaintSwatch141
  mapped: Mapped140
}

export interface PaintSwatch141 {
  primary: Primary141
  secondary: Secondary33
}

export interface Primary141 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Secondary33 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped140 {
  "118210": N118210
}

export interface N118210 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0374 {
  paintSwatch: PaintSwatch142
  mapped: Mapped141
}

export interface PaintSwatch142 {
  primary: Primary142
}

export interface Primary142 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped141 {
  "174598": N174598
  "174776": N174776
  "178314": N178314
  "31922005": N31922005
  "32546019": N32546019
  "32707632": N32707632
  "32717057": N32717057
  "32850890": N32850890
  "bmm-3f902bifpg": Bmm3f902bifpg
  "bmm-a6bdbfpg": BmmA6bdbfpg
  "bmsp-060f7fpg": Bmsp060f7fpg
  "bmsp-967f3fpg": Bmsp967f3fpg
  "bmsp-e952ffpg": BmspE952ffpg
  p0c5a: P0c5a
}

export interface N174598 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N174776 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N178314 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N31922005 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32546019 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32707632 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32717057 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface N32850890 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmm3f902bifpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmmA6bdbfpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp060f7fpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Bmsp967f3fpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface BmspE952ffpg {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface P0c5a {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0377 {
  paintSwatch: PaintSwatch143
  mapped: Mapped142
}

export interface PaintSwatch143 {
  primary: Primary143
}

export interface Primary143 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped142 {
  "161832": N161832
}

export interface N161832 {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0378 {
  paintSwatch: PaintSwatch144
  mapped: Mapped143
}

export interface PaintSwatch144 {
  primary: Primary144
}

export interface Primary144 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped143 {
  customoption8pbjtgglmza: Customoption8pbjtgglmza
}

export interface Customoption8pbjtgglmza {
  paintDescription: string
  nativePaintDescriptions: string[]
}

export interface Pspc0387 {
  paintSwatch: PaintSwatch145
  mapped: Mapped144
}

export interface PaintSwatch145 {
  primary: Primary145
}

export interface Primary145 {
  lowLight: string
  midLight: any
  highLight: string
  colourCluster: string
  paintType: string
}

export interface Mapped144 {
  a53: A53
}

export interface A53 {
  paintDescription: string
  nativePaintDescriptions: string[]
}
  
  export interface N30052522 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30649898 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30815214 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32548224 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N933322SunsetOrange {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N963513SunsetOrangeMetallise {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B44 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm014caso {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm1ca13so {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm37716uo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm395b3so {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3fb23so {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm7fb3auo {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmAb37eso {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C1x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption0yhvyefwko1 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c1z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0wc1x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0240 {
    paintSwatch: PaintSwatch110
    mapped: Mapped109
  }
  
  export interface PaintSwatch110 {
    primary: Primary110
  }
  
  export interface Primary110 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped109 {
    "176809": N176809
  }
  
  export interface N176809 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0247 {
    paintSwatch: PaintSwatch111
    mapped: Mapped110
  }
  
  export interface PaintSwatch111 {
    primary: Primary111
  }
  
  export interface Primary111 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped110 {
    "127110": N127110
  }
  
  export interface N127110 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0248 {
    paintSwatch: PaintSwatch112
    mapped: Mapped111
  }
  
  export interface PaintSwatch112 {
    primary: Primary112
  }
  
  export interface Primary112 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped111 {
    customoption52kzl26udnk: Customoption52kzl26udnk
    customoption81boakv1c1n: Customoption81boakv1c1n
    customoptiond12pzzvoirt: Customoptiond12pzzvoirt
    p0p6m: P0p6m
  }
  
  export interface Customoption52kzl26udnk {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption81boakv1c1n {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiond12pzzvoirt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p6m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0249 {
    paintSwatch: PaintSwatch113
    mapped: Mapped112
  }
  
  export interface PaintSwatch113 {
    primary: Primary113
  }
  
  export interface Primary113 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped112 {
    "155170": N155170
  }
  
  export interface N155170 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0252 {
    paintSwatch: PaintSwatch114
    mapped: Mapped113
  }
  
  export interface PaintSwatch114 {
    primary: Primary114
  }
  
  export interface Primary114 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped113 {
    "78073": N78073
    "135133": N135133
    "135828": N135828
    "139781": N139781
    "145039": N145039
    "800f01-toronto-rot-metallic": N800f01TorontoRotMetallic
    "bmm-bmac-rb": BmmBmacRb
    "bmsp-rg-rbbip": BmspRgRbbip
    c3g: C3g
    p0c3g: P0c3g
  }
  
  export interface N78073 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135133 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N135828 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N139781 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N145039 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N800f01TorontoRotMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmBmacRb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspRgRbbip {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C3g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c3g {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0256 {
    paintSwatch: PaintSwatch115
    mapped: Mapped114
  }
  
  export interface PaintSwatch115 {
    primary: Primary115
  }
  
  export interface Primary115 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped114 {
    "30645510": N30645510
    "32278963": N32278963
  }
  
  export interface N30645510 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32278963 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0259 {
    paintSwatch: PaintSwatch116
    mapped: Mapped115
  }
  
  export interface PaintSwatch116 {
    primary: Primary116
  }
  
  export interface Primary116 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped115 {
    "97655": N97655
    "157636": N157636
    "73d": N73d
    "bmm-619defbw": Bmm619defbw
    jatop0490b: Jatop0490b
  }
  
  export interface N97655 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N157636 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N73d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm619defbw {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jatop0490b {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0259sspc0026 {
    paintSwatch: PaintSwatch117
    mapped: Mapped116
  }
  
  export interface PaintSwatch117 {
    primary: Primary117
    secondary: Secondary30
  }
  
  export interface Primary117 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary30 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped116 {
    b96: B96
  }
  
  export interface B96 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0268 {
    paintSwatch: PaintSwatch118
    mapped: Mapped117
  }
  
  export interface PaintSwatch118 {
    primary: Primary118
  }
  
  export interface Primary118 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped117 {
    "32305577": N32305577
    "32707627": N32707627
    "bmm-0bf86cyg": Bmm0bf86cyg
  }
  
  export interface N32305577 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707627 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm0bf86cyg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0271 {
    paintSwatch: PaintSwatch119
    mapped: Mapped118
  }
  
  export interface PaintSwatch119 {
    primary: Primary119
  }
  
  export interface Primary119 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped118 {
    "114823": N114823
    a35: A35
  }
  
  export interface N114823 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A35 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0275 {
    paintSwatch: PaintSwatch120
    mapped: Mapped119
  }
  
  export interface PaintSwatch120 {
    primary: Primary120
  }
  
  export interface Primary120 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped119 {
    "101835": N101835
    "101901": N101901
    "28934222": N28934222
    "30049881": N30049881
    "301d0f-sparkling-brown-metallic": N301d0fSparklingBrownMetallic
    b53: B53
    c07: C07
    p0p6a: P0p6a
    pa004: Pa004
  }
  
  export interface N101835 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N101901 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N28934222 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30049881 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N301d0fSparklingBrownMetallic {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B53 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface C07 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p6a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa004 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0277 {
    paintSwatch: PaintSwatch121
    mapped: Mapped120
  }
  
  export interface PaintSwatch121 {
    primary: Primary121
  }
  
  export interface Primary121 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped120 {
    "17369": N17369
    "43708": N43708
    "63582": N63582
    "86368": N86368
    "86736": N86736
    a14: A14
    a84: A84
    a92: A92
    p0c67: P0c67
  }
  
  export interface N17369 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N43708 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N63582 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N86368 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N86736 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A14 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A84 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface A92 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c67 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0288 {
    paintSwatch: PaintSwatch122
    mapped: Mapped121
  }
  
  export interface PaintSwatch122 {
    primary: Primary122
  }
  
  export interface Primary122 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped121 {
    "490d": N490d
    "490e": N490e
    "90e": N90e
    jato490: Jato490
    p0490e: P0490e
    p0p13: P0p13
    p0p6x: P0p6x
  }
  
  export interface N490d {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N90e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Jato490 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0490e {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p13 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p6x {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0291 {
    paintSwatch: PaintSwatch123
    mapped: Mapped122
  }
  
  export interface PaintSwatch123 {
    primary: Primary123
  }
  
  export interface Primary123 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped122 {
    "59372": N59372
    "59374": N59374
    "30646121": N30646121
  }
  
  export interface N59372 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N59374 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30646121 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0297 {
    paintSwatch: PaintSwatch124
    mapped: Mapped123
  }
  
  export interface PaintSwatch124 {
    primary: Primary124
  }
  
  export interface Primary124 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped123 {
    "bmm-7cb3afdg": Bmm7cb3afdg
  }
  
  export interface Bmm7cb3afdg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0319 {
    paintSwatch: PaintSwatch125
    mapped: Mapped124
  }
  
  export interface PaintSwatch125 {
    primary: Primary125
  }
  
  export interface Primary125 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped124 {
    b09: B09
  }
  
  export interface B09 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0323 {
    paintSwatch: PaintSwatch126
    mapped: Mapped125
  }
  
  export interface PaintSwatch126 {
    primary: Primary126
  }
  
  export interface Primary126 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped125 {
    "268": N268
    "5040": N5040
    "2y": N2y
    m6n9: M6n9
    t9t9: T9t9
  }
  
  export interface N268 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N5040 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N2y {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface M6n9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface T9t9 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0334 {
    paintSwatch: PaintSwatch127
    mapped: Mapped126
  }
  
  export interface PaintSwatch127 {
    primary: Primary127
  }
  
  export interface Primary127 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped126 {
    "30823846": N30823846
  }
  
  export interface N30823846 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0335 {
    paintSwatch: PaintSwatch128
    mapped: Mapped127
  }
  
  export interface PaintSwatch128 {
    primary: Primary128
  }
  
  export interface Primary128 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped127 {
    "179491": N179491
    p0s03: P0s03
  }
  
  export interface N179491 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0s03 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0336 {
    paintSwatch: PaintSwatch129
    mapped: Mapped128
  }
  
  export interface PaintSwatch129 {
    primary: Primary129
  }
  
  export interface Primary129 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped128 {
    "2163235472": N2163235472
    customoption45t8xmoh144: Customoption45t8xmoh144
    customoption7004drc9sw2: Customoption7004drc9sw2
    customoption8yb2j51e8eh: Customoption8yb2j51e8eh
    customoption8ziab2pgy0t: Customoption8ziab2pgy0t
    customoption9z0z8cpgw3p: Customoption9z0z8cpgw3p
    customoptiond1kuqwi1smt: Customoptiond1kuqwi1smt
    customoptioneajm5md2c3m: Customoptioneajm5md2c3m
    customoptionehsk13lgvh: Customoptionehsk13lgvh
    customoptionii4mqy2cnp: Customoptionii4mqy2cnp
    customoptionjawlsafa90i: Customoptionjawlsafa90i
    p0a86: P0a86
  }
  
  export interface N2163235472 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption45t8xmoh144 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption7004drc9sw2 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8yb2j51e8eh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption8ziab2pgy0t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoption9z0z8cpgw3p {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptiond1kuqwi1smt {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptioneajm5md2c3m {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionehsk13lgvh {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionii4mqy2cnp {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Customoptionjawlsafa90i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0a86 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0343 {
    paintSwatch: PaintSwatch130
    mapped: Mapped129
  }
  
  export interface PaintSwatch130 {
    primary: Primary130
  }
  
  export interface Primary130 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped129 {
    "133855": N133855
    "157635": N157635
    "1dfc27869d8132db4e081158854a3cc6": N1dfc27869d8132db4e081158854a3cc6
    "bmm-30e4cfoi": Bmm30e4cfoi
    p0p7z: P0p7z
  }
  
  export interface N133855 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N157635 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N1dfc27869d8132db4e081158854a3cc6 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm30e4cfoi {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0p7z {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0352 {
    paintSwatch: PaintSwatch131
    mapped: Mapped130
  }
  
  export interface PaintSwatch131 {
    primary: Primary131
  }
  
  export interface Primary131 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped130 {
    "17554": N17554
    "167379": N167379
    "bmm-d77f3tm": BmmD77f3tm
  }
  
  export interface N17554 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N167379 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmD77f3tm {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0356 {
    paintSwatch: PaintSwatch132
    mapped: Mapped131
  }
  
  export interface PaintSwatch132 {
    primary: Primary132
  }
  
  export interface Primary132 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped131 {
    b65: B65
  }
  
  export interface B65 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0356sspc0064 {
    paintSwatch: PaintSwatch133
    mapped: Mapped132
  }
  
  export interface PaintSwatch133 {
    secondary: Secondary31
    primary: Primary133
  }
  
  export interface Secondary31 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Primary133 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped132 {
    "130384": N130384
  }
  
  export interface N130384 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0358 {
    paintSwatch: PaintSwatch134
    mapped: Mapped133
  }
  
  export interface PaintSwatch134 {
    primary: Primary134
  }
  
  export interface Primary134 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped133 {
    "122710": N122710
  }
  
  export interface N122710 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0362 {
    paintSwatch: PaintSwatch135
    mapped: Mapped134
  }
  
  export interface PaintSwatch135 {
    primary: Primary135
  }
  
  export interface Primary135 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped134 {
    "490t": N490t
    p0x03: P0x03
    x03: X03
  }
  
  export interface N490t {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0x03 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface X03 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0363 {
    paintSwatch: PaintSwatch136
    mapped: Mapped135
  }
  
  export interface PaintSwatch136 {
    primary: Primary136
  }
  
  export interface Primary136 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped135 {
    "atlantic-grey": AtlanticGrey
  }
  
  export interface AtlanticGrey {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0367 {
    paintSwatch: PaintSwatch137
    mapped: Mapped136
  }
  
  export interface PaintSwatch137 {
    primary: Primary137
  }
  
  export interface Primary137 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped136 {
    "6740": N6740
    b38: B38
  }
  
  export interface N6740 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface B38 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0368sspc0064tspc0067 {
    paintSwatch: PaintSwatch138
    mapped: Mapped137
  }
  
  export interface PaintSwatch138 {
    primary: Primary138
    secondary: Secondary32
    tertiary: Tertiary4
  }
  
  export interface Primary138 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary32 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Tertiary4 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped137 {
    "157331": N157331
  }
  
  export interface N157331 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0370 {
    paintSwatch: PaintSwatch139
    mapped: Mapped138
  }
  
  export interface PaintSwatch139 {
    primary: Primary139
  }
  
  export interface Primary139 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped138 {
    "105456": N105456
  }
  
  export interface N105456 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0373 {
    paintSwatch: PaintSwatch140
    mapped: Mapped139
  }
  
  export interface PaintSwatch140 {
    primary: Primary140
  }
  
  export interface Primary140 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped139 {
    "108775": N108775
    "167571": N167571
    "30823930": N30823930
    "490i": N490i
    "bmm-f51a4fb": BmmF51a4fb
    p0u91: P0u91
    pa02: Pa02
  }
  
  export interface N108775 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N167571 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N30823930 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N490i {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmF51a4fb {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0u91 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pa02 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0373sspc0119 {
    paintSwatch: PaintSwatch141
    mapped: Mapped140
  }
  
  export interface PaintSwatch141 {
    primary: Primary141
    secondary: Secondary33
  }
  
  export interface Primary141 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Secondary33 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped140 {
    "118210": N118210
  }
  
  export interface N118210 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0374 {
    paintSwatch: PaintSwatch142
    mapped: Mapped141
  }
  
  export interface PaintSwatch142 {
    primary: Primary142
  }
  
  export interface Primary142 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped141 {
    "174598": N174598
    "174776": N174776
    "178314": N178314
    "31922005": N31922005
    "32546019": N32546019
    "32707632": N32707632
    "32717057": N32717057
    "32850890": N32850890
    "bmm-3f902bifpg": Bmm3f902bifpg
    "bmm-a6bdbfpg": BmmA6bdbfpg
    "bmsp-060f7fpg": Bmsp060f7fpg
    "bmsp-967f3fpg": Bmsp967f3fpg
    "bmsp-e952ffpg": BmspE952ffpg
    p0c5a: P0c5a
  }
  
  export interface N174598 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N174776 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N178314 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N31922005 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32546019 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32707632 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32717057 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface N32850890 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmm3f902bifpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmmA6bdbfpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp060f7fpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Bmsp967f3fpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface BmspE952ffpg {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface P0c5a {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0377 {
    paintSwatch: PaintSwatch143
    mapped: Mapped142
  }
  
  export interface PaintSwatch143 {
    primary: Primary143
  }
  
  export interface Primary143 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped142 {
    "161832": N161832
  }
  
  export interface N161832 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0378 {
    paintSwatch: PaintSwatch144
    mapped: Mapped143
  }
  
  export interface PaintSwatch144 {
    primary: Primary144
  }
  
  export interface Primary144 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped143 {
    customoption8pbjtgglmza: Customoption8pbjtgglmza
  }
  
  export interface Customoption8pbjtgglmza {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  
  export interface Pspc0387 {
    paintSwatch: PaintSwatch145
    mapped: Mapped144
  }
  
  export interface PaintSwatch145 {
    primary: Primary145
  }
  
  export interface Primary145 {
    lowLight: string
    midLight: any
    highLight: string
    colourCluster: string
    paintType: string
  }
  
  export interface Mapped144 {
    a53: A53
  }
  
  export interface A53 {
    paintDescription: string
    nativePaintDescriptions: string[]
  }
  