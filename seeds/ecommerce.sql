CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
productImg VARCHAR(255) NOT NULL,
title VARCHAR (255) NOT NULL,
content TEXT NOT NULL,
releaseDate VARCHAR(255) NOT NULL,
price INT(11) NOT NULL
);

INSERT INTO products (productImg, title, content, releaseDate, price)
VALUES
("../images/air-jordan-1.webp", "Jordan 1 Retro High OG Bordeaux", "The Air Jordan High Bordeaux features a white with Bordeaux overlays and metallic sliver Swooshes. From there, matching woven tongue labels and a Wings logo on the collar nod to the original 1985 Jordan 1 desgin.", "Release Date - 11/20/2021", 198),
("../images/Jordanblue2.webp", "Jordan 1 Retro High White University Blue Black", "Jordan Brand paid homage to MJ’s alma mater with the Air Jordan 1 High University Blue. The University Blue colorway is prominent in the Jordan 1’s history. The first UNC-inspired Jordan 1 dates back to 1985 when the Jordan 1 debuted. Since then, there have been numerous", "Release Date - 03/06/2021", 479),
("../images/Air-Jordan-3.webp", "Jordan 1 Retro High Pollen", "In a simple two-tone format, the upper of the Air Jordan 1 High Pollen is constructed of black tumbled leather with Pollen Yellow overlays and Swooshes. Matching woven tongue tags and a Jordan Wings logo on the collar add authentic 1980s detailing.", "Release Date - 08/14/2021", 200),
("../images/jordan-4.jpeg", "Jordan 1 Mid Banned (2020)", "The Air Jordan 1 Mid Banned (2020) takes the classic Banned colorway of the high-top Jordan 1 and applies it to the mid-cut sneaker.", "Release Date - 11/12/2020", 173),
("../images/jordan5.jpeg", "Jordan 1 Retro High OG Seafoam (W)", "The women's Air Jordan 1 High Seafoam (W) arrives in a smooth white leather construction with Seafoam Durabuck overlays and Swooshes. On the laces, crisp bronze trimming stands out against the design's subtle coloration. The women's Air Jordan 1 High Seafoam (W) released in August of 2021 and retailed for $170.", "Release Date - 08/12/2021", 252),
("../images/jordan6.webp", "Jordan 1 Retro AJKO Storm Blue", "In a traditional AJKO canvas fabrication, the Air Jordan 1 KO Storm Blue features a white upper with Storm Blue overlays and black Swooshes. From there, a matching woven Nike Air tongue label and sole completes the retro design.", "Release Date - 09/29/2021", 158),
("../images/jordan7.webp", "Jordan 1 Retro High OG Prototype", "Jordan Brand encourages sneaker customization with the Air Jordan 1 Prototype. With a perforated line separating the collar from the rest of the upper, the Air Jordan 1 Prototype can be worn as a high-top or low-top if you choose to safely cut the collar away. White leather construction with multicolor leather and Durabuck overlays further amplify the DIY appeal of the design.", "Release Date - 09/24/2021", 237),
("../images/jordan8.jpeg", "Jordan 1 Retro High OG Bred Patent", "The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature weaved Nike Air tongue labels. From there, a classic Wings logo on the collar and a white with red Air sole complete the retro design.", "Release Date - 12/30/2021", 500),
("../images/jordan9.jpeg", "Jordan 1 Retro High Tie Dye (W)", "Jordan Brand adds a psychedelic twist to a classic silhouette with the women's Jordan 1 Retro High Tie Dye (W), now available on StockX This release is a women’s exclusive, similar to the Jordan 1 Satin Shattered Backboard (W) and Jordan 1 Satin Black Toe (W). The Jwomen's ordan", "Release Date - 06/26/2020", 315),
("../images/air-jordan-1.webp", "Jordan 1 Retro High Shadow (2018)", "Despite the name, the Air Jordan 1 Shadows are a pair that will put any fit of yours firmly in the spotlight. This very rare OG colorway has now hit shelves only three times, making these a must-own for any AJ1 collector.", "Release Date - 04/14/2018", 544),
("../images/jordan11.webp", "Jordan 1 Retro High Travis Scott", "Grab a pack of coffee beans to match the Jordan 1 Retro High Travis Scott. This AJ1 comes with a brown upper plus white accents, black Nike 'Swoosh', sail midsole, and a brown sole. These sneakers released in May 2019 and retailed for $175.", "Release Date - 05/11/2019", 1840),
("../images/jordan12.webp", "Jordan 1 Retro High Bred Banned (2016)", "2016 marks the first time in 3 years that the Air Jordan Retro 1 High OG 'Bred' colorway returns. There seems to be Air Jordan 1 colorways released every year but none carry the prestige of the classic Chicago-inspired versions like the black and Varsity Red version commonly referred to as the 'banned' Air Jordans.", "Release Date - 09/03/2016", 979);

SELECT * FROM products;