// ─── CAR DATABASE ──────────────────────────────────────────────────────────────
// Fields: name, year, drive, piClass, weightLb, powerHp, wdist
// weightLb and powerHp are real-world specs used as in-game starting estimates.
// wdist = weight distribution % front
const CAR_DB = [
  // ABARTH
  { name: "1968 Abarth 595 Esseesse", drive: "RWD", piClass: "D", weightLb: 1235, powerHp: 38, wdist: 44 },
  { name: "1980 Abarth Fiat 131", drive: "RWD", piClass: "D", weightLb: 2094, powerHp: 138, wdist: 52 },
  { name: "2016 Abarth 695 Biposto", drive: "FWD", piClass: "B", weightLb: 2028, powerHp: 190, wdist: 65 },
  // ACURA
  { name: "2001 Acura Integra Type-R", drive: "FWD", piClass: "C", weightLb: 2639, powerHp: 195, wdist: 64 },
  { name: "2002 Acura RSX Type S", drive: "FWD", piClass: "C", weightLb: 2822, powerHp: 200, wdist: 62 },
  { name: "2022 Acura NSX Type S", drive: "AWD", piClass: "S1", weightLb: 3791, powerHp: 600, wdist: 42 },
  { name: "2023 Acura Integra A-Spec", drive: "FWD", piClass: "C", weightLb: 3186, powerHp: 200, wdist: 63 },
  // ALFA ROMEO
  { name: "1965 Alfa Romeo Giulia Sprint GTA Stradale", drive: "RWD", piClass: "D", weightLb: 1543, powerHp: 115, wdist: 50 },
  { name: "1965 Alfa Romeo Giulia TZ2", drive: "RWD", piClass: "B", weightLb: 1411, powerHp: 170, wdist: 48 },
  { name: "1968 Alfa Romeo 33 Stradale", drive: "RWD", piClass: "B", weightLb: 1543, powerHp: 230, wdist: 45 },
  { name: "1990 Alfa Romeo SE 048SP", drive: "RWD", piClass: "R", weightLb: 1698, powerHp: 620, wdist: 40 },
  { name: "1992 Alfa Romeo 155 Q4", drive: "AWD", piClass: "C", weightLb: 2844, powerHp: 190, wdist: 58 },
  { name: "2007 Alfa Romeo 8C Competizione", drive: "RWD", piClass: "A", weightLb: 3439, powerHp: 450, wdist: 45 },
  { name: "2014 Alfa Romeo 4C", drive: "RWD", piClass: "A", weightLb: 2315, powerHp: 237, wdist: 40 },
  { name: "2017 Alfa Romeo Giulia Quadrifoglio", drive: "RWD", piClass: "A", weightLb: 3439, powerHp: 505, wdist: 50 },
  { name: "2021 Alfa Romeo Giulia GTAm", drive: "RWD", piClass: "S1", weightLb: 3296, powerHp: 540, wdist: 50 },
  // ALUMICRAFT
  { name: "2015 Alumicraft Class 10 Race Car", drive: "RWD", piClass: "B", weightLb: 1800, powerHp: 200, wdist: 45 },
  { name: "2021 Alumicraft #122 Class 1 Buggy", drive: "RWD", piClass: "B", weightLb: 2100, powerHp: 400, wdist: 42 },
  { name: "2022 Alumicraft #6165 Trick Truck", drive: "RWD", piClass: "C", weightLb: 7500, powerHp: 800, wdist: 52 },
  // AMG TD
  { name: "2554 AMG Transport Dynamics M12S Warthog CST", drive: "AWD", piClass: "A", weightLb: 3000, powerHp: 350, wdist: 50 },
  // APOLLO
  { name: "2019 Apollo Intensa Emozione", drive: "RWD", piClass: "R", weightLb: 2425, powerHp: 780, wdist: 42 },
  // ARIEL
  { name: "2013 Ariel Atom 500 V8", drive: "RWD", piClass: "S2", weightLb: 1213, powerHp: 500, wdist: 45 },
  { name: "2016 Ariel Nomad", drive: "RWD", piClass: "A", weightLb: 1499, powerHp: 235, wdist: 45 },
  // ASTON MARTIN
  { name: "1964 Aston Martin DB5", drive: "RWD", piClass: "C", weightLb: 3329, powerHp: 282, wdist: 52 },
  { name: "2016 Aston Martin Vulcan", drive: "RWD", piClass: "S2", weightLb: 2757, powerHp: 820, wdist: 44 },
  { name: "2017 Aston Martin DB11", drive: "RWD", piClass: "A", weightLb: 3946, powerHp: 600, wdist: 51 },
  { name: "2017 Aston Martin Vulcan AMR Pro", drive: "RWD", piClass: "S2", weightLb: 2645, powerHp: 850, wdist: 44 },
  { name: "2019 Aston Martin DBS Superleggera", drive: "RWD", piClass: "S1", weightLb: 3946, powerHp: 715, wdist: 51 },
  { name: "2019 Aston Martin Valhalla Concept Car", drive: "AWD", piClass: "R", weightLb: 3086, powerHp: 1000, wdist: 40 },
  { name: "2019 Aston Martin Vantage", drive: "RWD", piClass: "A", weightLb: 3373, powerHp: 503, wdist: 50 },
  { name: "2021 Aston Martin DBX", drive: "AWD", piClass: "A", weightLb: 4940, powerHp: 542, wdist: 53 },
  { name: "2022 Aston Martin Valkyrie AMR Pro", drive: "RWD", piClass: "R", weightLb: 2205, powerHp: 1000, wdist: 40 },
  { name: "2023 Aston Martin Valkyrie", drive: "RWD", piClass: "R", weightLb: 2271, powerHp: 1160, wdist: 40 },
  // AUDI
  { name: "1983 Audi Sport Quattro", drive: "AWD", piClass: "B", weightLb: 3197, powerHp: 306, wdist: 56 },
  { name: "1986 Audi #2 Sport Quattro S1", drive: "AWD", piClass: "S1", weightLb: 2557, powerHp: 591, wdist: 54 },
  { name: "2001 Audi RS 4 Avant", drive: "AWD", piClass: "B", weightLb: 3902, powerHp: 380, wdist: 57 },
  { name: "2003 Audi RS 6", drive: "AWD", piClass: "B", weightLb: 4233, powerHp: 450, wdist: 57 },
  { name: "2006 Audi RS 4", drive: "AWD", piClass: "B", weightLb: 3748, powerHp: 420, wdist: 58 },
  { name: "2009 Audi R8 LMS", drive: "RWD", piClass: "S2", weightLb: 2976, powerHp: 500, wdist: 38 },
  { name: "2009 Audi RS 6", drive: "AWD", piClass: "B", weightLb: 4299, powerHp: 572, wdist: 57 },
  { name: "2010 Audi TT RS Coupé", drive: "AWD", piClass: "B", weightLb: 3362, powerHp: 335, wdist: 61 },
  { name: "2011 Audi RS 3 Sportback", drive: "AWD", piClass: "B", weightLb: 3208, powerHp: 340, wdist: 62 },
  { name: "2011 Audi RS 5 Coupé", drive: "AWD", piClass: "A", weightLb: 3912, powerHp: 450, wdist: 58 },
  { name: "2013 Audi R8 Coupé V10 plus 5.2 FSI Quattro", drive: "AWD", piClass: "A", weightLb: 3494, powerHp: 550, wdist: 43 },
  { name: "2013 Audi RS 4 Avant", drive: "AWD", piClass: "A", weightLb: 3968, powerHp: 450, wdist: 58 },
  { name: "2013 Audi RS 7 Sportback", drive: "AWD", piClass: "A", weightLb: 4541, powerHp: 560, wdist: 56 },
  { name: "2015 Audi RS 6 Avant", drive: "AWD", piClass: "A", weightLb: 4553, powerHp: 605, wdist: 56 },
  { name: "2015 Audi S1", drive: "AWD", piClass: "B", weightLb: 2733, powerHp: 231, wdist: 64 },
  { name: "2016 Audi R8 V10 Plus", drive: "AWD", piClass: "S1", weightLb: 3583, powerHp: 602, wdist: 43 },
  { name: "2018 Audi RS 4 Avant", drive: "AWD", piClass: "A", weightLb: 4167, powerHp: 450, wdist: 58 },
  { name: "2020 Audi RS 3 Sedan", drive: "AWD", piClass: "A", weightLb: 3263, powerHp: 400, wdist: 62 },
  { name: "2020 Audi R8 V10 Performance", drive: "AWD", piClass: "S1", weightLb: 3583, powerHp: 620, wdist: 43 },
  { name: "2021 Audi RS 6 Avant", drive: "AWD", piClass: "A", weightLb: 4740, powerHp: 621, wdist: 56 },
  { name: "2021 Audi RS 7 Sportback", drive: "AWD", piClass: "A", weightLb: 4663, powerHp: 621, wdist: 56 },
  { name: "2021 Audi RS e-tron GT", drive: "AWD", piClass: "A", weightLb: 5181, powerHp: 590, wdist: 47 },
  { name: "2023 Audi R8 Coupé V10 GT RWD", drive: "RWD", piClass: "S1", weightLb: 3296, powerHp: 620, wdist: 42 },
  // AUSTIN-HEALEY
  { name: "1965 Austin-Healey 3000 Mk III", drive: "RWD", piClass: "D", weightLb: 2436, powerHp: 150, wdist: 52 },
  // AUTOZAM
  { name: "1993 Autozam AZ-1", drive: "RWD", piClass: "D", weightLb: 1433, powerHp: 64, wdist: 40 },
  // BAC
  { name: "2014 BAC Mono", drive: "RWD", piClass: "S1", weightLb: 1278, powerHp: 305, wdist: 47 },
  // BENTLEY
  { name: "2016 Bentley Bentayga", drive: "AWD", piClass: "A", weightLb: 5379, powerHp: 600, wdist: 56 },
  { name: "2021 Bentley Continental GT Convertible", drive: "AWD", piClass: "A", weightLb: 5049, powerHp: 626, wdist: 55 },
  // BMW
  { name: "1957 BMW Isetta 300", drive: "RWD", piClass: "D", weightLb: 772, powerHp: 13, wdist: 35 },
  { name: "1973 BMW 2002 Turbo", drive: "RWD", piClass: "C", weightLb: 2315, powerHp: 170, wdist: 55 },
  { name: "1981 BMW M1", drive: "RWD", piClass: "B", weightLb: 2855, powerHp: 277, wdist: 47 },
  { name: "1988 BMW M3", drive: "RWD", piClass: "C", weightLb: 2756, powerHp: 200, wdist: 52 },
  { name: "1988 BMW M5", drive: "RWD", piClass: "C", weightLb: 3395, powerHp: 286, wdist: 52 },
  { name: "1995 BMW 850CSi", drive: "RWD", piClass: "C", weightLb: 4277, powerHp: 380, wdist: 52 },
  { name: "1995 BMW M5", drive: "RWD", piClass: "B", weightLb: 3836, powerHp: 340, wdist: 52 },
  { name: "1997 BMW M3", drive: "RWD", piClass: "B", weightLb: 3307, powerHp: 321, wdist: 52 },
  { name: "2003 BMW M5", drive: "RWD", piClass: "B", weightLb: 4057, powerHp: 394, wdist: 52 },
  { name: "2005 BMW M3", drive: "RWD", piClass: "B", weightLb: 3527, powerHp: 414, wdist: 52 },
  { name: "2008 BMW M3", drive: "RWD", piClass: "A", weightLb: 3715, powerHp: 414, wdist: 52 },
  { name: "2008 BMW Z4 M Coupé", drive: "RWD", piClass: "B", weightLb: 3252, powerHp: 338, wdist: 52 },
  { name: "2011 BMW X5 M", drive: "AWD", piClass: "B", weightLb: 5391, powerHp: 555, wdist: 55 },
  { name: "2012 BMW M5", drive: "RWD", piClass: "A", weightLb: 4299, powerHp: 552, wdist: 52 },
  { name: "2016 BMW M4 GTS", drive: "RWD", piClass: "S1", weightLb: 3461, powerHp: 500, wdist: 52 },
  { name: "2019 BMW Z4 Roadster", drive: "RWD", piClass: "A", weightLb: 3395, powerHp: 382, wdist: 50 },
  { name: "2020 BMW M2 Competition Coupé", drive: "RWD", piClass: "A", weightLb: 3748, powerHp: 405, wdist: 52 },
  { name: "2021 BMW M4 Competition Coupé", drive: "RWD", piClass: "A", weightLb: 3836, powerHp: 503, wdist: 52 },
  { name: "2021 BMW M4 Competition Coupé 'Welcome Pack'", drive: "AWD", piClass: "S1", weightLb: 3924, powerHp: 503, wdist: 52 },
  { name: "2022 BMW iX xDrive50", drive: "AWD", piClass: "B", weightLb: 5668, powerHp: 516, wdist: 50 },
  { name: "2023 BMW M2", drive: "RWD", piClass: "A", weightLb: 3748, powerHp: 453, wdist: 52 },
  { name: "2024 BMW X6 M Competition", drive: "AWD", piClass: "A", weightLb: 5534, powerHp: 617, wdist: 52 },
  // BUGATTI
  { name: "2011 Bugatti Veyron Super Sport", drive: "AWD", piClass: "X", weightLb: 4162, powerHp: 1200, wdist: 44 },
  { name: "2017 Bugatti Chiron", drive: "AWD", piClass: "X", weightLb: 4398, powerHp: 1479, wdist: 46 },
  { name: "2019 Bugatti Divo", drive: "AWD", piClass: "X", weightLb: 4398, powerHp: 1479, wdist: 44 },
  // BUICK
  { name: "1987 Buick Regal GNX", drive: "RWD", piClass: "C", weightLb: 3535, powerHp: 276, wdist: 57 },
  // CADILLAC
  { name: "2016 Cadillac ATS-V", drive: "RWD", piClass: "A", weightLb: 3768, powerHp: 464, wdist: 52 },
  { name: "2016 Cadillac CTS-V Sedan", drive: "RWD", piClass: "A", weightLb: 4255, powerHp: 640, wdist: 52 },
  { name: "2022 Cadillac CT4-V Blackwing", drive: "RWD", piClass: "A", weightLb: 3748, powerHp: 472, wdist: 52 },
  { name: "2022 Cadillac CT5-V Blackwing", drive: "RWD", piClass: "S1", weightLb: 4109, powerHp: 668, wdist: 52 },
  // CAN-AM
  { name: "2018 Can-Am Maverick X RS Turbo R", drive: "AWD", piClass: "B", weightLb: 1650, powerHp: 172, wdist: 50 },
  // CHEVROLET
  { name: "1955 Chevrolet 150 Utility Sedan", drive: "RWD", piClass: "D", weightLb: 3075, powerHp: 162, wdist: 55 },
  { name: "1957 Chevrolet Bel Air", drive: "RWD", piClass: "D", weightLb: 3397, powerHp: 283, wdist: 55 },
  { name: "1967 Chevrolet Corvette Stingray 427", drive: "RWD", piClass: "B", weightLb: 3210, powerHp: 435, wdist: 48 },
  { name: "1969 Chevrolet Nova Super Sport 396", drive: "RWD", piClass: "C", weightLb: 3490, powerHp: 375, wdist: 56 },
  { name: "1970 Chevrolet Chevelle Super Sport 454", drive: "RWD", piClass: "C", weightLb: 3990, powerHp: 450, wdist: 57 },
  { name: "1972 Chevrolet K-10 Custom", drive: "AWD", piClass: "D", weightLb: 4000, powerHp: 165, wdist: 53 },
  { name: "1979 Chevrolet Camaro Z28", drive: "RWD", piClass: "D", weightLb: 3614, powerHp: 175, wdist: 56 },
  { name: "1995 Chevrolet Corvette ZR-1", drive: "RWD", piClass: "B", weightLb: 3465, powerHp: 405, wdist: 51 },
  { name: "2002 Chevrolet Corvette Z06", drive: "RWD", piClass: "A", weightLb: 3115, powerHp: 405, wdist: 50 },
  { name: "2015 Chevrolet Corvette Z06", drive: "RWD", piClass: "S1", weightLb: 3524, powerHp: 650, wdist: 51 },
  { name: "2017 Chevrolet Camaro ZL1", drive: "RWD", piClass: "S1", weightLb: 3917, powerHp: 650, wdist: 57 },
  { name: "2018 DeBerti Chevrolet Silverado 1500 Drift Truck", drive: "RWD", piClass: "S1", weightLb: 4800, powerHp: 700, wdist: 58 },
  { name: "2018 Dodge Challenger SRT Demon", drive: "RWD", piClass: "A", weightLb: 4254, powerHp: 840, wdist: 57 },
  { name: "2019 Chevrolet Corvette Stingray Coupe", drive: "RWD", piClass: "S1", weightLb: 3647, powerHp: 495, wdist: 41 },
  { name: "2019 Chevrolet Corvette ZR1", drive: "RWD", piClass: "S1", weightLb: 3560, powerHp: 755, wdist: 46 },
  { name: "2020 Chevrolet Corvette Stingray Coupe", drive: "RWD", piClass: "A", weightLb: 3366, powerHp: 490, wdist: 40 },
  { name: "2020 Chevrolet Silverado LT Trail Boss", drive: "AWD", piClass: "C", weightLb: 5270, powerHp: 355, wdist: 54 },
  { name: "2024 Chevrolet Corvette E-Ray", drive: "AWD", piClass: "S1", weightLb: 3774, powerHp: 655, wdist: 46 },
  // DATSUN
  { name: "1970 Datsun 510", drive: "RWD", piClass: "D", weightLb: 2072, powerHp: 96, wdist: 56 },
  { name: "1972 Datsun #269 240Z Time Attack", drive: "RWD", piClass: "R", weightLb: 2000, powerHp: 600, wdist: 48 },
  // DELOREAN
  { name: "1982 DeLorean DMC-12", drive: "RWD", piClass: "D", weightLb: 2712, powerHp: 130, wdist: 36 },
  // DODGE
  { name: "1969 Dodge Charger R/T", drive: "RWD", piClass: "C", weightLb: 3546, powerHp: 375, wdist: 56 },
  { name: "1970 Dodge Challenger R/T", drive: "RWD", piClass: "C", weightLb: 3402, powerHp: 335, wdist: 56 },
  { name: "1999 Dodge Viper GTS ACR", drive: "RWD", piClass: "B", weightLb: 3388, powerHp: 460, wdist: 49 },
  { name: "2013 Dodge SRT Viper GTS", drive: "RWD", piClass: "S1", weightLb: 3374, powerHp: 640, wdist: 49 },
  { name: "2015 Dodge Challenger SRT Hellcat", drive: "RWD", piClass: "A", weightLb: 4439, powerHp: 707, wdist: 57 },
  { name: "2015 Dodge Charger SRT Hellcat", drive: "RWD", piClass: "A", weightLb: 4575, powerHp: 707, wdist: 57 },
  { name: "2016 Dodge Viper ACR", drive: "RWD", piClass: "S1", weightLb: 3374, powerHp: 645, wdist: 49 },
  { name: "2018 Dodge Challenger SRT Demon", drive: "RWD", piClass: "A", weightLb: 4254, powerHp: 840, wdist: 57 },
  { name: "2021 Dodge Durango SRT Hellcat", drive: "AWD", piClass: "A", weightLb: 5387, powerHp: 710, wdist: 53 },
  { name: "2022 Dodge Challenger SRT Super Stock", drive: "RWD", piClass: "A", weightLb: 4254, powerHp: 807, wdist: 57 },
  // FERRARI
  { name: "1967 Ferrari 275 GTB4 Spider", drive: "RWD", piClass: "C", weightLb: 2425, powerHp: 300, wdist: 48 },
  { name: "1994 Ferrari F355 Berlinetta", drive: "RWD", piClass: "B", weightLb: 3010, powerHp: 375, wdist: 46 },
  { name: "2013 Ferrari 458 Speciale", drive: "RWD", piClass: "S1", weightLb: 3153, powerHp: 597, wdist: 43 },
  { name: "2013 Ferrari LaFerrari", drive: "RWD", piClass: "S2", weightLb: 2767, powerHp: 950, wdist: 42 },
  { name: "2017 Ferrari J50", drive: "RWD", piClass: "S1", weightLb: 2920, powerHp: 690, wdist: 42 },
  { name: "2018 Ferrari FXX-K Evo", drive: "RWD", piClass: "R", weightLb: 2469, powerHp: 1036, wdist: 42 },
  { name: "2018 Ferrari FXX-K Evo 'Welcome Pack'", drive: "RWD", piClass: "R", weightLb: 2469, powerHp: 1036, wdist: 42 },
  { name: "2018 Ferrari Portofino", drive: "RWD", piClass: "S1", weightLb: 3803, powerHp: 591, wdist: 46 },
  { name: "2019 Ferrari 488 Pista", drive: "RWD", piClass: "S2", weightLb: 3086, powerHp: 710, wdist: 42 },
  { name: "2019 Ferrari Monza SP2", drive: "RWD", piClass: "S1", weightLb: 2888, powerHp: 809, wdist: 42 },
  { name: "2022 Ferrari 296 GTB", drive: "RWD", piClass: "S2", weightLb: 3263, powerHp: 830, wdist: 41 },
  { name: "2025 Ferrari F80", drive: "AWD", piClass: "R", weightLb: 2712, powerHp: 1200, wdist: 40 },
  // FORD
  { name: "1965 Ford Shelby Cobra 427 S/C", drive: "RWD", piClass: "A", weightLb: 2359, powerHp: 485, wdist: 48 },
  { name: "1966 Ford GT40 Mk II Le Mans", drive: "RWD", piClass: "S1", weightLb: 2260, powerHp: 485, wdist: 42 },
  { name: "1969 Ford Mustang Boss 302", drive: "RWD", piClass: "C", weightLb: 3227, powerHp: 290, wdist: 57 },
  { name: "1971 Ford Falcon XY GT", drive: "RWD", piClass: "C", weightLb: 3329, powerHp: 300, wdist: 58 },
  { name: "1973 Ford Falcon XB", drive: "RWD", piClass: "C", weightLb: 3219, powerHp: 300, wdist: 56 },
  { name: "1983 Ford RS200 Evolution", drive: "AWD", piClass: "S1", weightLb: 2271, powerHp: 450, wdist: 50 },
  { name: "1987 Ford Sierra Cosworth RS500", drive: "RWD", piClass: "B", weightLb: 2656, powerHp: 224, wdist: 58 },
  { name: "1992 Ford Escort RS Cosworth", drive: "AWD", piClass: "B", weightLb: 2700, powerHp: 227, wdist: 60 },
  { name: "1993 Ford SVT Cobra R", drive: "RWD", piClass: "C", weightLb: 3337, powerHp: 235, wdist: 57 },
  { name: "2003 Ford Focus RS", drive: "FWD", piClass: "B", weightLb: 2778, powerHp: 212, wdist: 64 },
  { name: "2004 Ford Racing Puma", drive: "FWD", piClass: "C", weightLb: 2093, powerHp: 155, wdist: 63 },
  { name: "2005 Ford GT", drive: "RWD", piClass: "S1", weightLb: 3351, powerHp: 550, wdist: 43 },
  { name: "2011 Ford F-150 SVT Raptor", drive: "AWD", piClass: "C", weightLb: 5530, powerHp: 411, wdist: 54 },
  { name: "2013 Ford Focus ST", drive: "FWD", piClass: "C", weightLb: 3107, powerHp: 252, wdist: 64 },
  { name: "2015 Ford Mustang GT", drive: "RWD", piClass: "B", weightLb: 3539, powerHp: 435, wdist: 54 },
  { name: "2016 Ford Focus RS", drive: "AWD", piClass: "A", weightLb: 3299, powerHp: 350, wdist: 60 },
  { name: "2017 Ford F-150 Raptor", drive: "AWD", piClass: "B", weightLb: 5340, powerHp: 450, wdist: 54 },
  { name: "2017 Ford GT", drive: "RWD", piClass: "R", weightLb: 3054, powerHp: 647, wdist: 42 },
  { name: "2019 Ford Mustang Shelby GT350R", drive: "RWD", piClass: "S1", weightLb: 3688, powerHp: 526, wdist: 54 },
  { name: "2020 Ford Mustang Shelby GT500", drive: "RWD", piClass: "S1", weightLb: 4225, powerHp: 760, wdist: 54 },
  { name: "2021 Ford Bronco", drive: "AWD", piClass: "C", weightLb: 4600, powerHp: 300, wdist: 52 },
  // HONDA
  { name: "1984 Honda Civic CRX Mugen", drive: "FWD", piClass: "D", weightLb: 1908, powerHp: 135, wdist: 66 },
  { name: "1990 Honda Beat", drive: "RWD", piClass: "D", weightLb: 1609, powerHp: 64, wdist: 37 },
  { name: "1992 Honda NSX-R", drive: "RWD", piClass: "A", weightLb: 2712, powerHp: 270, wdist: 39 },
  { name: "1994 Honda Prelude Si", drive: "FWD", piClass: "D", weightLb: 2855, powerHp: 160, wdist: 63 },
  { name: "1997 Honda Civic Type R", drive: "FWD", piClass: "C", weightLb: 2348, powerHp: 182, wdist: 65 },
  { name: "2000 Honda S2000", drive: "RWD", piClass: "B", weightLb: 2809, powerHp: 240, wdist: 49 },
  { name: "2002 Honda Civic Type R", drive: "FWD", piClass: "C", weightLb: 2712, powerHp: 212, wdist: 64 },
  { name: "2004 Honda Integra Type R", drive: "FWD", piClass: "C", weightLb: 2712, powerHp: 217, wdist: 64 },
  { name: "2005 Honda NSX-R GT", drive: "RWD", piClass: "S1", weightLb: 2712, powerHp: 295, wdist: 39 },
  { name: "2007 Honda Civic Type R", drive: "FWD", piClass: "B", weightLb: 3042, powerHp: 197, wdist: 64 },
  { name: "2015 Honda Fit RS", drive: "FWD", piClass: "D", weightLb: 2469, powerHp: 128, wdist: 64 },
  { name: "2016 Honda Civic Type R", drive: "FWD", piClass: "B", weightLb: 3042, powerHp: 306, wdist: 63 },
  { name: "2017 Honda Ridgeline Baja Race Truck", drive: "AWD", piClass: "A", weightLb: 4900, powerHp: 550, wdist: 52 },
  { name: "2021 Honda e", drive: "RWD", piClass: "D", weightLb: 3570, powerHp: 154, wdist: 40 },
  { name: "2021 Honda NSX Type S", drive: "AWD", piClass: "S1", weightLb: 3791, powerHp: 600, wdist: 42 },
  { name: "2023 Honda Civic Type R", drive: "FWD", piClass: "B", weightLb: 3196, powerHp: 315, wdist: 63 },
  // HOONIGAN
  { name: "1965 Hoonigan Ford Mustang 'Hoonicorn' V2", drive: "AWD", piClass: "X", weightLb: 2744, powerHp: 1400, wdist: 50 },
  { name: "1977 Hoonigan Porsche 911 'Sh*tcar'", drive: "RWD", piClass: "S2", weightLb: 2000, powerHp: 700, wdist: 38 },
  { name: "2012 Hoonigan Ken Block's Fiesta RS", drive: "AWD", piClass: "S2", weightLb: 2800, powerHp: 600, wdist: 55 },
  // JAGUAR
  { name: "1961 Jaguar E-type S1", drive: "RWD", piClass: "D", weightLb: 2879, powerHp: 265, wdist: 49 },
  { name: "1992 Jaguar XJ220", drive: "RWD", piClass: "S1", weightLb: 3241, powerHp: 542, wdist: 43 },
  { name: "2018 Jaguar F-Pace SVR", drive: "AWD", piClass: "A", weightLb: 4640, powerHp: 550, wdist: 54 },
  { name: "2018 Jaguar F-Type R Coupé", drive: "AWD", piClass: "A", weightLb: 3748, powerHp: 575, wdist: 50 },
  { name: "2019 Jaguar I-Pace", drive: "AWD", piClass: "B", weightLb: 4784, powerHp: 400, wdist: 53 },
  { name: "2021 Jaguar F-Type R", drive: "AWD", piClass: "S1", weightLb: 3748, powerHp: 575, wdist: 50 },
  // KIA
  { name: "2023 Kia EV6 GT", drive: "AWD", piClass: "A", weightLb: 4634, powerHp: 577, wdist: 50 },
  // KOENIGSEGG
  { name: "2011 Koenigsegg Agera", drive: "RWD", piClass: "X", weightLb: 3086, powerHp: 940, wdist: 42 },
  { name: "2020 Koenigsegg Jesko", drive: "RWD", piClass: "X", weightLb: 3097, powerHp: 1600, wdist: 42 },
  // KTM
  { name: "2013 KTM X-Bow R", drive: "RWD", piClass: "A", weightLb: 1499, powerHp: 300, wdist: 45 },
  // LAMBORGHINI
  { name: "1971 Lamborghini Miura SV", drive: "RWD", piClass: "B", weightLb: 2866, powerHp: 385, wdist: 43 },
  { name: "1988 Lamborghini Countach LP5000 QV", drive: "RWD", piClass: "A", weightLb: 3362, powerHp: 455, wdist: 41 },
  { name: "2001 Lamborghini Diablo GTR", drive: "RWD", piClass: "S2", weightLb: 2866, powerHp: 575, wdist: 41 },
  { name: "2012 Lamborghini Aventador LP 700-4", drive: "AWD", piClass: "S1", weightLb: 3472, powerHp: 700, wdist: 43 },
  { name: "2016 Lamborghini Centenario LP 770-4", drive: "AWD", piClass: "S2", weightLb: 3362, powerHp: 770, wdist: 43 },
  { name: "2017 Lamborghini Huracan Performante", drive: "AWD", piClass: "S2", weightLb: 3087, powerHp: 640, wdist: 43 },
  { name: "2019 Lamborghini Urus", drive: "AWD", piClass: "S1", weightLb: 4850, powerHp: 641, wdist: 55 },
  { name: "2021 Lamborghini Sian FKP 37", drive: "AWD", piClass: "R", weightLb: 3285, powerHp: 819, wdist: 43 },
  { name: "2023 Lamborghini Revuelto", drive: "AWD", piClass: "R", weightLb: 3362, powerHp: 1001, wdist: 43 },
  // LAND ROVER
  { name: "2020 Land Rover Defender 90", drive: "AWD", piClass: "C", weightLb: 4819, powerHp: 296, wdist: 53 },
  { name: "2021 Land Rover Defender 110", drive: "AWD", piClass: "C", weightLb: 5126, powerHp: 296, wdist: 53 },
  // LANCIA
  { name: "1982 Lancia Delta S4", drive: "AWD", piClass: "S1", weightLb: 2315, powerHp: 480, wdist: 55 },
  { name: "1992 Lancia Delta Integrale HF Evoluzione", drive: "AWD", piClass: "B", weightLb: 2822, powerHp: 210, wdist: 60 },
  // LEXUS
  { name: "1997 Lexus SC300 Sport Cross", drive: "RWD", piClass: "C", weightLb: 3637, powerHp: 225, wdist: 53 },
  { name: "1998 Lexus LFA Concept", drive: "RWD", piClass: "B", weightLb: 3494, powerHp: 276, wdist: 53 },
  { name: "2010 Lexus LFA", drive: "RWD", piClass: "S1", weightLb: 3263, powerHp: 562, wdist: 48 },
  { name: "2012 Lexus LFA Nürburgring Edition", drive: "RWD", piClass: "S1", weightLb: 3197, powerHp: 571, wdist: 48 },
  { name: "2022 Lexus IS 500 F Sport Performance", drive: "RWD", piClass: "A", weightLb: 3891, powerHp: 472, wdist: 54 },
  { name: "2022 Lexus LC 500h", drive: "RWD", piClass: "A", weightLb: 4685, powerHp: 354, wdist: 52 },
  { name: "2022 Lexus LX 600", drive: "AWD", piClass: "B", weightLb: 5797, powerHp: 409, wdist: 54 },
  // LOTUS
  { name: "2012 Lotus Exige S", drive: "RWD", piClass: "A", weightLb: 2271, powerHp: 345, wdist: 40 },
  { name: "2021 Lotus Evija", drive: "AWD", piClass: "X", weightLb: 3836, powerHp: 2000, wdist: 44 },
  // MASERATI
  { name: "2012 Maserati Gran Turismo S", drive: "RWD", piClass: "A", weightLb: 4046, powerHp: 444, wdist: 49 },
  { name: "2017 Maserati GranTurismo MC Stradale", drive: "RWD", piClass: "S1", weightLb: 3869, powerHp: 460, wdist: 49 },
  { name: "2022 Maserati MC20", drive: "RWD", piClass: "S1", weightLb: 3042, powerHp: 630, wdist: 44 },
  // MAZDA
  { name: "1990 Mazda MX-5 Miata", drive: "RWD", piClass: "D", weightLb: 2182, powerHp: 116, wdist: 51 },
  { name: "1991 Mazda #55 Mazda 787B", drive: "RWD", piClass: "R", weightLb: 2072, powerHp: 700, wdist: 41 },
  { name: "1992 Mazda 323 GT-Ae", drive: "AWD", piClass: "B", weightLb: 2315, powerHp: 210, wdist: 59 },
  { name: "1994 Mazda MX-5 Miata Forza Edition", drive: "RWD", piClass: "X", weightLb: 2182, powerHp: 116, wdist: 51 },
  { name: "1997 Mazda RX-7 Spirit R", drive: "RWD", piClass: "A", weightLb: 2866, powerHp: 276, wdist: 51 },
  { name: "2001 Mazda RX-7 Spirit R Type A", drive: "RWD", piClass: "A", weightLb: 2756, powerHp: 276, wdist: 51 },
  { name: "2011 Mazda RX-8 R3", drive: "RWD", piClass: "B", weightLb: 3047, powerHp: 232, wdist: 52 },
  { name: "2019 Mazda MX-5 Miata", drive: "RWD", piClass: "C", weightLb: 2381, powerHp: 181, wdist: 51 },
  { name: "2020 Mazda MX-30", drive: "FWD", piClass: "D", weightLb: 3847, powerHp: 145, wdist: 60 },
  // MCLAREN
  { name: "1997 McLaren F1", drive: "RWD", piClass: "S2", weightLb: 2513, powerHp: 627, wdist: 42 },
  { name: "1998 McLaren F1 GT", drive: "RWD", piClass: "S2", weightLb: 2381, powerHp: 636, wdist: 42 },
  { name: "2012 McLaren MP4-12C", drive: "RWD", piClass: "S1", weightLb: 2868, powerHp: 616, wdist: 42 },
  { name: "2014 McLaren P1", drive: "RWD", piClass: "R", weightLb: 3075, powerHp: 916, wdist: 42 },
  { name: "2018 McLaren Senna", drive: "RWD", piClass: "R", weightLb: 2641, powerHp: 789, wdist: 42 },
  { name: "2019 McLaren 720S Spider", drive: "RWD", piClass: "S2", weightLb: 3153, powerHp: 710, wdist: 42 },
  { name: "2022 McLaren Artura", drive: "RWD", piClass: "S1", weightLb: 3307, powerHp: 671, wdist: 42 },
  { name: "2023 McLaren W1", drive: "RWD", piClass: "R", weightLb: 2800, powerHp: 1275, wdist: 42 },
  // MERCEDES-BENZ
  { name: "1954 Mercedes-Benz 300 SL Gullwing", drive: "RWD", piClass: "D", weightLb: 2767, powerHp: 215, wdist: 55 },
  { name: "1998 Mercedes-Benz AMG CLK GTR", drive: "RWD", piClass: "R", weightLb: 2601, powerHp: 604, wdist: 44 },
  { name: "2012 Mercedes-Benz C 63 AMG Coupé Black Series", drive: "RWD", piClass: "S1", weightLb: 3924, powerHp: 510, wdist: 52 },
  { name: "2013 Mercedes-Benz A 45 AMG", drive: "AWD", piClass: "B", weightLb: 3274, powerHp: 360, wdist: 62 },
  { name: "2016 Mercedes-Benz G 63 AMG", drive: "AWD", piClass: "A", weightLb: 5787, powerHp: 536, wdist: 53 },
  { name: "2018 Mercedes-AMG GT R", drive: "RWD", piClass: "S1", weightLb: 3594, powerHp: 577, wdist: 48 },
  { name: "2019 Mercedes-AMG A 35", drive: "AWD", piClass: "B", weightLb: 3494, powerHp: 302, wdist: 63 },
  { name: "2020 Mercedes-AMG GT Black Series", drive: "RWD", piClass: "R", weightLb: 3373, powerHp: 730, wdist: 48 },
  { name: "2021 Mercedes-AMG GT 63 S E Performance", drive: "AWD", piClass: "S1", weightLb: 5126, powerHp: 831, wdist: 51 },
  { name: "2022 Mercedes-AMG EQS", drive: "AWD", piClass: "A", weightLb: 5842, powerHp: 751, wdist: 50 },
  { name: "2023 Mercedes-AMG C 63 S E Performance", drive: "AWD", piClass: "A", weightLb: 4574, powerHp: 671, wdist: 55 },
  { name: "2024 Mercedes-AMG GT 63 S", drive: "AWD", piClass: "S1", weightLb: 4453, powerHp: 630, wdist: 51 },
  // MITSUBISHI
  { name: "1995 Mitsubishi Eclipse GSX", drive: "AWD", piClass: "C", weightLb: 3208, powerHp: 210, wdist: 62 },
  { name: "1997 Mitsubishi GTO", drive: "AWD", piClass: "B", weightLb: 3638, powerHp: 320, wdist: 58 },
  { name: "1999 Mitsubishi Lancer Evolution VI", drive: "AWD", piClass: "B", weightLb: 3042, powerHp: 280, wdist: 60 },
  { name: "2006 Mitsubishi Lancer Evolution IX MR", drive: "AWD", piClass: "A", weightLb: 3131, powerHp: 286, wdist: 60 },
  { name: "2008 Mitsubishi Lancer Evolution X GSR", drive: "AWD", piClass: "A", weightLb: 3373, powerHp: 295, wdist: 60 },
  // NISSAN
  { name: "1969 Nissan Fairlady Z 432", drive: "RWD", piClass: "D", weightLb: 2381, powerHp: 162, wdist: 52 },
  { name: "1971 Nissan Skyline GT-R (KPGC10)", drive: "RWD", piClass: "D", weightLb: 2270, powerHp: 160, wdist: 54 },
  { name: "1989 Nissan Skyline GT-R (R32)", drive: "AWD", piClass: "B", weightLb: 3307, powerHp: 276, wdist: 54 },
  { name: "1993 Nissan 240SX SE", drive: "RWD", piClass: "C", weightLb: 2690, powerHp: 155, wdist: 57 },
  { name: "1993 Nissan Skyline GT-R (R33)", drive: "AWD", piClass: "B", weightLb: 3439, powerHp: 276, wdist: 54 },
  { name: "1993 Nissan Silvia Q's", drive: "RWD", piClass: "C", weightLb: 2634, powerHp: 100, wdist: 57 },
  { name: "1999 Nissan Skyline GT-R (R34)", drive: "AWD", piClass: "A", weightLb: 3439, powerHp: 276, wdist: 54 },
  { name: "1999 Nissan Silvia Spec-R", drive: "RWD", piClass: "B", weightLb: 2756, powerHp: 247, wdist: 57 },
  { name: "2002 Nissan Silvia Spec-R Aero", drive: "RWD", piClass: "B", weightLb: 2756, powerHp: 247, wdist: 57 },
  { name: "2003 Nissan Fairlady Z", drive: "RWD", piClass: "B", weightLb: 3197, powerHp: 287, wdist: 52 },
  { name: "2009 Nissan GT-R", drive: "AWD", piClass: "S1", weightLb: 3858, powerHp: 485, wdist: 54 },
  { name: "2017 Nissan GT-R Premium", drive: "AWD", piClass: "S1", weightLb: 3858, powerHp: 565, wdist: 54 },
  { name: "2022 Nissan Fairlady Z", drive: "RWD", piClass: "A", weightLb: 3516, powerHp: 400, wdist: 52 },
  { name: "2024 Nissan GT-R Nismo", drive: "AWD", piClass: "S2", weightLb: 3924, powerHp: 600, wdist: 54 },
  // PAGANI
  { name: "2012 Pagani Huayra", drive: "RWD", piClass: "R", weightLb: 2976, powerHp: 730, wdist: 42 },
  { name: "2017 Pagani Huayra BC", drive: "RWD", piClass: "R", weightLb: 2646, powerHp: 800, wdist: 42 },
  // PORSCHE
  { name: "1973 Porsche 911 Carrera RS", drive: "RWD", piClass: "C", weightLb: 2370, powerHp: 210, wdist: 40 },
  { name: "1982 Porsche 911 Turbo 3.3", drive: "RWD", piClass: "B", weightLb: 2976, powerHp: 300, wdist: 40 },
  { name: "1987 Porsche 959", drive: "AWD", piClass: "S1", weightLb: 3197, powerHp: 444, wdist: 42 },
  { name: "1989 Porsche 944 Turbo", drive: "RWD", piClass: "C", weightLb: 3086, powerHp: 247, wdist: 50 },
  { name: "1992 Porsche 911 Turbo S", drive: "RWD", piClass: "A", weightLb: 3307, powerHp: 381, wdist: 40 },
  { name: "1995 Porsche 911 GT2", drive: "RWD", piClass: "S1", weightLb: 3086, powerHp: 430, wdist: 40 },
  { name: "1997 Porsche 911 GT1 Strassenversion", drive: "RWD", piClass: "R", weightLb: 2866, powerHp: 544, wdist: 42 },
  { name: "2003 Porsche Carrera GT", drive: "RWD", piClass: "S2", weightLb: 3042, powerHp: 612, wdist: 44 },
  { name: "2011 Porsche 918 RSR", drive: "RWD", piClass: "R", weightLb: 2579, powerHp: 767, wdist: 40 },
  { name: "2012 Porsche 911 GT3 RS 4.0", drive: "RWD", piClass: "S1", weightLb: 3042, powerHp: 500, wdist: 40 },
  { name: "2015 Porsche Cayenne Turbo S", drive: "AWD", piClass: "A", weightLb: 5236, powerHp: 570, wdist: 55 },
  { name: "2016 Porsche 911 GT3 RS", drive: "RWD", piClass: "S1", weightLb: 3042, powerHp: 500, wdist: 40 },
  { name: "2018 Porsche 911 GT2 RS", drive: "RWD", piClass: "S2", weightLb: 3086, powerHp: 700, wdist: 40 },
  { name: "2019 Porsche 918 Spyder", drive: "AWD", piClass: "R", weightLb: 3747, powerHp: 887, wdist: 44 },
  { name: "2020 Porsche Taycan Turbo S", drive: "AWD", piClass: "S1", weightLb: 5107, powerHp: 751, wdist: 48 },
  { name: "2021 Porsche 911 Turbo S", drive: "AWD", piClass: "S2", weightLb: 3593, powerHp: 640, wdist: 40 },
  { name: "2022 Porsche 911 GT3", drive: "RWD", piClass: "S1", weightLb: 3153, powerHp: 502, wdist: 40 },
  { name: "2024 Porsche 911 GT3 RS", drive: "RWD", piClass: "S1", weightLb: 3042, powerHp: 518, wdist: 40 },
  // RENAULT
  { name: "2004 Renault Sport Clio V6", drive: "RWD", piClass: "B", weightLb: 2910, powerHp: 255, wdist: 40 },
  { name: "2011 Renault Megane RS", drive: "FWD", piClass: "B", weightLb: 2932, powerHp: 265, wdist: 64 },
  { name: "2018 Renault Sport R.S. 01", drive: "RWD", piClass: "S1", weightLb: 2976, powerHp: 500, wdist: 44 },
  // SUBARU
  { name: "1998 Subaru Impreza 22B STi", drive: "AWD", piClass: "B", weightLb: 2931, powerHp: 276, wdist: 58 },
  { name: "2004 Subaru Impreza WRX STI", drive: "AWD", piClass: "B", weightLb: 3395, powerHp: 300, wdist: 58 },
  { name: "2008 Subaru Impreza WRX STI", drive: "AWD", piClass: "A", weightLb: 3461, powerHp: 305, wdist: 58 },
  { name: "2011 Subaru WRX STI", drive: "AWD", piClass: "A", weightLb: 3461, powerHp: 305, wdist: 58 },
  { name: "2016 Subaru WRX STI", drive: "AWD", piClass: "A", weightLb: 3461, powerHp: 305, wdist: 58 },
  { name: "2022 Subaru WRX", drive: "AWD", piClass: "B", weightLb: 3583, powerHp: 271, wdist: 58 },
  // TESLA
  { name: "2016 Tesla Model S P90D", drive: "AWD", piClass: "A", weightLb: 4960, powerHp: 762, wdist: 48 },
  { name: "2020 Tesla Model S Performance", drive: "AWD", piClass: "S1", weightLb: 4883, powerHp: 778, wdist: 48 },
  // TOYOTA
  { name: "1985 Toyota Sprinter Trueno GT-Apex (AE86)", drive: "RWD", piClass: "D", weightLb: 2116, powerHp: 128, wdist: 54 },
  { name: "1992 Toyota Supra RZ", drive: "RWD", piClass: "A", weightLb: 3516, powerHp: 320, wdist: 53 },
  { name: "1993 Toyota MR2 GT", drive: "RWD", piClass: "C", weightLb: 2866, powerHp: 200, wdist: 43 },
  { name: "1994 Toyota Supra RZ", drive: "RWD", piClass: "A", weightLb: 3538, powerHp: 320, wdist: 53 },
  { name: "1998 Toyota Supra RZ", drive: "RWD", piClass: "A", weightLb: 3538, powerHp: 320, wdist: 53 },
  { name: "2001 Toyota Celica GT-S", drive: "FWD", piClass: "C", weightLb: 2513, powerHp: 180, wdist: 62 },
  { name: "2005 Toyota MR2", drive: "RWD", piClass: "C", weightLb: 2381, powerHp: 138, wdist: 42 },
  { name: "2010 Toyota Land Cruiser", drive: "AWD", piClass: "C", weightLb: 5715, powerHp: 381, wdist: 53 },
  { name: "2020 Toyota GR Supra", drive: "RWD", piClass: "A", weightLb: 3374, powerHp: 382, wdist: 50 },
  { name: "2022 Toyota GR86", drive: "RWD", piClass: "B", weightLb: 2822, powerHp: 228, wdist: 53 },
  { name: "2023 Toyota GR Corolla", drive: "AWD", piClass: "A", weightLb: 3472, powerHp: 300, wdist: 58 },
  { name: "2025 Toyota GR GT Prototype", drive: "RWD", piClass: "R", weightLb: 2200, powerHp: 1000, wdist: 40 },
  { name: "2025 Toyota Land Cruiser", drive: "AWD", piClass: "C", weightLb: 5070, powerHp: 409, wdist: 54 },
  { name: "Toyota Sprinter Trueno GT-Apex (AE86) Forza Edition", drive: "RWD", piClass: "X", weightLb: 2116, powerHp: 128, wdist: 54 },
  // VOLKSWAGEN
  { name: "1963 Volkswagen Beetle", drive: "RWD", piClass: "D", weightLb: 1896, powerHp: 40, wdist: 40 },
  { name: "1981 Volkswagen Scirocco S", drive: "FWD", piClass: "D", weightLb: 2227, powerHp: 74, wdist: 65 },
  { name: "1992 Volkswagen Golf GTI 16V", drive: "FWD", piClass: "D", weightLb: 2293, powerHp: 129, wdist: 65 },
  { name: "2011 Volkswagen Golf R", drive: "AWD", piClass: "B", weightLb: 3307, powerHp: 266, wdist: 62 },
  { name: "2013 Volkswagen Beetle Turbo", drive: "FWD", piClass: "C", weightLb: 3042, powerHp: 200, wdist: 60 },
  { name: "2016 Volkswagen Golf GTI Clubsport", drive: "FWD", piClass: "B", weightLb: 3086, powerHp: 261, wdist: 64 },
  { name: "2018 Volkswagen Polo GTI", drive: "FWD", piClass: "C", weightLb: 2855, powerHp: 200, wdist: 64 },
  { name: "2022 Volkswagen Golf R", drive: "AWD", piClass: "A", weightLb: 3307, powerHp: 316, wdist: 62 },
  // VOLVO
  { name: "2022 Volvo C40 Recharge", drive: "AWD", piClass: "B", weightLb: 4673, powerHp: 402, wdist: 50 },
  // VUHL
  { name: "2014 VUHL 05", drive: "RWD", piClass: "A", weightLb: 1455, powerHp: 285, wdist: 45 },
];

