CREATE database IF NOT EXISTS figurine_collection;

USE figurine_collection;

DROP TABLE IF EXISTS it_armies_squads;

DROP TABLE IF EXISTS it_figurines_armies;

DROP TABLE IF EXISTS figurines;

DROP TABLE IF EXISTS squads;

DROP TABLE IF EXISTS armies;

DROP TABLE IF EXISTS games;

DROP TABLE IF EXISTS users;

CREATE TABLE
  users (
    id INT PRIMARY KEY,
    nickname VARCHAR(32),
    password VARCHAR(32)
  );

CREATE TABLE
  games (
    id INT PRIMARY key,
    name VARCHAR(50),
    description VARCHAR(50),
    rules VARCHAR(50) DEFAULT NULL, -- => URL link to the rule book if there is
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users (id)
  );

CREATE TABLE
  armies (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    max_cost INT,
    -- current_cost decimal(4, 1), ?
    id_user INT,
    id_game INT,
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_game) REFERENCES games (id)
  );

CREATE TABLE
  squads (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    army_cost DECIMAL(4, 1)
  );

CREATE TABLE
  figurines (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    hp DECIMAL(3, 1),
    damage VARCHAR(50),
    mouvement VARCHAR(50),
    army_cost DECIMAL(3, 1),
    id_user INT,
    id_game INT,
    id_squad INT,
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_game) REFERENCES games (id),
    FOREIGN KEY (id_squad) REFERENCES squads (id)
  );

-- intermediate tables --
CREATE TABLE
  it_figurines_armies (
    id_army INT,
    id_figurine INT,
    FOREIGN KEY (id_army) REFERENCES armies (id),
    FOREIGN KEY (id_figurine) REFERENCES figurines (id),
    PRIMARY KEY (id_figurine, id_army)
  );

CREATE TABLE
  it_armies_squads (
    id_army INT,
    id_squad INT,
    FOREIGN KEY (id_army) REFERENCES armies (id),
    FOREIGN KEY (id_squad) REFERENCES squads (id),
    PRIMARY KEY (id_army, id_squad)
  );