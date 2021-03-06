import AppConfig from '../interfaces/AppConfig';
import {ApplicationConstants} from '../constant/ApplicationConstants';

const DEFAULT_REDIS_PORT = 6379;
const DEFAULT_PORT: number = 3000;

const {
    PDF_GENERATOR_LOG_LEVEL,
    PDF_GENERATOR_PORT,
    KEYCLOAK_URI,
    PDF_GENERATOR_KEYCLOAK_CLIENT_ID,
    KEYCLOAK_REALM,
    PDF_GENERATOR_KEYCLOAK_CLIENT_SECRET,
    PDF_GENERATOR_KEYCLOAK_SESSION_SECRET,
    REDIS_PORT,
    REDIS_URI,
    REDIS_TOKEN,
    REDIS_SSL,
    PDF_GENERATOR_AWS_S3_ENDPOINT,
    PDF_GENERATOR_AWS_S3_PDF_BUCKETNAME,
    PDF_GENERATOR_AWS_S3_KMS_KEY,
    PDF_GENERATOR_AWS_S3_ACCESS_KEY,
    PDF_GENERATOR_AWS_S3_SECRET_KEY,
    PDF_GENERATOR_AWS_S3_PROTOCOL,
    PDF_GENERATOR_AWS_S3_PORT,
    PDF_GENERATOR_AWS_S3_REGION,
    PDF_GENERATOR_CORRELATION_ID_REQUEST_HEADER,
    PDF_GENERATOR_ARENA_ACCESS_ROLES,
    PDF_GENERATOR_ARENA_PORT,
} = process.env;

const defaultAppConfig: AppConfig = {
    logLevel: PDF_GENERATOR_LOG_LEVEL || 'info',
    port: PDF_GENERATOR_PORT ? +PDF_GENERATOR_PORT : DEFAULT_PORT,
    arena: {
        port: +PDF_GENERATOR_ARENA_PORT,
        accessRoles: PDF_GENERATOR_ARENA_ACCESS_ROLES ?
            PDF_GENERATOR_ARENA_ACCESS_ROLES.split(',') : [],
    },
    keycloak: {
        sessionSecret: PDF_GENERATOR_KEYCLOAK_SESSION_SECRET,
        uri: KEYCLOAK_URI || 'http://localhost:8080/auth',
        realm: KEYCLOAK_REALM || 'elf',
        client: {
            secret: PDF_GENERATOR_KEYCLOAK_CLIENT_SECRET,
            id: PDF_GENERATOR_KEYCLOAK_CLIENT_ID,
        },
    },
    redis: {
        port: REDIS_PORT ? +REDIS_PORT : DEFAULT_REDIS_PORT,
        host: REDIS_URI || '127.0.0.1',
        token: REDIS_TOKEN,
        ssl: REDIS_SSL ? REDIS_SSL === 'true' : false,
    },
    aws: {
        s3: {
            protocol: PDF_GENERATOR_AWS_S3_PROTOCOL || 'https://',
            endpoint: PDF_GENERATOR_AWS_S3_ENDPOINT || '127.0.0.1',
            kmsKey: PDF_GENERATOR_AWS_S3_KMS_KEY,
            buckets: {
                pdf: PDF_GENERATOR_AWS_S3_PDF_BUCKETNAME || 'pdf',
            },
            region: PDF_GENERATOR_AWS_S3_REGION || 'eu-west-2',
            useSSL: true,
            port: +PDF_GENERATOR_AWS_S3_PORT,
            accessKey: PDF_GENERATOR_AWS_S3_ACCESS_KEY,
            secretKey: PDF_GENERATOR_AWS_S3_SECRET_KEY,
        },
    },
    correlationIdRequestHeader: PDF_GENERATOR_CORRELATION_ID_REQUEST_HEADER
        || ApplicationConstants.DEFAULT_CORRELATION_REQUEST_ID,

};

export default defaultAppConfig;