// ─── STATE ─────────────────────────────────────────────────────────────────────
let unit = 'imperial';
let drive = 'RWD';
let disc = 'road';
let prefs = { balance: 0, stiff: 0, gearing: 0, brake: 0 };
let autocompleteActive = -1;
let filteredCars = [];

// ─── UNIT TOGGLE ───────────────────────────────────────────────────────────────
function setUnit(u) {
  unit = u;
  document.getElementById('btn-imperial').classList.toggle('active', u === 'imperial');
  document.getElementById('btn-metric').classList.toggle('active', u === 'metric');
  const isM = u === 'metric';
  document.getElementById('lbl-weight').textContent = isM ? 'Weight (kg)' : 'Weight (lbs)';
  document.getElementById('lbl-power').textContent = isM ? 'Power (kW)' : 'Power (hp)';
  document.getElementById('lbl-topspeed').textContent = isM ? 'Target Top Speed (km/h, opt.)' : 'Target Top Speed (mph, opt.)';
  const wEl = document.getElementById('weight');
  const pEl = document.getElementById('power');
  const tsEl = document.getElementById('top-speed');
  if (wEl.value) wEl.value = isM ? Math.round(+wEl.value * 0.453592) : Math.round(+wEl.value * 2.20462);
  if (pEl.value) pEl.value = isM ? Math.round(+pEl.value * 0.7457) : Math.round(+pEl.value / 0.7457);
  if (tsEl.value) tsEl.value = isM ? Math.round(+tsEl.value * 1.60934) : Math.round(+tsEl.value / 1.60934);
}

