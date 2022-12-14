export type Device = 'desktop' | 'tablet' | 'mobile'

type MobileDeviceName =
    'iphone'
    | 'android'
    | 'blackerry'
    | 'mini'
    | 'iemobile'

type TabletDeviceName =
    'ipad'
    | 'ipod'
    | 'x11'

type DesktopDeviceName =
    'macintosh'
    | 'windows'
    | 'linux'


export type DeviceName =
    MobileDeviceName
    | TabletDeviceName
    | DesktopDeviceName

const mobileCriteria: MobileDeviceName[] = [
    'iphone', 'android', 'blackerry', 'mini', 'iemobile'
]

const tabletCriteria: TabletDeviceName[] = [
    'ipad', 'ipod', 'x11'
]

const desktopCriteria: DesktopDeviceName[] = [
    'macintosh', 'windows', 'linux'
]

export default function ua(): {
    device: Device
    touchableDevice: boolean
    deviceName: DeviceName | null
} {

    const userAgent = window?.navigator?.userAgent

    if (!userAgent) throw new Error('object window does not exist')

    let device: Device = 'desktop'
    let deviceName: DeviceName | null = null

    if (!mobileCriteria.every(criteria => !~userAgent.toLowerCase().indexOf(criteria))) {
        device = 'mobile'
    } else if (!tabletCriteria.every(criteria => !~userAgent.toLowerCase().indexOf(criteria))) {
        device = 'tablet'
    }

    desktopCriteria.forEach(criteria => {
        if (userAgent.toLowerCase().includes(criteria)) deviceName = criteria
    })

    tabletCriteria.forEach(criteria => {
        if (userAgent.toLowerCase().includes(criteria)) deviceName = criteria
    })

    mobileCriteria.forEach(criteria => {
        if (userAgent.toLowerCase().includes(criteria)) deviceName = criteria
    })

    return {
        device,
        touchableDevice: ('ontouchstart' in window),
        deviceName
    }
}
