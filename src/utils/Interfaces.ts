import {Component} from "preact";
import WebSocketHolder from "./WebSocketHolder";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export interface User {
    id: string;
    username: string;
    discrim: string;
    globalAdmin: boolean;
    avatar_url: string;
}

export interface UserHolder {
    user?: User
}

export interface AppState {
    user: User;
    generalInfo: GeneralApiInfo;
    lang_strings: any;
    loading: boolean;
    websocket: WebSocketHolder;
    pluralRules: Intl.PluralRules;
}

export interface HeaderProps {
    user?: User;
}

export interface HeaderState {
    menuActive: boolean
}

export interface BasicGuildInfo {
    id: string
    name: string;
    permissions: number;
    icon: string;
}

export interface APIGuildInfo {
    id: string
    name: string;
    icon: string;
}

export interface GuildMap {
    [guid: string]: BasicGuildInfo
}

export interface AllGuildMap {
    [guid: string]: APIGuildInfo
}


export interface GuildProps {
    guild: BasicGuildInfo | APIGuildInfo;
    type: "SETTINGS" | "ADD";
}

export interface GuildRouteProps {
    gid: string;
    tab?: string;
}

export interface GuildUserPerms {
    user_dash_perms: number;
    user_level: number;
}

export interface GuildRouteState {
    loading: boolean;
    guild_info: DetailedGuildInfo;
    user_perms: GuildUserPerms;
}

export interface GuildListRouteState {
    guilds: GuildMap;
    all_guilds: AllGuildMap;
}

export interface Owner {
    id: string;
    name: string;
}

export interface Emoji {
    id: string;
    name: string;
    color: number
}

export interface Statuses {
    online: number;
    idle: number;
    dnd: number;
    offline: number;
}

export interface Role {
    id: string;
    name: string;
    color: string;
    members: number;
    is_admin: boolean;
    is_mod: boolean;
}

export interface Channel {
    name: string;
    can_log: boolean;
}

export interface ChannelMap {
    [id: string]: Channel
}

export interface DetailedGuildInfo {
    id: string;
    name: string;
    icon: string;
    owner: Owner;
    members: number;
    text_channels: ChannelMap;
    additional_text_channels: ChannelMap
    voice_channels: number;
    creation_date: string;
    age_days: number;
    vip_features: string[];
    role_list: Role[]
    emojis: Emoji[];
    member_statuses: Statuses;
}

export interface NavProps {
    tab: string;
    tabs: string[]
}

export interface GeneralSettings {
    LANG: string;
    NEW_USER_THRESHOLD: number;
    PERM_DENIED_MESSAGE: boolean;
    PREFIX: string;
    TIMESTAMPS: boolean
    TIMEZONE: string
}

export interface LangMap {
    [code: string]: string
}

export interface LoggingMap {
    [code: string]: string[];
}

export interface GeneralApiInfo {
    languages: LangMap;
    logging: LoggingMap
}

export interface LoadingInterface {
    loading: boolean
}

export interface GuildSettingsSectionState extends LoadingInterface {
    old_values: GeneralSettings;
    new_values: GeneralSettings;
    saving: boolean;
}


export interface ConfigField {
    name: string;
    info: string;
    Component: Component

    visible?(values): boolean;

    validator?(value): boolean | string;

    extra_props?: any;
}

export interface FieldMap {
    [name: string]: ConfigField
}

export interface GuildSettingsSectionProps {
    name: string
    fields: ConfigField[];
}

export interface SettingsComponentProps {
    value: any;
    setter: any;
    name: string;
    changed: boolean;
    disabled: boolean;

    validator?(value): boolean | string;

    all_values: any;
}

export interface GuildRoleSelectorProps extends SettingsComponentProps {
    extra_check?: string;
}

export interface BasicInputComponentProps extends SettingsComponentProps {
    type: string
}

export interface GuildLogoProps {
    link: string;
    size: SizeProp;
}

export interface RoleListProps extends SettingsComponentProps {
    type: string;
    extra_check: string;
}

export interface RoleComponentProps {
    role: Role;

    remover?(value: string): void;
}

export interface RolePickerComponents {
    roles: Role[];
    selected?: string;
    button_text?: string;

    receiver(r: string): void;

    disabled: boolean;
    extra_check?: string;
}

export interface RolePickerState {
    selected?: string;
}

export interface MuteComponentState {
    cleaned: boolean;
    setup: boolean;
}

export interface PermLevelSelectorProps extends SettingsComponentProps {
    min: number;
    min_value?: string;
}

export interface ThemeState {
    theme: "light" | "dark";
}

export interface LogChannelInfo {
    channel: string;
    CATEGORIES: string[];
    DISABLED_KEYS: string[];
}

export interface LogChannelProps {
    info: LogChannelInfo;
    selectedChannels: string[];
    disabled: boolean;
    index: string;

    infoSetter(i: LogChannelInfo): void;

    remover();

}

export interface LogCategoryProps {
    info: LogChannelInfo;
    channel: string;
    index: string;

    infoSetter(i: LogChannelInfo): void;
}

export interface ChannelSelectorProps {
    selected?: string;
    selectedChannels: string[];
    disabled: boolean;
    requirement?: string;

    setter(new_value: string): void;

    remover();

}

export interface MainRouterProps {
    url: any;
    setUrl: any;
}

export interface InfoTooltipProps {
    name: string
    placeholder?: string;
}

export interface CollapsibleCardProps {
    header: any;
    body: any;
    style?: object;
}

export interface CollapsibleCardState {
    expanded: boolean;
}

export interface LogChannelSectionState {
    loading: boolean;
    old_values?: any[]
    new_values?: any[]
    saving: boolean;
}

export interface StatProps {
    name: string;
    value: string;
}

interface Stats {
    start_time: string;
    user_mesages: string;
    bot_messages: string;
    own_messages: string;
    total_members: string;
    unique_members: string;
    taco_count: string;
    random_number: number;
    commands_executed: string;
    custom_commands_executed: string;
    guilds: number;
}

export interface StatsRouteState extends LoadingInterface{
    stats: Stats;
    uptime_parts: Component[];
    interval;
}