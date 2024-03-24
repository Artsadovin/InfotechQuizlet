CREATE TABLE user
(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `nickname` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `avatar_id` INT NOT NULL DEFAULT 1,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;

CREATE TABLE quiz_card
(
    `quiz_id` INT NOT NULL,
    `eng_word` VARCHAR(255) NOT NULL,
    `rus_word` VARCHAR(255) NOT NULL
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;

CREATE TABLE quiz
(
    `quiz_id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`quiz_id`)
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;