// ─── DRIVETRAIN / DISCIPLINE ───────────────────────────────────────────────────
function setDrive(d) {
  drive = d;
  ['FWD', 'RWD', 'AWD'].forEach(x => document.getElementById('d-' + x).classList.toggle('active', x === d));
}

function setDisc(d) {
  disc = d;
  document.querySelectorAll('#disc-toggle button').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase().replace('-', '').startsWith(d.substring(0, 4)));
  });
  if (d === 'drift') { document.getElementById('s-balance').value = 3; updatePref('balance', 3); document.getElementById('s-gearing').value = -2; updatePref('gearing', -2); }
  else if (d === 'drag') { document.getElementById('s-gearing').value = 3; updatePref('gearing', 3); }
}

function updatePref(key, val) {
  prefs[key] = +val;
  document.getElementById('v-' + key).textContent = val > 0 ? '+' + val : val;
}

// ─── AUTOCOMPLETE ──────────────────────────────────────────────────────────────
const carInput = document.getElementById('car-name');
const dropdown = document.getElementById('car-dropdown');

carInput.addEventListener('input', () => {
  const q = carInput.value.trim().toLowerCase();
  dropdown.innerHTML = '';
  autocompleteActive = -1;
  if (!q || q.length < 2) { dropdown.style.display = 'none'; return; }
  filteredCars = CAR_DB.filter(c => c.name.toLowerCase().includes(q)).slice(0, 10);
  if (!filteredCars.length) { dropdown.style.display = 'none'; return; }
  filteredCars.forEach((car, i) => {
    const item = document.createElement('div');
    item.className = 'ac-item';
    const hl = car.name.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<strong>$1</strong>');
    item.innerHTML = `<span class="ac-name">${hl}</span><span class="ac-meta">${car.drive} · ${car.piClass}</span>`;
    item.addEventListener('mousedown', (e) => { e.preventDefault(); selectCar(i); });
    dropdown.appendChild(item);
  });
  dropdown.style.display = 'block';
});

