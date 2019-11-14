#!/usr/bin/env node
'use strict';

const cms = require('@devcms/core');
const admin = require('@devcms/admin');
const server = require('@devcms/server');

server.spawn('api', cms.config.get('server.api')).mount(cms.app);
server.spawn('admin', cms.config.get('server.admin')).mount(admin.app);

server.start();
