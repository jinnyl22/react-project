// 모듈을 모아놓고 관리하는 곳
const express = require("express");
const session = require("express-session");
const dot = require("dotenv");
const mailer = require("nodemailer");

module.exports = { express, session, dot, mailer };