carInput.addEventListener('keydown', (e) => {
  const items = dropdown.querySelectorAll('.ac-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') { e.preventDefault(); autocompleteActive = Math.min(autocompleteActive + 1, items.length - 1); items.forEach((el, i) => el.classList.toggle('active', i === autocompleteActive)); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); autocompleteActive = Math.max(autocompleteActive - 1, -1); items.forEach((el, i) => el.classList.toggle('active', i === autocompleteActive)); }
  else if (e.key === 'Enter' && autocompleteActive >= 0) { e.preventDefault(); selectCar(autocompleteActive); }
  else if (e.key === 'Escape') { dropdown.style.display = 'none'; }
});

carInput.addEventListener('blur', () => setTimeout(() => { dropdown.style.display = 'none'; }, 150));

function selectCar(index) {
  const car = filteredCars[index];
  if (!car) return;
  carInput.value = car.name;
  dropdown.style.display = 'none';
  setDrive(car.drive);
  document.getElementById('pi-class').value = car.piClass;
  const wLb = car.weightLb;
  const pHp = car.powerHp;
  document.getElementById('weight').value = unit === 'metric' ? Math.round(wLb * 0.453592) : wLb;
  document.getElementById('power').value = unit === 'metric' ? Math.round(pHp * 0.7457) : pHp;
  document.getElementById('wdist').value = car.wdist;
}

