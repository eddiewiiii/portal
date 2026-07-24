export interface FmSong {
  title: string;
  artist: string;
  album: string;
  cover?: string; // 可选：手动指定封面直链（iTunes 没有的歌用）
  review: { en: string; zh: string };
}

export const fmSongs: FmSong[] = [
  {
    title: `False God`,
    artist: `Taylor Swift`,
    album: `Lover`,
    review: {
      en: `The chapel is a motel bathroom with one flickering bulb. You kneel on cold tile while he bandages your wrist from the glass you broke on purpose. "Say you need me," he whispers. You do. Outside, sirens pass and for a second you think: saved. Then the siren fades and it's just the two of you again, two sinners playing at redemption, neither holy enough to forgive the other.  The Fate of Ophelia`,
      zh: `你在厨房跟他吵架，手边是红酒瓶和塑料杯。他说你根本不信他，你说我信什么我自己都不知道。吵到半夜你摔了杯子，蹲在地上捡碎片。他蹲下来帮你捡，手划破了，血滴在瓷砖上。你拿创可贴给他贴，贴完两个人都没说话。后来你把头靠在他肩上，觉得这一刻比教堂钟声还像真的。但你心里明白，你俩谁也不是谁的救世主。`,
    },
  },
  {
    title: `The Fate of Ophelia`,
    artist: `Taylor Swift`,
    album: `The Life of a Showgirl`,
    review: {
      en: `They warned you the river had no mercy. You nodded like someone who'd never get close to the edge. He pulls you in anyway, wet hair, wet laughter, his shirt clinging to his chest. You go under once. Come up laughing. Go under twice. The third time your foot catches on something: rock, root, his hand letting go by accident or on purpose, you'll never know. You break the surface alone. The bank is full of people who saw everything and will still call it a love story.  tolerate it`,
      zh: `你妈在电话里说那个人不行，你说我知道。挂了电话你坐在床边，他在客厅喊你出来看电影。你出去看了，是部爱情片，他全程握着你的手。散场出来风很冷，他把外套披你身上。你闻到他领口洗衣液的味道，脑子里闪过妈妈说的那句话。回到家他先睡了，你坐在客厅把电视声音调到最小。你打开他的手机看了眼，没什么。你把手机放回去，关灯躺到他身边。你知道明天你妈还会打电话，你还是会接，还是会说我知道，然后继续跟他躺在一起。`,
    },
  },
  {
    title: `tolerate it`,
    artist: `Taylor Swift`,
    album: `evermore`,
    review: {
      en: `You rearrange the bookshelf for the fourth time this week. He doesn't look up from the game. "Looks good," he says to the screen. You used to need more than that. Now you take the crumbs and tell yourself you're full. At the grocery store you buy his favorite ice cream and stand in the freezer aisle wondering what would happen if you simply didn't go home. You go home. You always go home. That's the part that hurts, not him. You.  Honey`,
      zh: `你做了他最爱吃的红烧排骨，端上桌他头都没抬说了句放那吧。你在厨房站了一会儿，听到客厅游戏的声音。后来你自己喝完两碗汤，洗完碗，打开手机看单程机票，去一个他没去过的城市。你甚至没订，只是看看。看着看着哭了，因为你知道自己不会走，你只是想在脑子里演练一遍离开他的样子。`,
    },
  },
  {
    title: `Honey`,
    artist: `Taylor Swift`,
    album: `The Life of a Showgirl`,
    review: {
      en: `The age gap is a hallway you walk down every day, pretending not to count the doors. At the office party he calls you ma'am in front of everyone, then honey when the elevator doors close. You shouldn't want either word. You want both. Later he falls asleep on your shoulder on the ride home, mouth slightly open, completely unafraid. You stare at your reflection in the dark window and think: this is the sweetest thing that will ever ruin me.  Guilty as Sin?`,
      zh: `他比你小三岁，叫你姐。有一次喝多了他趴在桌上，含糊叫了一声honey。你愣住了，手里拿着的杯子停在半空。旁边没人听见，音乐很吵。你低头看他，头发遮住半张脸，呼吸很匀。你把外套盖他身上，叫了辆代驾。车上了高架，他靠在后座睡着了，你又听见他嘴里含混地说了一个词，这次你听清了。你把车窗摇下来一点，夜风灌进来，你没看他。到了楼下你叫醒他，他揉着眼睛问刚才在车上说什么了没。你说没有。`,
    },
  },
  {
    title: `Guilty as Sin?`,
    artist: `Taylor Swift`,
    album: `The Tortured Poets Department`,
    review: {
      en: `Nothing happened. That's what you tell yourself in the mirror every morning. Nothing happened, except the way your pulse jumped when he said your name in the meeting. Except the dream you won't write down. Except the fact that you know his coffee order and he knows yours and neither of you needed to ask. Your partner kisses you goodnight. You kiss back. In the dark you stare at the ceiling and feel like a criminal who never touched the money but spent it all in her head.  Down Bad`,
      zh: `同事聚餐他坐在你对面，给你夹了块糖醋排骨，筷子碰到你碗边响了一下。你说了声谢谢，声音很正常。回家后你洗完澡躺在床上，脑子里全是那个碰碗的声音。你没碰过他，没单独跟他吃过饭，没给他发过任何不该发的消息。但你躺在床上把今天的画面从头到尾过了一遍，他夹菜时的手腕，笑起来眼角的纹路，说话时舌尖顶了一下上颚。你翻了个身，把脸埋进枕头。你什么都没做。但你觉得你做了什么。第二天上班你故意绕开他工位走，他从背后叫你，你回头笑了一下，心想完了，又想他了。`,
    },
  },
  {
    title: `Down Bad`,
    artist: `Taylor Swift`,
    album: `The Tortured Poets Department`,
    review: {
      en: `Your therapist asks you to name a time you felt capable this month. You think about the morning you made coffee without crying. That's it. That's the whole list. You see him everywhere, the guy at the bodega has his walk, the barista has his laugh. You write an email you'll never send. Delete it. Write it again. A friend says you need a hobby. You already have one: wanting him. It's exhausting and you're somehow never tired.  All Too Well (10 Minute Version)`,
      zh: `超市里你推着购物车走到饮料区，他喜欢的那个牌子的气泡水在第二排。你伸手去拿，指尖碰到瓶身的那一刻手抖了一下。你拿着那瓶水站在货架前站了很久，旁边的人推车过来你也没动。后来你把水放回去了，又拿出来，最后还是放回去了。结账出来外面下起了雨，你没带伞。你就那么推着车站在门口，雨水打在脸上你也站着。保安过来问你是不是等人。你摇头。你不知道自己在等什么，但你站了二十分钟才走。回去的路上你把车推得很快，像在逃跑。`,
    },
  },
  {
    title: `All Too Well (10 Minute Version)`,
    artist: `Taylor Swift`,
    album: `Red (Taylor's Version)`,
    review: {
      en: `The scarf still smells like him if you bury your face in it hard enough. You keep it in a drawer with the ticket stub, the photo where you're both blurry, the note he wrote on a napkin: don't forget me. You didn't. That's the problem. New people ask about your past and you give them the short version. Alone, you give the long one, the scarf, the stub, the napkin, the way he laughed when it rained, the way he stopped laughing after. You could write a novel. You'd rather not. You'd rather remember.  exile`,
      zh: `你记得那天他穿的蓝色卫衣，袖口磨了边。点菜时他跟服务员说了两遍不要香菜。太阳从西边照进来，他的影子比桌子还长。他付钱时掏的是现金，一张五十，三张十块。站起来的时候椅子在地上蹭了一下。走到停车场他先拉开了车门。你什么都记得。现在你跟别人吃饭，对方问你刚才在想什么，你说没什么。你手指在桌布上无意识地画了个圈，那是他那天用筷子蘸水在桌上画的形状。`,
    },
  },
  {
    title: `exile`,
    artist: `Taylor Swift feat. Bon Iver`,
    album: `folklore`,
    review: {
      en: `You thought he was leaving you. He thought you already had. Two truths, same kitchen, different sides of the table. "I tried," he says. "I waited," you say. Neither of you is lying. You pack your bag. He doesn't stop you, thinks you want to go. You go. Years later a mutual friend mentions his name and you feel the old wound open like a door you forgot to lock. You didn't leave each other. You just never arrived at the same place at the same time.  Death By A Thousand Cuts`,
      zh: `咖啡店那天下雨。他想解释，你摆手说不必了。出门时他追出来给你撑伞，你钻进出租车没接。后来你在车里看手机，他发消息：其实那天我是想说你妈来电话了，你妹妹考上了。你愣住。他说的全是日常，你一直以为他要说分手。出租车在红灯前停了，你看着窗外雨刷扫来扫去。你想回点什么，但红灯结束了。`,
    },
  },
  {
    title: `Death By A Thousand Cuts`,
    artist: `Taylor Swift`,
    album: `Lover`,
    review: {
      en: `It's the small things that kill you. His playlist still on your Spotify. His side of the bed still warm in your muscle memory. The barista who asks "the usual?" and you have to say there's no usual anymore. You change your route to work. Then you see someone in a jacket that looks like his and your whole day collapses. People say time heals. Time doesn't heal. It just spaces the cuts out until you forget you're bleeding.  Cornelia Street`,
      zh: `删掉微信后的第三天，你路过那家面馆，进去点了两碗。吃完第一碗，第二碗放凉了也没动。结账时老板问另外那碗呢，你说打包。带回去倒掉了。真正让你觉得被千刀万剐的，不是倒掉那碗面，是老板问另外那碗呢的时候，你下意识想回答给他留着，然后想起来，没有他了。`,
    },
  },
  {
    title: `Cornelia Street`,
    artist: `Taylor Swift`,
    album: `Lover`,
    review: {
      en: `You take a different train now. The old stop is two blocks from his building and two blocks is two blocks too many. Sometimes you still get off by mistake, muscle memory stronger than pride. You stand on the corner and watch the window. The light is on. The light is off. Either way you can't go up. Either way you can't leave. You become a person who haunts a street they no longer belong on.  evermore`,
      zh: `你骑车经过那条路故意绕了一大圈。后来朋友约饭，到了才发现拐弯就是那条街。那顿饭你吃了两个小时，一直看门口。他没来。你知道他不会来。但你还是坐在靠窗的位置。不是因为想见他，是想确认：如果有一天他真的从这条街上消失，我还能不能在这条街上吃饭。`,
    },
  },
  {
    title: `evermore`,
    artist: `Taylor Swift`,
    album: `evermore`,
    review: {
      en: `Grief moves in and pays rent on time. It sits in his chair. Drinks from his mug. Knows the password to the Netflix account you still haven't changed. Friends say you should date again. You smile and change the subject. Some nights you talk to the empty room and the room doesn't answer and that's fine, you weren't expecting it to. You're not waiting for him to come back. You're waiting for the version of you who doesn't need him to come back. That person is late.  champagne problems`,
      zh: `冬至那天你一个人包了饺子，包了六十多个。包到一半面不够了，又和了一团。煮出来盛了两盘，一盘端上桌，一盘放在他对面的位置。你吃了五个就不吃了。剩下的你分成三顿，每顿热一盘。第三顿吃完那天是大年三十，外面在放烟花。你站在阳台上看了会儿，回来把那个空盘子洗了，收进柜子。柜子里那套碗是六只，你数了数，一只没少。你关上柜门。窗外烟花还在响。你站在厨房把剩下的面团揉了揉，搓成几个圆子，放进冰箱。明天可以煮了吃。`,
    },
  },
  {
    title: `champagne problems`,
    artist: `Taylor Swift`,
    album: `evermore`,
    review: {
      en: `He got down on one knee in front of everyone you love. You said no. Not because you don't love him, you do, in the way you love things that are too good for you. In the way you're afraid good things expire. He cried. You held him. People think you're cold. You know you're the opposite, so warm you burn everything you touch, so you stopped reaching for the good stuff. He deserved better. You told him that. He said he didn't believe you. You wish you didn't either.  cardigan`,
      zh: `他跟你求婚的时候所有人都看着你。你蹲下来说鞋带松了，其实鞋带没松。你只是需要三秒钟想怎么说"不"。雪落在头发上，他伸手帮你拂掉。你站起来，说我配不上你。这句话是真的，但不是因为你不够好，是因为你没法爱任何人，他就是太好了才让你害怕。你走了两步，回头看门牌号，是你背了三个月的地址。你没上去。`,
    },
  },
  {
    title: `cardigan`,
    artist: `Taylor Swift`,
    album: `folklore`,
    review: {
      en: `You find his sweater in the back of your closet, soft, too big, still holding the shape of someone else's body. You put it on when you're sad. Take it off when you're done being sad. Wash it. Put it back. It's not a shrine. It's a habit. Like smoking. Like checking his profile. Like pretending you're over it while keeping one thing that proves you weren't.  BIRDS OF A FEATHER`,
      zh: `冬天出门你翻出他那件灰色开衫，袖口有猫抓的洞。你穿上它下楼买烟，便利店小哥多看了你一眼。你没解释。回家后你把毛衣脱下来叠好，放进一个纸箱。箱子里还有他落下的充电器、半瓶香水、一本翻了前三页的小说。你本来要扔，但箱子封上之后你放在衣柜最上层。每天开衣柜都能看到那个箱子。你没打开，但你知道它在。`,
    },
  },
  {
    title: `BIRDS OF A FEATHER`,
    artist: `Billie Eilish`,
    album: `HIT ME HARD AND SOFT`,
    review: {
      en: `You and she are the same kind of broken, matching hairline cracks that fit together in the dark. You don't talk about the future. You talk about tonight: what to eat, what to watch, whether the world outside the window is real. "If I died," she says once, "would you miss me?" "Every day," you say. It's not a joke. Neither of you says love. You don't need to. You're already the same bird, same cage, same sky through the bars.  There's Nothing Holdin' Me Back`,
      zh: `你们俩都失眠，凌晨三点同时发了消息给对方，内容都是睡了吗。后来你们养成习惯，半夜睡不着就一起去楼下24小时便利店坐着。她喝热可可，你喝冰美式。有一次她说如果有一天她得了什么治不好的病，你怎么办。你说那我就陪你。她说陪到什么时候。你没回答，把吸管咬扁了。后来她真的查出问题了，甲状腺结节，良性的。你陪她去医院那天排了三个小时的队，她坐在你旁边发抖。你握住她的手，发现她手比你还凉。你想起那晚她说陪到什么时候，你当时没回答，现在你知道答案了。`,
    },
  },
  {
    title: `There's Nothing Holdin' Me Back`,
    artist: `Shawn Mendes`,
    album: `Illuminate`,
    review: {
      en: `You almost call him. Almost get on the train. Almost knock on the door you've knocked on a hundred times before. Something stops you, not pride, not sense. Fear. Fear that this time he'll open it and you'll see he moved on. Fear that he won't open it at all. You walk past the building three times. Go home. Lie in bed with your phone in your hand like a grenade you don't have the courage to throw.  Witness`,
      zh: `周五下班你走到地铁站，刷卡进去了，又退出来。你站在站口想了三分钟，转身往反方向走。走了两条街，风灌进领口，你把外套拉链拉到最上面。你去了他家楼下，抬头看那扇窗，灯亮着。你在楼下站了十分钟，没上去。旁边烧烤摊的烟飘过来，你眼睛有点酸。你掏出手机打了个车，上车报了自家地址。车开过两个红绿灯，你突然说师傅掉头，去刚才那个地方。司机看了你一眼没说话，打了转向灯。到了楼下灯还亮着。你坐在后座，把车窗摇下来，闻到那股烧烤味。你说了句谢谢师傅，付了钱下车。`,
    },
  },
  {
    title: `Witness`,
    artist: `Katy Perry`,
    album: `Witness`,
    review: {
      en: `She saw you fall apart in the break room. Didn't tell anyone. Didn't use it against you in the meeting the next day. You owe her something for that, not love, maybe, but the kind of loyalty that starts when someone keeps your secret. You start looking for her in the hallway. Saving her a seat. Remembering how she takes her coffee. It's not romance yet. It's the beginning of being seen, and you're so hungry for it you could cry.  I Drink Wine`,
      zh: `你在公司一直是个很得体的人，开会发言从不掉链子。有一天加班到很晚，整层楼只剩你和一个新来的实习生。你趴在桌上哭了起来，没忍住。她没说话，递了张纸巾给你。你接过来擦了擦脸，说不好意思最近太累了。她说没事。第二天开会你照常发言，条理清晰。她坐在最后一排看着你，你讲完坐下，跟她目光对上的那一秒你心慌了一下。午休你去找她，问她昨晚没跟别人说吧。她说没有。你塞给她一盒巧克力。她收下了。后来每次你看见她，都觉得她手里攥着你昨晚那张哭花的脸。`,
    },
  },
  {
    title: `I Drink Wine`,
    artist: `Adele`,
    album: `30`,
    review: {
      en: `The bottle is half empty and you're half honest. Alone in your kitchen you replay the relationship like a film with the sound off, you can see everything clearly now. The red flags were red. You were colorblind. Or you saw them and walked toward them anyway. You pour another glass. Tomorrow you'll be sober and sensible and delete his number. Tonight you're drunk and honest and you write his name on a napkin then cross it out so hard the paper tears. Progress.  Save Your Tears`,
      zh: `你开了一瓶白酒，想着喝多了就能睡着。第一杯下去胃里热起来，你靠在沙发上闭眼，脑子里全是今天的画面。第二杯你开始想他上次说那句话到底是什么意思。你拿出手机翻了翻聊天记录，发现他说的每个字你都记得，连标点符号你都能复述。第三杯你坐直了，突然想明白了一件事，他其实从来没认真过。你越喝越清醒，清醒到能感觉到客厅的灯有一盏在闪。你关了那盏灯，又倒了一杯。喝到后来你没醉，也没睡着，你坐在地板上靠着沙发腿。天蒙蒙亮了。窗外楼下早点摊开始支摊子，铁锅碰了声瓷碗。你听得清清楚楚。`,
    },
  },
  {
    title: `Save Your Tears`,
    artist: `The Weeknd`,
    album: `After Hours`,
    review: {
      en: `He wants to come back now that you're gone. Classic. You let him take you to dinner. You let him talk. You let him think he still has access. You watch him perform regret, the right pauses, the right eyes, the wrong timing. You used to cry for this man. Now you feel nothing except a faint amusement, like watching a movie you've seen before. He reaches for your hand. You pull away and sign the check. "Don't save your tears for me," you say. You mean it.  Out of Time`,
      zh: `三年前你出车祸住院，给他打了七个电话，他没接。后来你一个人签的手术单。出院那天你打车回家，路上下了雨。现在他坐在你对面吃饭，说你最近怎么不找他了。你说忙。他说他最近不太顺，想找人聊聊，第一个想到你。你给他倒了杯水，说慢点吃。他开始说他的事，你听着，夹了块菜放嘴里嚼。他说着说着停下来，问你怎么不回应。你说我在听。他说你眼神不对，像是心不在焉。你笑了笑。结账的时候他抢着付钱，说你以前从不让我付。你说现在不一样了。出了餐厅你没等他，自己走了。他追上来问你晚上有空吗。你说有，但不去了。`,
    },
  },
  {
    title: `Out of Time`,
    artist: `The Weeknd`,
    album: `Dawn FM`,
    review: {
      en: `The letter took you three months to write. You mail it on a Tuesday. By Friday she's engaged to someone else, posted online, ring visible, caption full of exclamation marks. You read it twice. Throw the returned envelope in the trash. You weren't late. You were never in the race. You just thought the starting gun was pointed at both of you. It was only ever pointed at you.  I Feel It Coming`,
      zh: `你想了很久，终于在一个周日下午写完了那封长信。你写了你们第一次见面那天你穿了什么，写了你为什么一直没说出口，写了这三年你每次想开口又咽回去的那些瞬间。你把信折好放进信封，写了她的地址。出门的时候下起了小雪。你走到邮局，工作人员说今天周日，不收件，明天来。你说好。你把信揣在兜里。第二天你加了班，下班晚了，邮局关了。第三天你终于寄出去了。十天后你收到她朋友转发的消息，她上个月结婚了。你站在公司楼下的花坛边上，把手揣在兜里，摸到那封信的复印件，你之前多打了一份留底。雪化了一半，地是湿的。你把复印件掏出来，撕了，扔进花坛。`,
    },
  },
  {
    title: `I Feel It Coming`,
    artist: `The Weeknd ft. Daft Punk`,
    album: `Starboy`,
    review: {
      en: `You feel it before it happens, the slow tilt of a room when someone walks in. He hasn't said anything yet. Neither have you. But your body knows. Your body is traitorous and hopeful and stupid. You catch yourself fixing your hair before meetings. Staying late when he stays late. You tell yourself it's nothing. Your pulse tells you something else. The storm is coming. You're not running.  Strawberries & Cigarettes`,
      zh: `新来的同事坐在你斜对面，你俩负责同一个项目。第一周你们没怎么说话。第二周开周会，她说到一半卡住了，你接过话补完了。她看了你一眼，那眼很短。加班的时候她点了外卖，问你要不要一起。你说不饿。她把其中一份推到你桌上说留着。那是份还热着的炒饭，你闻到葱花和鸡蛋的味道。你吃了。后来你开始留意她几点到公司，几点去接水，用什么牌子的咖啡。你不知道这算什么。你俩什么都没发生。但每天早上你到公司，推开门那一刻你会先看她工位在不在。有一次她请假没来，你对着空工位坐了一上午，午饭才想起来自己没喝水。`,
    },
  },
  {
    title: `Strawberries & Cigarettes`,
    artist: `Troye Sivan`,
    album: `Bloom`,
    review: {
      en: `Summer tastes like strawberries and smells like his cigarettes. You didn't like either until you liked him. Now you can't separate them, sweet and bitter, want and warning, the thing that feeds you and the thing that kills you slow. Years later you bite into a strawberry and think of him. You light nothing. You quit both. You didn't quit the memory. Some flavors stay on your tongue forever.  四月物语`,
      zh: `你不抽烟。那年夏天他总在天台抽烟，你跟着上去吹风。他在那头抽，你在这头吃他带上来的草莓。有时候风把烟吹过来，你手里草莓上就落了一点烟味。你咬一口，草莓是甜的，舌尖上混着一点点苦。后来你们没在一起。多年以后你在超市看到草莓会想起那个天台，路过抽烟的人会想起草莓。有一年冬天公司团建，桌上摆了一盘草莓，有人在门外抽烟。你夹起一颗草莓放进嘴里，烟味从门缝里飘进来。你嚼了两下突然停住了。你发现你分不清自己想的是草莓还是烟，是他还是那个夏天。`,
    },
  },
  {
    title: `四月物语`,
    artist: `林家谦`,
    album: `Major in Minor`,
    review: {
      en: `April is a letter you never send. The cherry blossoms fall like punctuation, period, period, period, end of sentence, end of spring, end of whatever you thought was beginning. You walk through the park alone. Everyone else is in pairs. You tell yourself solitude is a choice. Your chest tells you something else. You buy ice cream. It melts before you finish it. You throw it away and keep walking. April is long. You are longer.  悲剧人物`,
      zh: `四月的周末你去了趟公园，樱花掉得满地都是。有个小孩蹲在地上捡花瓣，攒了一把往天上撒，他妈妈在旁边拍照。你找了个长椅坐下，阳光晒在背上很暖。你想起昨晚做的梦，梦里有人叫你名字，声音很远，你回头但看不见人。风一吹花瓣落了你一肩。你拍掉了。坐了一会儿你掏出手机，通讯录翻了一遍没打出去。你站起来往回走，路过卖糖葫芦的摊子，买了一串。咬第一口糖衣碎了，山楂是酸的。你忽然觉得四月好长，长得你不知道怎么过完它。`,
    },
  },
  {
    title: `悲剧人物`,
    artist: `张敬轩`,
    album: `No. Eleven`,
    review: {
      en: `You always knew you were the understudy. He said the right things on opening night, you're amazing, you're enough, and you smiled like you believed him. You didn't. You knew the lead was someone else. Someone he talked about too casually. Someone whose name he said like a prayer. You played your part until the curtain fell. Then you went home and took off the costume and finally looked like what you were: tired. The tragedy isn't that he didn't love you. It's that you stayed anyway, knowing the script.  春秋`,
      zh: `你在这段关系里演了三年的配角。台词只有两句：嗯和好的。散伙那天他请你吃饭，说你真的很好。你笑着说谢谢。其实你知道，从第一年开始你就知道。第一次是他忘了你生日，你跟自己说他太忙了。后来你住院那次他出差去了，你说工作要紧。再后来你妈问他什么时候见家长，他岔开了话题，你帮他把话接走了。每一次你都知道。你坐在他对面吃完了那顿散伙饭，他说你真的很好的时候，你在心里想，我知道，我一直都知道。但你知道最悲哀的是什么吗，回家路上你踩进水坑袜子湿了，你没换，穿着湿袜子睡了。第二天醒来你第一件事是摸手机看他有没有给你发消息。没有。你把手机放下，又想起昨晚他说你很好。`,
    },
  },
  {
    title: `春秋`,
    artist: `张敬轩`,
    album: `Urban Emotions`,
    review: {
      en: `Years pass like seasons, you stop counting which one you're in. You hear a song on the radio and for three seconds you're back there: his car, his hand on the gear shift, the window down, the world small and perfect. Then the song ends. You're in traffic. Alone. Fine. You tell people you're fine. You almost believe it. Then autumn comes again and you remember everything: how he left, how you survived, how survival isn't the same as living. Spring will come. You don't know if you'll feel it.  隐形游乐场`,
      zh: `三年了。你搬了家，换了工作。头发也剪短了。连喝咖啡都从拿铁换成了美式。你妈偶尔问起他，你说早没联系了，语气很平。上个月朋友结婚你去了，席间碰到他朋友，说他挺好的。你点头说那就好。你以为你好了。直到上周你收拾旧物，从一本书里掉出一张电影票根。上面的字已经模糊了，但你记得那部电影，记得那天他迟到了二十分钟，记得散场后下雨你们共撑一把伞，你的左肩湿了一路。你拿着票根站了很久，最后把它夹回书里，放回原处。三年了，时间把所有东西都冲淡了，连他长什么样你都要想一下才能想起来。但那天他迟到二十分钟这件事，你一点没忘。`,
    },
  },
  {
    title: `隐形游乐场`,
    artist: `张敬轩`,
    album: `隐形游乐场`,
    review: {
      en: `The playground was demolished when you were twelve. You still dream about the slide, the metal hot in summer, the way you'd climb to the top and feel like you could see the whole city. Now it's a parking lot. You drive past it on your way to work. Don't stop. Don't look. Your body remembers the height anyway. Some places live in you long after they're gone. Some people too.  青春告别式`,
      zh: `你跟人说旧街转角有个游乐场，有秋千有滑梯，他们摇头说那里一直是停车场。你带他们去看，走到路口真的只有白线和水泥墩子。你蹲下来摸了摸地面，凉得没什么温度。小时候你从滑梯上摔下来，膝盖破了一块，血就滴在这块地上。你闭上眼，滑梯和秋千还在，就在你眼皮底下。睁开眼，只有停车场。`,
    },
  },
  {
    title: `青春告别式`,
    artist: `张敬轩`,
    album: `青春告别式`,
    review: {
      en: `You leave the dorm for the last time with two suitcases and a box of things you won't unpack for years. The hallway smells like laundry detergent and regret. Someone is crying behind a door. Someone is laughing. You don't knock on either. Outside, the campus looks smaller than it felt when you arrived. You take a photo you won't post. Get in the car. Don't look back until you're on the highway. Then you look back once. That's enough.  高山低谷`,
      zh: `交完钥匙你下楼，走廊里有人在搬箱子，纸皮箱上写着名字和宿舍号。你走到校门口停下来，回头看了一眼那栋楼，阳光正好打在三楼你住过的那间窗户上。你突然想不起来自己大一时候的样子了，连头发长短都记不准。你拎着行李箱站在原地，像参加完一场仪式还没散场。出租车的喇叭按了两声，你才往前走。`,
    },
  },
  {
    title: `高山低谷`,
    artist: `林奕匡`,
    album: `Phil Lam`,
    review: {
      en: `From the rooftop the city looks like a circuit board, every light a life, every life a story you'll never read. You're up here because the apartment is too quiet. Down there someone is laughing. Up here you're breathing. Both things are true. You think about jumping, not to die, just to feel something. You don't. You go back downstairs. Make tea. Sit with the quiet. The valley is deep. You're still in it. You're still breathing.  东京人寿`,
      zh: `你加班到十一点出来，站在写字楼门口等车，抬头看周围的楼，每层都亮着灯。顶层那户灯是暖黄的，阳台晾着衣服，里头有人在过日子。你脚下是马路，背后是关了门的商铺，头顶才是别人的光，你站在最低的地方往上看。你想，那些灯后面的人可能也跟你一样在谷底，但你们永远不会互相打招呼。车来了，你钻进后座，趴在窗上看尾灯。`,
    },
  },
  {
    title: `东京人寿`,
    artist: `容祖儿`,
    album: `薛丁格的猫`,
    review: {
      en: `The ticket is one-way. You hold it at the gate like a question you're finally answering. Tokyo is cold and loud and nothing like the movies. Good. You didn't come for the movies. You came to be someone who doesn't exist back home, the version of you who didn't wait, didn't ask, didn't need permission. You eat convenience store onigiri at midnight. Get lost on purpose. Live one day that belongs only to you. Life is short. You're finally acting like it.  连续剧`,
      zh: `你站在成田机场出口，手里捏着那张没回程的票。冷空气扑过来你才反应过来这是冬天，你只带了件薄外套。行李箱拉开，最上面是三包薯片和一罐咖啡，你怕饿也怕冷，出门前一样一样往里塞。你站在机场时钟下面，人生苦短这四个字刚才在飞机上想了一路。你把薯片拿出来撕开吃了。嚼到第三口才觉得踏实了一点。`,
    },
  },
  {
    title: `连续剧`,
    artist: `容祖儿`,
    album: `连续剧`,
    review: {
      en: `You find the old hard drive in a drawer, years of videos, labeled by date. Episode 1: you two at the beach, sunburned and laughing. Episode 47: a fight, camera off but audio still running. Episode 100: his birthday, cake, candles, you singing off-key. The series ended. No finale. Just stopped. You watch one episode. Close the laptop. Some stories don't get endings. They just stop mid-sentence.  用背脊唱情歌`,
      zh: `你把那盘录像带塞进机器，屏幕跳了两下才出画面。画质糊得厉害，你在画面里笑得露牙，他在后面追着摄像机晃。那时候你们每周都拍一段，一集一集攒着像连续剧。看到第七分钟磁带卡住了，画面冻在你转过头的那一帧。你把机器关了，带子退出来，盒子上还写着第几集。剧早就播完了，剩下的是这一堆带子。`,
    },
  },
  {
    title: `用背脊唱情歌`,
    artist: `汤令山`,
    album: `用背脊唱情歌`,
    review: {
      en: `Your back is to him when you say it. Easier that way. "I know," you say. Not don't go. Not stay. Just I know. He waits for more. You don't turn around. If you turn around you'll break. He leaves. The door closes. You stay facing the wall. Your back learns to sing the songs your mouth won't. It's the only performance you'll give tonight.  紧急联络人`,
      zh: `他说要走的那句话，你正好背对着他在洗碗。水龙头开着，你听见他说完没回头，只说了句路上小心。碗洗完了你才关水，手在水里多泡了一会儿，指尖都皱了。门关上的声音很轻，比他平时关门还轻。你没转身去送他，因为转身就得看他的脸，看了你就撑不住。你站在水池前面，把那只碗又洗了一遍。`,
    },
  },
  {
    title: `紧急联络人`,
    artist: `汤令山`,
    album: `紧急联络人`,
    review: {
      en: `On the form, in the box for emergency contact, you write his name. Cross it out. Write your mother's. Cross it out. Write his again. The nurse watches you. You hand her the clipboard. "He might not come," you say. "But he's the one I'd want to." She doesn't ask why. Some questions have answers too sad for a hospital waiting room.  东邪`,
      zh: `医院让你填表，紧急联络人那一栏你写了他名字又划掉，改成你妈。护士说最好留个能第一时间赶到的，你想了想又把他写回去了。你跟自己解释说他在同城，你妈在老家。其实你也不确定他还会不会赶来，但你手比脑子先动。表交上去之后你坐在走廊塑料椅上，盯着复印件上他名字看了很久。墨水还没干。`,
    },
  },
  {
    title: `东邪`,
    artist: `MC张天赋`,
    album: `东邪`,
    review: {
      en: `You know his schedule better than he knows yours. Tuesday gym. Thursday drinks with the boys. Sunday sleep till noon. You learned it by accident. Then on purpose. Then it became the only map you had of a person who never gave you directions. You're not proud of this. You do it anyway. Love makes detectives of us all. You just wish the case would close.  世一`,
      zh: `你把他的行程背下来了，周二晚上健身，周五跟朋友吃饭，周日睡到中午。这些他没告诉过你，是你一条条拼出来的。你知道这不对，但停不下来，像练功练岔了气。他某天突然换了个常去的店，你站在原来那家门口愣了十分钟。后来你删掉了备忘录里那张表，但相册里还存着他常点的那杯咖啡的照片。你不后悔，你只是累了。`,
    },
  },
  {
    title: `世一`,
    artist: `MC张天赋`,
    album: `世一`,
    review: {
      en: `Your friend asks why him. You could list a hundred reasons, his laugh, his hands, the way he texts back. Instead you say: "Because when he's not there, no one else fits." She doesn't understand. You don't expect her to. Some people aren't the best on paper. They're just the only ones who feel like home. You'd rather a flawed home than a perfect hotel.  无名氏`,
      zh: `朋友问你这人哪里好，你想了半天，说他切苹果会把皮削得不断。朋友说这也算理由。你笑笑说不出来就是说不出来，换了别人就是不行。你跟一个各方面都比他好的人吃过顿饭，全程都在想他要是这里也会点这道菜。后来你一个人走回家，路灯一盏盏亮起来。你也想过换一个，但走到哪个路口都想起他。`,
    },
  },
  {
    title: `无名氏`,
    artist: `MC张天赋`,
    album: `无名氏`,
    review: {
      en: `In his phone you're a full name and nothing else. No emoji. No nickname. No babe. Just letters. You see yourself between Mom and Mike from work and feel like a file, not a person. He introduces you as a friend. Always a friend. You smile. Shake hands. Go home and wonder what you'd have to do to become someone worth naming. The list is long. You're tired of auditioning.  记忆棉`,
      zh: `他跟人介绍你的时候说这是我朋友，每次都是这五个字，从没多过一个字。你想，就算加个老字也行，老朋友，至少有个时间在里头。后来你在他通讯录里看到自己，存的是你全名，三个字，没有备注。你翻了他其他联系人，有人标着发小，有人标着兄弟，都有个说法。你那个位置什么都没有，就是一个名字。你把手机还给他，笑着说存得真清楚。`,
    },
  },
  {
    title: `记忆棉`,
    artist: `MC张天赋`,
    album: `记忆棉`,
    review: {
      en: `The mattress remembers him. You roll to his side some nights and the dip is still there, ghost of a body, ghost of a warmth. You lie in it like a grave that's still warm. Morning comes. You make the bed. The dip returns by evening. Memory foam, they call it. Memory, you call it. Same thing. The body leaves. The shape stays.  到此为止`,
      zh: `他走了四十天，床右边那个凹陷还在。你试着睡过去，肩膀正好落进他原来那个坑里。枕头中间也塌了一块，那是他头压出来的形状，记忆棉就是这样，谁睡过它就记住谁，人走了形状不走。你侧过身，脸贴着那块塌下去的地方，凉的，没味道了。你贴了一会儿才起来，顺手把枕头翻了个面，凹陷朝下。第二天早上你又翻回来了。`,
    },
  },
  {
    title: `到此为止`,
    artist: `徐佳莹`,
    album: `心里学`,
    review: {
      en: `You say the words flat, like weather. "That's it." He nods. No fight. No begging. Just two people who ran out of road. You walk home alone. The apartment is quiet. His toothbrush is gone. Good. You stand in the kitchen and eat cereal from the box. You thought ending it would feel like something. It feels like Tuesday.  行走的鱼`,
      zh: `你说到此为止的时候，声音平得像在念天气预报。他点头说好，你们各自站起来，他往左你往右。回到家开灯，鞋柜上他的钥匙不见了，连钥匙他都没忘拿。你打开冰箱想喝点东西，里面只剩一盒快过期的牛奶。冰箱的光照在你脸上，冷气吹着小腿，你站在那里忘了要拿什么。到此为止四个字，你以为说完就干净了。`,
    },
  },
  {
    title: `行走的鱼`,
    artist: `徐佳莹`,
    album: `行走的鱼`,
    review: {
      en: `The office is an aquarium without water. You swim through meetings. Through emails. Through small talk at the coffee machine. Your gills are dry. Everyone else seems fine. You smile. Nod. Die a little inside. By five you're exhausted from pretending to breathe. You go home. Lie on the floor. Finally, air.  行走的鱼`,
      zh: `你穿着西装站在写字楼大堂，领带勒得脖子发紧。外面太阳大，门里空调冷，你站在中间哪边都不对。同事经过打招呼，你笑了一下，嘴角是干的。你觉得自己像冲上岸的鱼，鳃还在动，但这里没水。你推开旋转门走出去，热气扑上来，你深吸了一口。空气是干的，你的肺不习惯，但你还是要走回去。`,
    },
  },
  {
    title: `行走的鱼`,
    artist: `汪苏泷`,
    album: `行走的鱼`,
    review: {
      en: `The song is quiet, piano, voice, nothing else. You listen with headphones in the dark. By the chorus you're crying and you can't tell if it's the melody or the memory. Maybe both. Maybe neither. Maybe you're just a fish out of water everywhere you go, work, home, his bed, your bed, the space between. You turn the volume down. The feeling stays loud.  鱼仔`,
      zh: `他这个版本把编曲减到只剩钢琴和人声，安静得你能听见耳机线擦到领口的声音。你躺在床上单曲循环，眼睛盯着天花板。到第二遍副歌你听见了水声，很轻，像鱼缸里的气泡。你分不清是歌里藏着的还是你自己的眼眶在响。你伸手摸了一下脸，是湿的。你把音量调小，水声反而更清楚了。`,
    },
  },
  {
    title: `鱼仔`,
    artist: `卢广仲`,
    album: `鱼仔`,
    review: {
      en: `The goldfish dies while you're at work. Your roommate texts a photo, small orange body floating at the top. You stare at it in the elevator. You'd had that fish since college. Named it something stupid. Loved it in the way you love things that ask nothing of you. You get home. Flush it. Wash the bowl. Put the bowl in the cabinet. Some deaths are too small for grief. You grieve anyway.  太阳与地球`,
      zh: `你爸发消息说鱼缸里那条鱼死了，你回了个哦，把手机扣在桌上。晚上洗完澡你突然想起它叫豆豆，是你小学三年级起的名字。你翻出相册找了半天，找到一张像素很糊的照片，鱼只有一小团橙色。你盯着那团橙色看了很久，想起你曾经每天放学回家第一件事是喂它。一条巴掌大的鱼死了你回了个哦，但它的名字你记了二十年。你把那张照片存进了一个新建的相册，名字打了又删，最后什么也没写。`,
    },
  },
  {
    title: `太阳与地球`,
    artist: `卢广仲`,
    album: `太阳与地球`,
    review: {
      en: `You orbit him. He is the sun, bright, distant, the center of a system you weren't invited to design. You send good morning texts like gravity, predictable, invisible, essential. Sometimes he replies. Sometimes he doesn't. You keep orbiting. One day you realize you've been circling so long you forgot what it felt like to stand still. To be your own center. You delete the thread. The silence is terrifying. Also: yours.  如果呢`,
      zh: `你早上醒来第一件事是给他发早安，发完才下床刷牙。他有时候回有时候不回，你不看也知道，发了这一天才转得起来。有天他隔了十二个小时才回一个嗯，你盯着那个字看了很久，然后删掉了整个对话框。第二天早上你重新打开他头像，敲了一句早安发过去。新的对话框空空的，只有你那一行字孤零零挂在上面。他的头像是个太阳。`,
    },
  },
  {
    title: `如果呢`,
    artist: `郑润泽`,
    album: `如果呢`,
    review: {
      en: `What if you'd said yes? What if he'd stayed? What if the timing was different, the city different, you different? You lie awake building parallel universes, each one a life you didn't live. In every one you're happy. In this one you're not. The what ifs multiply until you're buried. You can't answer them. You can only stop asking. You don't stop asking.  忘记`,
      zh: `凌晨两点你想，如果那天你没删那条消息。想到这里又冒出来，如果他回了你呢，再想到如果你回了之后他又没回呢。一个如果生三个，三个生九个，你躺在黑暗里被这些分叉的宇宙压住。你翻了个身，手机亮度调到最低，想给某人打字，打了删，删了打。你发现自己根本不是在追某个答案，你只是停不下来问。窗外有辆车开过去，灯光从窗帘缝扫过天花板，你闭上眼，如果里头还在生如果。`,
    },
  },
  {
    title: `忘记`,
    artist: `郑润泽`,
    album: `忘记`,
    review: {
      en: `You delete the photos. Change the number. Unfollow. Block. Move. New city, new job, new haircut. You think you've forgotten. Then a song plays in a café and you're back in his kitchen, his shirt, his smell. Forgetting isn't deletion. It's compression. Everything still there. Just smaller. Harder to see. Not gone.  你爱上的我`,
      zh: `你换了壁纸，删了合照，清了收藏，取关了他常去的店。你把能做的动作都做了一遍，像完成一份清单。过了一个月你在超市背景音乐里听到这首歌，推着购物车站在泡面货架前，脚步停在副歌那一句。你发现你做的那些动作只是把东西挪了地方，它们都还在你脑子里，一样不少。真正的忘记是某天你突然想不起来，而那一天你还没等到。你把购物车推走，车里只有一桶泡面和一瓶水。`,
    },
  },
  {
    title: `你爱上的我`,
    artist: `张智成`,
    album: `你爱上的我`,
    review: {
      en: `He fell for the version of you that laughed louder, agreed faster, wore the colors he liked. You built her for him. She was good at her job. You got tired of performing. One day you wore green, your color, and he said you looked different. You said I am. He didn't understand. You didn't explain. The real you was always there, folded behind the wardrobe. Waiting.  换日线`,
      zh: `他第一次说喜欢蓝色的时候，你把自己衣柜里的绿色都塞到最里面。后来你买了一件蓝色的外套，穿了两次，肩膀那里总是有点紧。他说你穿蓝色真好看，你笑了笑没说话。绿色的衣服你有五件，蓝色的你穿不长久，但你没告诉他。你照镜子的时候觉得镜子里那个人不像你，但你不确定哪个才是你。他爱上的那个你是你造出来的，真正的你放在衣柜最里面，跟绿色叠在一起。`,
    },
  },
  {
    title: `换日线`,
    artist: `张智成`,
    album: `换日线`,
    review: {
      en: `You're in tomorrow while he's still in today. The math never works, your morning is his middle of the night. Your I love you arrives when he's asleep. His miss you arrives when you're in a meeting. You live in the gaps between time zones. Love in the margins. It wasn't enough. It was never going to be enough. You needed someone in the same hour.  相逢恨早`,
      zh: `飞机落地的时候当地时间比你出发那天还早，你少活了一天。酒店窗户朝东，凌晨四点天就亮了，你坐在窗前算，这边四点，你那边是下午两点。你想打电话，但那边的下午两点他在上班，你不知道说什么开头。你跨过那条看不见的线的时候，你的今天和他的今天就不一样了。你把手机放下，看着窗外一条街慢慢亮起来。你们现在连活在同一天都做不到。`,
    },
  },
  {
    title: `相逢恨早`,
    artist: `张智成`,
    album: `相逢恨早`,
    review: {
      en: `If you'd met later, wiser, softer, less afraid, you might have worked. If you'd met earlier, before the damage, before the armor, you might have worked. You met when you were both wrong for each other and too young to know it. Now you're older. He's gone. You see couples on the street and think: that could have been us, in another life. It wasn't. This life is the one you got.  May I Love You`,
      zh: `你路过中学门口，看见一个男生把书包递给旁边的女生，女生没接，两个人就那么并排走着。你站在马路对面看了他们一会儿，突然想起你们当年也是这样走的，手都不好意思牵。后来你们吵起来的时候什么都摔过，谁也没学会怎么好好说话。你看着那两个小孩走进巷子，知道他们早晚也会把对方弄坏。你替他们心疼，谈不上嫉妒。你拧开手里的水瓶喝了一口，水是温的。`,
    },
  },
  {
    title: `May I Love You`,
    artist: `张智成`,
    album: `May I Love You`,
    review: {
      en: `You type may I love you in the message box. Delete it. Type are you free this weekend. Send. He says yes. You spend three hours choosing a shirt. Zero hours choosing courage. At dinner you laugh at his jokes. Answer his questions. Never ask the one that matters. You go home alone. The question is still in your drafts. Maybe next time. There's always a next time until there isn't.  金玉良言`,
      zh: `你打了三行字，每一行开头都是我想问你。你盯着那三个问号看了很久，一个一个删掉。最后发出去的是周末有空吗，干干净净五个字。他回了个有啊，你松了口气，又开始紧张穿什么。你想问的根本不是这个，你想问可以爱你吗，那四个字你打出来过又删了。你把手机扣在桌上，去翻了衣柜，整晚挑来挑去没挑出勇气。`,
    },
  },
  {
    title: `金玉良言`,
    artist: `张智成`,
    album: `金玉良言`,
    review: {
      en: `Everyone has advice. Find someone stable. Find someone who shows up. Find someone who puts you first. You nod. Take notes. Go home and text the one who does none of those things. Your heart is a bad student. It never learns the lesson. It keeps choosing the same wrong answer because the wrong answer feels like home.  感情用事`,
      zh: `你妈说要找个踏实的，你闺蜜说要找个对你好的，你点头说都对。回家路上你掏出手机，手指自己滑到了他的主页。他发了张猫的照片，你保存了，你不喜欢猫。但你的手指比道理听话。你锁屏，屏幕暗下去映出你自己的脸。道理摆在桌上，你的心一直坐在桌子底下。`,
    },
  },
  {
    title: `感情用事`,
    artist: `王心凌`,
    album: `BITE BACK`,
    review: {
      en: `You know his coffee order. His mother's birthday. The name of his childhood dog. You forget your own deadlines. Your keys. Your worth. He says you're too much. You hear: you care too much about me. You do. That's the problem. You spent all your emotion on him. There's none left for you.  说什么`,
      zh: `你记得他几点喝咖啡，咖啡加几颗糖。工作上周报你拖了三天，交上去被退回来改了两遍。你跟他说谎说在加班，其实坐在他家楼下花坛边数他窗户亮了几次灯。他说你感情用事的时候你愣了一下，因为你算他喝几颗糖的时候比算季度KPI还仔细。你在他身上花了全部的精明，剩下的生活一塌糊涂。你关掉电脑里那份没改完的周报，又打开了他的对话框。`,
    },
  },
  {
    title: `说什么`,
    artist: `呆呆破`,
    album: `说什么`,
    review: {
      en: `The words pile up behind your teeth. In the shower you say them, perfect, clear, brave. In front of him you swallow them. He talks. You nod. Go home and replay the conversation with your lines inserted. In the revised version you say everything. In the real version you say nothing. The gap between the two versions is where you live.  水星记`,
      zh: `他在你对面说话，你张了张嘴，喉咙发紧，发不出声。他说你怎么不说话，你摇摇头说没什么。回家你对着洗手台的镜子站了四十分钟，把今天想说的一句一句说完了，镜子起雾又散。第二天在电梯里碰到他，他问你吃了没，你说吃了。你那些话，只对镜子说得出来。`,
    },
  },
  {
    title: `水星记`,
    artist: `郭顶`,
    album: `飞行器的执行周期`,
    review: {
      en: `You see him across the platform. Four tracks between you. You could wave. Could shout. Could run. You stand still. The train comes. He gets on. You get on a different car. Closest you'll be all year. Mercury to the sun. You watch his back through the glass until the station disappears. Some distances you don't cross. Some you can't.  我走以后`,
      zh: `你们在同一个十字路口等红灯，隔着四条车道。这是全世界最近的距离，你看得清他手机屏幕上的字。绿灯亮了他过了马路，你站在原地没动。水星绕着太阳转了四十六亿年，最近的距离也有四千六百万公里。你目送他走进地铁站，广播报了你那班公交的站名。你没上车。`,
    },
  },
  {
    title: `我走以后`,
    artist: `张靓颖`,
    album: `我走以后`,
    review: {
      en: `You leave milk in the fridge, expiry date visible. A test. A timer. A way to measure how long he notices you're gone. Weeks pass. The milk spoils. He doesn't throw it out. You come back for mail and see it still there. He didn't forget you. He didn't remember you either. You take your things. Leave the milk. Some things aren't worth carrying.  在夏夜`,
      zh: `你搬走那天他往冰箱塞了一盒酸奶，保质期还剩十二天。你没拿走，留在了第二层。一个月后你回去取落下的充电器，打开冰箱，那盒酸奶还在，过期十九天了。你拿起来闻了一下，一股酸味冲上来，你扔进了垃圾桶。充电器在床头柜抽屉里，你拿了就走。门关上那一刻你才反应过来，你走以后，酸奶替你倒计时了十九天。`,
    },
  },
  {
    title: `在夏夜`,
    artist: `郑兴`,
    album: `在夏夜`,
    review: {
      en: `The fan blows hot air. The mosquitoes bite. The city hums like a body trying to sleep. You lie on the floor because the bed is too warm. Think about calling someone. Don't. The night is long. You're longer. By morning the sweat has dried and you feel like you've survived something. You have. Another night. Another summer. Another you, still here.  任性`,
      zh: `城中村顶楼没空调，你把席子铺在天台地上，风扇吹过来的风是热的。蚊子在你小腿上咬了三个包，你没拍。隔壁在放歌，调子飘过来，你哼得出旋律但叫不出名字。席子被汗浸湿了一块，你翻了个身，湿的那面朝上。天台的水泥还烫脚，你摸了一下又缩回来。什么都是黏糊糊的，什么也抓不住。`,
    },
  },
  {
    title: `任性`,
    artist: `孙燕姿`,
    album: `风筝`,
    review: {
      en: `You bought the ticket on impulse, money you didn't have, time you couldn't spare. Six hours on a hard seat to stand outside his school like a ghost. He saw you. Looked surprised. Then embarrassed. You said you were passing through. You weren't. You were seventeen and stupid and in love. He was seventeen and kind and not in love with you. You got back on the train. Never did that again. Almost.  我怀念的`,
      zh: `十七岁你用攒了两个月的零花钱买了张硬座票，坐了六小时去他的城市。到了校门口你坐在马路牙子上，看学生进进出出，坐了一下午。他出来倒垃圾看到你，愣了两秒。你说路过，正好经过这边。其实你坐了六小时的火车，根本没有什么路过。你做了这辈子最任性的事，但最后三个字把它全部撤回了。`,
    },
  },
  {
    title: `我怀念的`,
    artist: `孙燕姿`,
    album: `逆光`,
    review: {
      en: `You miss who you were when you loved him. Not him, her. The girl who laughed too loud. Who believed in forever. Who didn't know yet that forever is a lie people tell to make leaving hurt more. You find an old photo. That girl is gone. You mourn her sometimes. More than you mourn him.  开始懂了`,
      zh: `搬家的时候你翻出一张大一的饭卡，照片里你笑得眼睛弯成两道月牙。你对着玄关的镜子笑了一下，嘴角的弧度对了，但眼睛是直的。你又试了一次，还是不行。你把饭卡塞回钱包夹层，你已经不刷卡了，但你舍不得那张脸。你以为你一直在想他，其实你想的是那个笑起来眼睛会弯的人，她跟那张饭卡一起留在了大一。`,
    },
  },
  {
    title: `开始懂了`,
    artist: `孙燕姿`,
    album: `我要的幸福`,
    review: {
      en: `It hits you in the car, watching a stranger help an old woman cross the street. Small kindness. No audience. You think: that's what I wanted. Not fireworks. Not grand gestures. Someone who'd help you cross the street and not make a thing of it. You didn't have that. Now you know what to look for. Small comfort. Late, but real.  雨天`,
      zh: `出租车上你看到路边有个男人蹲着给流浪猫喂罐头，猫吃得很慢，他蹲着等。他没有看手机，就蹲着等。车开过去你回头看，他已经站起来了，猫还在吃。你突然懂了一件事，你之前缺的那种东西，是有人愿意蹲下来等你吃完。这个念头只闪了一下，司机问你还要往哪开，你说直走。`,
    },
  },
  {
    title: `雨天`,
    artist: `孙燕姿`,
    album: `雨天`,
    review: {
      en: `You wait under the awning for someone who isn't coming. Rain gets heavier. You tell yourself five more minutes. Then five more. Your phone stays dark. A stranger offers an umbrella. You say no. You're waiting. For what, you're not sure anymore. When you finally walk into the rain you're soaked and relieved. Waiting is worse than wet.  我不难过`,
      zh: `下班下雨了，你没带伞，站在公司门口屋檐下，跟自己说在等雨小一点。二十分钟雨反而大了，同事撑伞问你要不要一起走，你说不顺路。你看着她走远，又站了一会儿，最后还是冲进了雨里。跑了两步鞋里灌了水，你干脆放慢了走，水顺着头发流进领口，凉的。你等的人始终没来，但你已经湿透了，等不等也没有区别了。`,
    },
  },
  {
    title: `我不难过`,
    artist: `孙燕姿`,
    album: `Leave`,
    review: {
      en: `He says let's stay friends. You say sure. Hang up. Put on a show. Laugh at something that isn't funny. Make tea you don't drink. You're fine. You're fine. You're fine. Your hands shake when you pour the water. You pour it anyway. Fine is a performance. You're giving an encore.  逆光`,
      zh: `他说做朋友吧，你说好。挂了电话你点开追的剧，看了四十分钟发现同一个画面播了三遍。你去厨房倒水，杯子端到嘴边水是凉的，烧水壶的插头没插上。你把水放下，把插头插上，等水烧开。水开了你倒了一杯，又放下了。你跟自己说我没有难过，但你的手在发抖，壶里的水还没凉你已经又烧了一壶。`,
    },
  },
  {
    title: `逆光`,
    artist: `孙燕姿`,
    album: `逆光`,
    review: {
      en: `You quit on a bright day. Walk out with a box of your things, mug, plant, photo frame empty now. The sun is in your eyes. You don't look back at the building. You look forward. Can't see much. Squinting. Walking anyway. Someone holds the door. You say thanks. Keep going. The light is blinding. You choose it.  害怕`,
      zh: `你辞职那天是个大晴天，拎着纸箱子走出写字楼，阳光直接打在脸上。你没墨镜，眯着眼，前面什么都看不清，但你还是在往前走。箱子里有个马克杯、两本书、一盆死了的多肉。过马路的时候你差点踩空台阶，有人拉了你一把。你说了声谢谢，继续朝光的方向走。你不知道前面是什么，但你知道后面那些你确定不要。`,
    },
  },
  {
    title: `害怕`,
    artist: `孙燕姿`,
    album: `未完成`,
    review: {
      en: `He reaches for you. You flinch. Not because you don't want him, because you do, and wanting has always ended badly. He pulls back. "Sorry," he says. You say it's fine. It's not. You want to explain. Don't. Some fears you keep to yourself. Some you live with forever.  爱太痛`,
      zh: `他递给你一杯水，你伸手去接的时候往后退了半步，膝盖碰到桌角。你自己都没发现，是他先看到的，他笑了一下说没事。那天晚上你躺在床上想那半步，想了一夜。你觉得自己退对了，靠近就会受伤，你证明过。但胸口有个声音很小声地说，试试看。天亮的时候那个声音已经听不见了，你翻了身，把被子拉到肩膀。`,
    },
  },
  {
    title: `爱太痛`,
    artist: `吴克群`,
    album: `爱太痛`,
    review: {
      en: `You run until your lungs burn. Lift until your arms shake. Fill the hours so there's no room for missing him. It works until it doesn't. Until you're in the shower and the water hides your face and you finally stop performing strength. Love hurt. Letting go hurts more. You keep running. Not from him. From the version of you that still wants him back.  没关系`,
      zh: `你每天下班去健身房跑四十分钟，跑到第三十五分钟腿发软，肺像被拧干的毛巾。教练问你还能不能加五分钟，你说能。加完你扶着跑步机喘，汗滴在履带上。你明明知道膝盖已经隐隐作痛了，明天还会更痛，但你明天还会来。洗澡的时候你想，你分不清是跑步让你上瘾，还是痛让你上瘾。你只知道停下来比痛更难受。`,
    },
  },
  {
    title: `没关系`,
    artist: `吴克群`,
    album: `没关系`,
    review: {
      en: `"It's fine," you say when he cancels. "It's fine," when he forgets. "It's fine," when he chooses everything else first. Fine fine fine until the word means nothing. One day you stop saying it. You say nothing. He notices. Asks what's wrong. You say nothing. And mean it. Nothing is left. That's what's wrong.  残废`,
      zh: `他忘了你生日你说没关系，后来三天没回消息你也跟自己说没关系。第四天你打开对话框，打下"没关系"三个字，盯着看了很久，删掉，改成"那算了"。发出去你盯着屏幕等他回，他没回。你后来才分清，没关系是还在忍着，那算才是忍不住了。但你打那算了的时候，心里还在替他说没关系。`,
    },
  },
  {
    title: `残废`,
    artist: `吴克群`,
    album: `残废`,
    review: {
      en: `After he leaves you can't work the thermostat. The TV. The washing machine he always fixed. You're not broken. You're just a person who let someone else hold the manual. Now you read it alone. Slow. Angry. Proud when something works. You're learning. Late. But learning.  越爱越难过`,
      zh: `他搬走以后你连路由器都不会重启，拔了电源等十秒再插上，这是他教你的，你试了三次才记对顺序。WiFi密码你想改成自己的，搞了一下午，最后还是用他的生日。洗衣机卡在脱水你不知道按哪个键，等他自己转完。晚饭你煮了面条，水放多了，面条坨了。你坐在桌前吃，吃到一半才发现没放盐。他走了以后你才发现，这屋子里能正常运转的东西，都是他留下的惯性。`,
    },
  },
  {
    title: `越爱越难过`,
    artist: `吴克群`,
    album: `越爱越难过`,
    review: {
      en: `The more you loved him the more it hurt to leave. You knew that going in. You did it anyway. Now you sit with the pain like an old friend, familiar, unwanted, permanent. Friends say it gets better. You nod. Go home. Listen to the songs you shared. Cry. Stop crying. Cry again. Love and pain share a border. You live on it.  特别的人`,
      zh: `朋友问你怎么样了，你说都过去了，笑得很松，手指在桌底下把指甲边缘抠出了血。朋友没注意，给你倒了杯茶。你端起来喝了一口，烫的，舌尖麻了一下。你越想放下就越放不下，你越爱他就越难过，这两件事你没法只做一件。回家以后你把那张合照从抽屉里拿出来，看了五分钟，又放回去了。你每天都这样，拿出来，放回去。`,
    },
  },
  {
    title: `特别的人`,
    artist: `方大同`,
    album: `危险世界`,
    review: {
      en: `You went on a hundred bad dates. Checked your phone. Looked for exits. Counted minutes until you could leave. Then you met her. Three hours passed. You didn't look at your phone once. Didn't want to leave. Didn't need an excuse. You went home and stared at the ceiling. Thought: oh. That's what they meant. Special isn't fireworks. Special is forgetting to be anywhere else.  触碰不到的你`,
      zh: `相亲六次你每次都看三次手机，借口去洗手间，回来跟介绍人说不太合适。第七个人约在奶茶店，你坐下来的时候手机充满电。她说话你听着，说到第三个小时你发现两杯奶茶凉了都没怎么喝。你不记得自己有没有看过手机，回家一查，七条未读，三条工作消息。你站在楼下想了一会儿，什么是特别的人，就是你忘了看手机的那种。你点开她的对话框，打了两个字，又删了。`,
    },
  },
  {
    title: `触碰不到的你`,
    artist: `余佳运`,
    album: `触碰不到的你`,
    review: {
      en: `Twelve hundred kilometers. You text every night. Voice notes. Photos. Plans to meet soon. Soon never comes. Months pass. You're still texting. Still waiting. Still telling yourself distance is the problem. Then you move to his city. Same silence. Different zip code. You finally understand: he was never out of reach. He just never reached back.  九月底`,
      zh: `你们隔着一千两百公里，每天聊到凌晨一点，你设了专属提示音。你说想见面，他说等忙完这阵。你查了高铁票，存了三个日期的截图。三个月过去了他还在忙，你换了城市换了工作。搬家那天你把他的聊天记录翻到最早，一条一条往上看，发现每次都是你先发，每次他说忙。你终于明白，你碰不到他这件事，跟距离没有关系，他从来没打算让你碰到。`,
    },
  },
  {
    title: `九月底`,
    artist: `余佳运`,
    album: `九月底`,
    review: {
      en: `September ends. You put away the summer clothes. Pull out the sweater. Find a single sock in the back of the drawer, his, probably. You hold it. Put it back. Some seasons change. Some things don't. You make tea. Sit by the window. Watch the leaves. October comes anyway. You let it.  不对等天体`,
      zh: `九月最后一天你把凉席卷起来塞进柜子顶，换了棉被。夏天的短袖收进真空袋，秋天的卫衣从箱底翻出来。阳台上那盆薄荷枯了，你既没浇水也没扔。拖地的时候从床底扫出一只旧拖鞋，左脚的，右脚那只不知道什么时候丢了。你拿去跟新的配，颜色不对，鞋底厚度也不对。你不扔它，也不买新的配成一双，它不属于夏天也不属于秋天，你就让它待在床底下。`,
    },
  },
  {
    title: `不对等天体`,
    artist: `余佳运`,
    album: `不对等天体（洛希极限）`,
    cover: `https://p2.music.126.net/evJDIXVaX24QcItuI8IvyQ==/109951168154086582.jpg?param=600y600`,
    review: {
      en: `You woke up early to make his coffee. Stayed up late to warm his side of the bed. Your whole orbit was him. When he left for three days you didn't know what to do with the empty hours. Ate at wrong times. Slept in the middle of the day. You were a moon without a planet. Drifting. You learned to find your own light. Slow. But yours.  One Last Kiss`,
      zh: `你的闹钟比他早一个半小时，起来煮粥，装进保温桶放他包旁边。他起床的时候你在地铁上了。晚上回来他已经睡了，你摸黑洗漱，躺到他旁边不敢翻身。有天他出差三天，你睡到了自然醒，发现你这边枕头矮了半截，被子全让你卷走了。你躺在他平时的位置，天花板看着特别高。你这才发现你的整个作息都绕着他转，他出去三天你不会转了，像卫星失去引力，飘了三天。`,
    },
  },
  {
    title: `One Last Kiss`,
    artist: `宇多田光`,
    album: `One Last Kiss`,
    review: {
      en: `The airport is where goodbyes go to die. You hug him. Too long. Not long enough. He pulls away first. Goes through security. Turns once. Waves. You wave back. That's the last one. You didn't know then. You know now. You keep the boarding pass in your wallet. Proof you loved someone enough to let them go.  First Love`,
      zh: `你送他到机场安检口，他回头看了你一眼，挥了下手就进去了。你站在那没动，手心出了汗，攥着地铁卡的塑料壳都滑了。他落地后发了张窗外的云给你，云下面是一片蓝，你存了。后来换了两次手机，那张云还在相册第一屏。你当时不知道那是最后一个回头，最后一张照片。你知道了以后，那张云就变成了唯一还在的东西，你不敢删，也不敢多看。`,
    },
  },
  {
    title: `First Love`,
    artist: `宇多田光`,
    album: `First Love`,
    review: {
      en: `The song plays in the supermarket. Your hands freeze on the cart. Every lyric comes back, muscle memory of a heart you thought you'd retired. You stand in aisle seven and you're sixteen again. First hand held. First kiss. First loss. The song ends. You're thirty-two in frozen foods. You finish shopping. Some loves never leave. They just wait in songs.  君に夢中`,
      zh: `你在超市排队结账，前面的大姐在翻优惠券，收银员扫码滴了一声。头顶的喇叭开始放一首歌，前奏一响你的脚就钉在了地上。你站在那听了整首歌，一句没漏，连第二段副歌的气口你都知道在哪换气。后面的人拍你肩膀你才回过神，轮到你结账了。你以为你早忘了，你连那年的事都不怎么想了，但你的身体记得每一个气口。你的脑子可以忘，你的肺忘不了。`,
    },
  },
  {
    title: `君に夢中`,
    artist: `宇多田光`,
    album: `君に夢中`,
    review: {
      en: `You learned Japanese for him. He moved on before you finished. You kept studying anyway. Now you read menus. Watch films without subtitles. Dream in a language he never learned to love you in. The skill remains. The person doesn't. You wonder if that's a gift or a wound. Maybe both. Maybe that's life.  Me After You`,
      zh: `你报了日语班，因为他说过一句听不懂的话，你想听懂。学到N2的时候他转去学法语了，你那句话还没问出口。后来你看了NHK的纪录片不用字幕，去东京旅游问路日本人夸你发音好。抽屉里还有半包抹茶饼干，是你那时候边背单词边吃的，买不到了你就换了别的。你为一个人迷上了一件事，那个人走了，那件事留下了，长成了你身上的一部分。你不知道这算运气还是残忍。`,
    },
  },
  {
    title: `Me After You`,
    artist: `Paul Kim`,
    album: `Me After You`,
    review: {
      en: `Before him you ate alone without thinking about it. After him you set two places out of habit. Before him you saw movies alone. After him you buy two tickets and sit in the middle, his seat empty. He changed the shape of your solitude. You're still alone. But it's a different alone. Wider. Emptier. Yours.  Rain`,
      zh: `认识他之前你一个人吃饭，一碗饭一个菜，吃完就回家。认识他之后你还是一个人吃饭，但你会点两个菜，另一个没人吃，凉了你打包带走。看电影你还是一个人，但你买票会买中间偏右的位置，那是他坐过的。地铁上你手放在大腿旁边的空位上，手指偶尔动一下，像在握着什么。他走了，但他把你的"一个人"改成了另一种形状。你还是一个人，但已经不是原来那种一个人了。`,
    },
  },
  {
    title: `Rain`,
    artist: `Paul Kim`,
    album: `Rain`,
    review: {
      en: `It rains the day he leaves. It rains the day you stop checking his profile. It rains the day you finally delete the thread. You stop trusting weather. Start trusting time. The rain keeps falling. You keep living. One day the sun comes out. You notice. That's enough.`,
      zh: `阳台窗户没关，雨飘进来打湿了地板，你拖了两遍踩上去还是吱吱响。他留下的那件卫衣挂在晾衣绳上，淋了一下午，你收下来丢进洗衣机。滚筒转的时候你坐在沙发上，听着雨又大了。洗完你挂回去，第二天又下雨，卫衣又湿了，你没再收。雨停了又下，卫衣湿了又洗，洗了又湿，这个圈你转不出去。你站在阳台门口看了一会儿，手里攥着衣架，最后又放下了。`,
    },
  },
];
