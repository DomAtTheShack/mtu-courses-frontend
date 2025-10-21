import React from 'react';
import Image from 'next/image';
import {
	Box,
	Container,
	Heading,
	HStack,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import {NextSeo} from 'next-seo';
import WrappedLink from 'src/components/link';
import GrumpyGif from 'public/images/grumpy.gif';
import LightningGif from 'public/images/lightning.gif';
import {observer} from 'mobx-react-lite';

const AboutPage = observer(() => (
	<Container mb={10}>
		<NextSeo
			title='MTU Courses | About'
			description='About Courses at Michigan Tech'
		/>

		<Heading size='xl' mb={6}>
      About
		</Heading>

		<VStack align='flex-start' spacing={10}>
			<VStack align='flex-start'>
				<Text as='span'>
          👋 Hi! I'm{' '}
					<WrappedLink href='https://maxisom.me' display='inline-block'>
            Max
					</WrappedLink>
          , a former student of Michigan Tech.
				</Text>
				<Text as='span'>
					👋 and I'm{' '}
					<WrappedLink href='https://github.com/domattheshack' display='inline-block'>
						Dominic
					</WrappedLink>
					, a current student of Michigan Tech.
				</Text>

				<Text as='span'>
          I made this tool because Banweb is... well, it gets the job done. But
          whether you're taking a first pass at figuring out courses or planning
          out future semesters, using Banweb always feels more painful than
          necessary (why does it take so many clicks to navigate between course
          descriptions?).
				</Text>
				<Text as='span'>
					Because Banweb is so bad and seeing how this website was going down
					I thought the best thing I can do is bring it back. So now along with me
					and everyone at Tech we can use something other than Banweb.
				</Text>

				<Text as='div'>
          That's where Michigan Tech Courses comes in. How does
					<UnorderedList lineHeight='2'>
						<ListItem>⚡️ instant search</ListItem>
						<ListItem>
              📅 integrated semester planning (with weekly / monthly schedule
              preview)
						</ListItem>
						<ListItem>📈 pass / fail / drop / class size stats(Not Working Right now?)</ListItem>
						<ListItem>🧑‍🏫 integrated instructor ratings</ListItem>
						<ListItem>↔️ searchable transfer courses (!WIP)</ListItem>
					</UnorderedList>
				</Text>

				<Text>In other words:</Text>

				<HStack align='flex-start' spacing={4} alignSelf='center'>
					<VStack>
						<Text fontWeight='bold' mb={2}>
              Banweb
						</Text>
						<Image src={GrumpyGif} />
					</VStack>

					<VStack>
						<Text fontWeight='bold' mb={2}>
              Michigan Tech Courses
						</Text>
						<Image src={LightningGif} />
					</VStack>
				</HStack>
			</VStack>

            <VStack align='flex-start'>
                <Heading size='md' id='mobile'>
                    ☕ Buy me a coffee!
                </Heading>
                <p>
                    If you want to help me keep this site up and running, you can buy me a coffee so I can keep up the servers and hold onto the domain!{' '}
                    <WrappedLink
                        href='https://buymeacoffee.com/domattheshack'
                        display='inline-block'
                    >
                       Any donations are greatly appreciated!
                    </WrappedLink>
                </p>
            </VStack>

			<VStack align='flex-start'>
				<Heading size='md' id='mobile'>
          📱 Mobile App(If you guys really want it I'll bring it back)
				</Heading>
				<p>
          Want to use this on your phone? Check out the 3rd Party Michigan Tech
          Courses Mobile app for Android. The app is{' '}
					<WrappedLink
						href='https://github.com/MichiganTechCoursesMobile/MTUCoursesAndroid'
						display='inline-block'
					>
            open source
					</WrappedLink>{' '}
          and currently available on the{' '}
					<WrappedLink
						href='https://play.google.com/store/apps/details?id=com.mtucoursesmobile.michigantechcourses'
						display='inline-block'
					>
            Google Play Store (Not up yet)
					</WrappedLink>
				</p>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md' id='improvements'>
          🤔 Possible improvements
				</Heading>

				<UnorderedList stylePosition='inside'>
					<ListItem>
            Allow viewing baskets across multiple semesters at once
					</ListItem>
					<ListItem>Show the schedule for any classroom on campus</ListItem>
					<ListItem>
            Allow sharing a basket as a link (send to your advisor or friends)
					</ListItem>
					<ListItem>
            Allow students to add links / details to courses (like adding an
            invite link to a Discord server)
					</ListItem>
				</UnorderedList>

				<p>
          While I plan to maintain this site for the foreseeable future, I'm not
          planning on adding the above features or anything else. - Dominic
				</p>

				<p>
          If you know{' '}
					<WrappedLink href='#tech'>some of the tech I'm using</WrappedLink> and
          want to help maintain this and/or implement new features, please{' '}
					<WrappedLink href='#contact'>reach out</WrappedLink>!
				</p>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md'>📝 Notes</Heading>

				<p>
          All times are in EST and are not adjusted for your current location.
          If you're in MN and a class section is labeled as starting at 10:00
          AM, it would start at 9:00 AM in local time. Generated calendar events
          are not adjusted either for local time, but because they're based off
          of UTC will work just fine across timezones (i.e. you can imported a
          generated calendar in MN before coming up to school and the times will
          stay consistent).
				</p>

				<p>
          Some courses have wrong "semesters offered" data. This is an issue
          with Banweb and not this site.
				</p>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md' id='contact'>
          📮 Contact
				</Heading>

				<Text as='span'>
          Ran into a nasty bug? Or have a cool idea that you'd like to see
          implemented?
				</Text>

				<Text as='span'>
          If you have a GitHub account, feel free to{' '}
					<WrappedLink
						href='https://github.com/DomAtTheShack/mtu-courses-frontend/issues'
						display='inline-block'
					>
            make an issue
					</WrappedLink>
          . Otherwise, you can{' '}
					<WrappedLink href='mailto:dahann@mtu.edu' display='inline-block'>
            email me directly
					</WrappedLink>
          .
				</Text>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md'>❤️ Open source</Heading>

				<Text as='span'>
          We're completely{' '}
					<WrappedLink
						href='https://github.com/DomAtTheShack/mtu-courses-Backend'
						display='inline-block'
					>
            open-source
					</WrappedLink>
          !
				</Text>

				<Text as='span'>
          Hopefully some of the above repositories are useful for your own
          projects.
				</Text>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md' id='tech'>
					🧱 Coding languages I'm using
				</Heading>

				<Text as='span'>I'm currently using:</Text>

				<UnorderedList stylePosition='inside' lineHeight='2'>
					<ListItem>C++</ListItem>
					<ListItem>C</ListItem>
					<ListItem>6502 Assembly</ListItem>
					<ListItem>ARMv7</ListItem>
					<ListItem>PHP</ListItem>
					<ListItem>Java</ListItem>
					<ListItem>Kotlin</ListItem>
					<ListItem>68000 Assembly</ListItem>
					<ListItem>Mips (for the PS1)</ListItem>
				</UnorderedList>
			</VStack>

			<VStack align='flex-start'>
				<Heading size='md'>↔️ API</Heading>

				<Text as='span'>
					<WrappedLink
						href='https://indy.domserver.xyz/docs'
						display='inline-block'
					>
            The API
					</WrappedLink>{' '}
          is open and free to use, but please don't abuse it.
				</Text>
			</VStack>

			<VStack align='flex-start' mb={12}>
				<Heading size='md'>📜 Disclaimer</Heading>

				<Text as='span'>
          Although every effort is made to keep the information listed here
          up-to-date, I make no guarantees about the correctness of the
          information. Please check Banweb for the latest information.
				</Text>

				<Text as='span'>
          That being said, the most critical information here (course and
          section data) should be at most 10 minutes out of date at any given
          moment.
				</Text>
			</VStack>
		</VStack>
	</Container>
));

export default AboutPage;