// ─── HELPERS ───────────────────────────────────────────────────────────────────
function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
function f(v, dec = 2) { return (+v).toFixed(dec); }
function psi(v) { return unit === 'metric' ? f(v * 0.0689476, 2) + ' bar' : f(v, 1) + ' PSI'; }
function inOrMm(v) { return unit === 'metric' ? f(v * 25.4, 0) + ' mm' : f(v, 1) + ' in'; }
function lbOrN(v) { return unit === 'metric' ? Math.round(v * 175.127) + ' N/mm' : Math.round(v) + ' lb/in'; }

// ─── GENERATE ──────────────────────────────────────────────────────────────────
function generateTune() {
  const weightRaw = +document.getElementById('weight').value;
  const wdist = +document.getElementById('wdist').value || 50;
  const powerRaw = +document.getElementById('power').value;
  const piClass = document.getElementById('pi-class').value;
  const compound = document.getElementById('tire-compound').value;
  const aero = document.getElementById('aero').value;
  const maxRpm = +document.getElementById('max-rpm').value || 7500;
  const trans = document.getElementById('trans').value;
  const gearCount = +document.getElementById('gears').value;
  const topSpeedRaw = +document.getElementById('top-speed').value || 0;
  const carName = document.getElementById('car-name').value.trim() || 'Your Car';

  const weightLb = unit === 'metric' ? weightRaw * 2.20462 : weightRaw;
  const powerHp = unit === 'metric' ? powerRaw / 0.7457 : powerRaw;
  const topSpeedMph = unit === 'metric' ? topSpeedRaw / 1.60934 : topSpeedRaw;

  if (!weightLb || !powerHp) { alert('Please enter at least Weight and Power.'); return; }

  const wFront = wdist / 100;
  const wRear = 1 - wFront;
  const balance = prefs.balance;
  const stiff = prefs.stiff;
  const gearPref = prefs.gearing;
  const brakePref = prefs.brake;

  // TIRES
  const basePsi = { street: 28, sport: 27, semi: 28, race: 29, rally: 24, offroad: 22, drift: 30, drag: 28 }[compound] || 27;
  const discPsiMod = { road: 0, touge: -1, rally: -3, offroad: -4, drag: 1, drift: 2 }[disc] || 0;
  const heavyMod = weightLb > 4000 ? 1.5 : weightLb > 3000 ? 0.5 : 0;
  let frontPsi = clamp(basePsi + discPsiMod + heavyMod + (balance * -0.3), 18, 38);
  let rearPsi = clamp(basePsi + discPsiMod + heavyMod + (balance * 0.3), 18, 38);
  if (disc === 'drift') { frontPsi = clamp(frontPsi + 1, 18, 38); rearPsi = clamp(rearPsi - 2, 18, 38); }

  // ALIGNMENT
  const baseFCamber = -1.8 - (balance * 0.05);
  const baseRCamber = -1.3 - (balance * 0.03);
  const discCamberMod = { road: 0, touge: -0.2, rally: 0.3, offroad: 0.5, drag: 1.2, drift: -0.5 }[disc] || 0;
  const fCamber = clamp(baseFCamber + discCamberMod, -5.0, 0);
  const rCamber = clamp(baseRCamber + discCamberMod * 0.7, -5.0, 0);
  const fToe = disc === 'drag' ? 0.0 : clamp(0.1 + balance * 0.02, -1.0, 1.0);
  const rToe = disc === 'drift' ? clamp(-0.1 - balance * 0.03, -1.0, 1.0) : disc === 'drag' ? 0.0 : clamp(-0.1, -1.0, 1.0);
  const caster = clamp(5.5 + (disc === 'drift' ? 0.5 : 0) - (balance * 0.1), 1.0, 7.0);

  // SPRINGS
  const baseSpring = weightLb * 0.22;
  const discSpringMod = { road: 1.0, touge: 1.1, rally: 0.75, offroad: 0.65, drag: 0.85, drift: 0.9 }[disc] || 1.0;
  const stiffMod = 1 + stiff * 0.06;
  const fSpring = clamp(baseSpring * discSpringMod * stiffMod * (0.85 + wFront * 0.3) * (1 - balance * 0.03), 50, 2500);
  const rSpring = clamp(baseSpring * discSpringMod * stiffMod * (0.85 + wRear * 0.3) * (1 + balance * 0.03), 50, 2500);

  // RIDE HEIGHT
  const baseRH = { road: 5.0, touge: 4.8, rally: 7.5, offroad: 9.0, drag: 4.5, drift: 5.2 }[disc] || 5.0;
  const fRideH = clamp(baseRH - stiff * 0.1 + (balance * 0.05), 2.0, 15.0);
  const rRideH = clamp(baseRH - stiff * 0.1 - (balance * 0.08), 2.0, 15.0);

  // DAMPERS
  const fRebound = clamp((fSpring * 0.012) * 1.65 * (1 + stiff * 0.04), 1.0, 20.0);
  const rRebound = clamp((rSpring * 0.012) * 1.65 * (1 + stiff * 0.04), 1.0, 20.0);
  const fBump = clamp(fRebound * 0.58, 1.0, 20.0);
  const rBump = clamp(rRebound * 0.58, 1.0, 20.0);

  // ARBs
  const arbBase = weightLb * 0.004;
  const discArbMod = { road: 1.0, touge: 1.05, rally: 0.7, offroad: 0.6, drag: 0.5, drift: 1.3 }[disc] || 1.0;
  let fArb = clamp(arbBase * discArbMod * (1 + stiff * 0.05) * (1 + balance * 0.04), 1.0, 65.0);
  let rArb = clamp(arbBase * discArbMod * (1 + stiff * 0.05) * (1 - balance * 0.04), 1.0, 65.0);
  if (disc === 'drift') { fArb = clamp(fArb * 1.1, 1, 65); rArb = clamp(rArb * 0.75, 1, 65); }

  // AERO
  const piAeroMap = { D: 0, C: 0, B: 40, A: 80, S1: 130, S2: 200, X: 280, R: 350 };
  const maxAero = piAeroMap[piClass] || 80;
  const discAeroFront = { road: 0.35, touge: 0.4, rally: 0.3, offroad: 0.2, drag: 0.15, drift: 0.5 }[disc] || 0.35;
  const discAeroRear = { road: 0.55, touge: 0.6, rally: 0.45, offroad: 0.3, drag: 0.2, drift: 0.7 }[disc] || 0.55;
  const aeroBalAdj = balance * 0.02;
  const frontAero = aero === 'none' || aero === 'rear' ? 'N/A' : Math.round(maxAero * (discAeroFront + aeroBalAdj));
  const rearAero = aero === 'none' || aero === 'front' ? 'N/A' : Math.round(maxAero * (discAeroRear + aeroBalAdj));

  // BRAKES
  const baseBiasF = drive === 'FWD' ? 54 : drive === 'AWD' ? 52 : 50;
  const discBiasMod = { road: 0, touge: -1, rally: 1, offroad: 2, drag: -2, drift: -3 }[disc] || 0;
  const brakeBias = clamp(baseBiasF + discBiasMod + balance * -0.5 + brakePref * 0.5, 40, 65);
  const brakePressure = clamp(92 + brakePref * 2 + (disc === 'drift' ? -10 : 0), 60, 130);

  // DIFFERENTIAL
  const diffAccBase = { road: 25, touge: 30, rally: 35, offroad: 40, drag: 70, drift: 65 }[disc] || 25;
  const diffDecBase = { road: 20, touge: 22, rally: 25, offroad: 28, drag: 15, drift: 15 }[disc] || 20;
  const driveAccMod = drive === 'FWD' ? -5 : drive === 'AWD' ? 5 : 0;
  const fDiffAcc = clamp(diffAccBase + driveAccMod + balance * 2.5, 0, 100);
  const fDiffDec = clamp(diffDecBase + balance * 1.5, 0, 100);
  const rDiffAcc = clamp(diffAccBase + 10 + balance * 2.5, 0, 100);
  const rDiffDec = clamp(diffDecBase + balance * 1.5, 0, 100);
  const centerDiff = drive === 'AWD' ? clamp(65 + balance * 3, 50, 90) : null;

  // GEARING
  const targetMph = topSpeedMph > 0 ? topSpeedMph : { D: 90, C: 110, B: 130, A: 155, S1: 185, S2: 220, X: 260, R: 240 }[piClass] || 155;
  const gearFocusMod = 1 + gearPref * 0.04;
  const finalDrive = clamp((maxRpm * 0.00245) / (targetMph * gearFocusMod), 2.0, 6.5);
  const ratios = [];
  if (trans === 'race') {
    const baseRatio = finalDrive * (disc === 'drag' ? 2.8 : disc === 'drift' ? 3.2 : 3.0);
    for (let g = 0; g < gearCount; g++) {
      ratios.push(clamp(baseRatio * Math.pow(1 + (gearPref < 0 ? 0.08 : 0.04), -(g / (gearCount - 1)) * (gearCount - 1) * 0.22), 0.5, 6.0));
    }
  }

  // RENDER
  document.getElementById('empty-state').style.display = 'none';
  const out = document.getElementById('tune-output');
  out.style.display = 'flex';
  const discLabels = { road: 'Road', touge: 'Touge', rally: 'Rally', offroad: 'Off-road', drag: 'Drag', drift: 'Drift' };

  out.innerHTML = `
    <div class="out-header">
      <div class="out-car-name">${carName}</div>
      <button class="copy-btn" onclick="copyTune()">Copy Tune</button>
    </div>
    <div class="out-meta">
      <span class="badge accent">${piClass} Class</span>
      <span class="badge">${drive}</span>
      <span class="badge">${discLabels[disc]}</span>
      <span class="badge">${compound.charAt(0).toUpperCase() + compound.slice(1)} Tires</span>
      <span class="badge">${unit === 'metric' ? Math.round(powerHp * 0.7457) + ' kW' : Math.round(powerHp) + ' hp'} / ${unit === 'metric' ? Math.round(weightLb * 0.453592) + ' kg' : Math.round(weightLb) + ' lb'}</span>
    </div>
    <div class="out-three">
      <div class="out-section">
        <div class="out-section-title">Tires & Alignment</div>
        <div class="out-row"><span class="out-key">Front Tire Pressure</span><span class="out-val accent">${psi(frontPsi)}</span></div>
        <div class="out-row"><span class="out-key">Rear Tire Pressure</span><span class="out-val accent">${psi(rearPsi)}</span></div>
        <div class="divider"></div>
        <div class="out-row"><span class="out-key">Front Camber</span><span class="out-val">${f(fCamber, 1)}°</span></div>
        <div class="out-row"><span class="out-key">Rear Camber</span><span class="out-val">${f(rCamber, 1)}°</span></div>
        <div class="out-row"><span class="out-key">Front Toe</span><span class="out-val">${f(fToe, 2)}°</span></div>
        <div class="out-row"><span class="out-key">Rear Toe</span><span class="out-val">${f(rToe, 2)}°</span></div>
        <div class="out-row"><span class="out-key">Caster</span><span class="out-val">${f(caster, 1)}°</span></div>
      </div>
      <div class="out-section">
        <div class="out-section-title">Suspension</div>
        <div class="out-row"><span class="out-key">Front Spring</span><span class="out-val accent">${lbOrN(fSpring)}</span></div>
        <div class="out-row"><span class="out-key">Rear Spring</span><span class="out-val accent">${lbOrN(rSpring)}</span></div>
        <div class="out-row"><span class="out-key">Front Ride Height</span><span class="out-val">${inOrMm(fRideH)}</span></div>
        <div class="out-row"><span class="out-key">Rear Ride Height</span><span class="out-val">${inOrMm(rRideH)}</span></div>
        <div class="divider"></div>
        <div class="out-row"><span class="out-key">Front ARB</span><span class="out-val">${f(fArb, 1)}</span></div>
        <div class="out-row"><span class="out-key">Rear ARB</span><span class="out-val">${f(rArb, 1)}</span></div>
      </div>
      <div class="out-section">
        <div class="out-section-title">Dampers</div>
        <div class="out-row"><span class="out-key">Front Bump</span><span class="out-val accent">${f(fBump, 1)}</span></div>
        <div class="out-row"><span class="out-key">Front Rebound</span><span class="out-val accent">${f(fRebound, 1)}</span></div>
        <div class="out-row"><span class="out-key">Rear Bump</span><span class="out-val">${f(rBump, 1)}</span></div>
        <div class="out-row"><span class="out-key">Rear Rebound</span><span class="out-val">${f(rRebound, 1)}</span></div>
        <div class="divider"></div>
        <div class="out-row" style="font-size:11px;color:var(--muted)"><span>Bump = 58% of Rebound</span></div>
      </div>
    </div>
    <div class="out-three">
      <div class="out-section">
        <div class="out-section-title">Aero & Brakes</div>
        <div class="out-row"><span class="out-key">Front Downforce</span><span class="out-val blue">${frontAero}</span></div>
        <div class="out-row"><span class="out-key">Rear Downforce</span><span class="out-val blue">${rearAero}</span></div>
        <div class="divider"></div>
        <div class="out-row"><span class="out-key">Brake Balance</span><span class="out-val accent">${f(brakeBias, 0)}% Front</span></div>
        <div class="out-row"><span class="out-key">Brake Pressure</span><span class="out-val accent">${f(brakePressure, 0)}%</span></div>
      </div>
      <div class="out-section">
        <div class="out-section-title">Differential</div>
        ${drive === 'AWD' ? `<div class="out-row"><span class="out-key">Center Balance</span><span class="out-val accent">${Math.round(centerDiff)}% Rear</span></div><div class="divider"></div>` : ''}
        <div class="diff-row"><div></div><div class="dr-hdr">Accel</div><div class="dr-hdr">Decel</div></div>
        ${drive !== 'FWD' ? `<div class="diff-row"><div class="dr-key">Rear</div><div class="dr-val accent">${Math.round(rDiffAcc)}%</div><div class="dr-val">${Math.round(rDiffDec)}%</div></div>` : ''}
        ${drive !== 'RWD' ? `<div class="diff-row"><div class="dr-key">Front</div><div class="dr-val accent">${Math.round(fDiffAcc)}%</div><div class="dr-val">${Math.round(fDiffDec)}%</div></div>` : ''}
        ${drive === 'RWD' ? `<div class="diff-row"><div class="dr-key">Rear</div><div class="dr-val accent">${Math.round(rDiffAcc)}%</div><div class="dr-val">${Math.round(rDiffDec)}%</div></div>` : ''}
      </div>
      <div class="out-section">
        <div class="out-section-title">Gearing</div>
        <div class="out-row"><span class="out-key">Final Drive</span><span class="out-val accent">${f(finalDrive, 2)}</span></div>
        <div class="out-row"><span class="out-key">Est. Top Speed</span><span class="out-val">${unit === 'metric' ? Math.round(targetMph * 1.60934) + ' km/h' : Math.round(targetMph) + ' mph'}</span></div>
        ${trans === 'race' && ratios.length ? `
        <div class="divider"></div>
        <div class="gear-grid">
          ${ratios.map((r, i) => `<div class="gear-cell"><div class="gear-num">G${i + 1}</div><div class="gear-ratio">${f(r, 2)}</div></div>`).join('')}
        </div>` : `<div style="font-size:12px;color:var(--muted);margin-top:6px;">Set transmission to Race for gear ratios.</div>`}
      </div>
    </div>
    <div class="note-box">
      <strong>Notes for ${discLabels[disc]}:</strong>
      ${disc === 'drift' ? 'High diff acceleration keeps the rear loose on exit. Raise rear tire pressure slightly for faster initiation. Lower brake pressure helps with clutch-kick.' :
        disc === 'drag' ? 'Keep the car planted — raise front tire pressure if the nose lifts. Final drive is critical; tune it to your launch RPM.' :
        disc === 'rally' ? 'Soft springs and low tire pressure absorb surface changes. Higher diff accel helps on loose surfaces.' :
        disc === 'offroad' ? 'Ride height is set higher to avoid grounding. Soft ARBs let all four wheels work independently over rough terrain.' :
        disc === 'touge' ? 'Japan\'s mountain passes need strong braking and clean rotation. ARBs are dialled to help mid-corner rotation.' :
        'Balanced for Japan\'s road layout. Adjust ARBs first if you notice persistent understeer or oversteer.'}
      — ARBs are your quickest fix in-game: stiffer front = less oversteer, stiffer rear = less understeer.
    </div>`;
}

function copyTune() {
  const carName = document.getElementById('car-name').value.trim() || 'Car';
  const rows = document.querySelectorAll('.out-row');
  let text = `FH6 Tune — ${carName}\n${'='.repeat(40)}\n`;
  rows.forEach(r => {
    const k = r.querySelector('.out-key');
    const v = r.querySelector('.out-val');
    if (k && v) text += `${k.textContent.padEnd(22)} ${v.textContent}\n`;
  });
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy Tune', 1800);
  });
}
