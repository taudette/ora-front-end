import React from 'react';

const BASE_API = "http://private-anon-c3d910f372-orachallenge.apiary-mock.com/api/v1/"

//TODO: figure out how many messages to load
export const API_MAP = {
    newSession: BASE_API + 'sessions',
    loadMessages: BASE_API + 'messages?page[number]=1&page[size]=3',
    postMessage: BASE_API + 'messages'
}

export const chatHeaders = {
    'Authorization': 'Bearer BBJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8',
    'content-type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json',
}

export const sessionHeaders = {
    'content-type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json',
}

